import { BehaviorSubject, filter } from "rxjs";
import microdiff, { Difference } from "microdiff";
import { cloneDeep, isEqual, pick } from "lodash-es";
import { enablePatches, produce, applyPatches } from "immer";
import eventBus from "../timeline/events/event-bus";
import {
  ACTIVE_PREFIX,
  ADD_AUDIO,
  ADD_IMAGE,
  ADD_PREFIX,
  ADD_TEXT,
  ADD_VIDEO,
  DESIGN_PREFIX,
  EDIT_PREFIX,
  HISTORY_PREFIX,
  HISTORY_REDO,
  HISTORY_UNDO,
  LAYER_PREFIX,
  SCENE_PREFIX,
} from "../timeline/events/constants-events";
import {
  handleActiveItemsStateEvents,
  handleAddRemoveStateEvents,
  handleEditObject,
  handleSceneStateEvents,
  updateTrackSettings,
} from "./events/crud";
import { IKindHistory } from "@/shared/types";
import { calculateDuration } from "../timeline/utils";

const trackStateKeys = [
  "tracks",
  "trackItemsMap",
  "trackItemDetailsMap",
  "transitionIds",
  "transitionsMap",
  "trackItemIds",
];

const defaultState = {
  size: {
    width: 1920,
    height: 1080,
  },
  tracks: [],
  trackItemIds: [],
  trackItemsMap: {},
  transitionIds: [],
  transitionsMap: {},
  tracksSettings: {},
  scale: {
    unit: 1,
    zoom: 1,
    segments: 1,
    index: 1,
  },
  duration: 0,
  activeIds: [],
  trackItemDetailsMap: {},
  structure: [],
};

export class StateManager {
  stateSubject: any;
  stateHistorySubject: any;
  prevState: any;
  undos: {
    undos: Difference[];
    type: IKindHistory;
  }[];
  redos: {
    undos: Difference[];
    type: IKindHistory;
  }[];
  listener: any;

  constructor(initialState?: any) {
    this.stateSubject = null;
    this.stateHistorySubject = null;
    this.prevState = null;
    this.undos = [];
    this.redos = [];
    this.listener = null;

    const state = initialState || defaultState;
    this.stateSubject = new BehaviorSubject(state);
    this.stateHistorySubject = new BehaviorSubject({
      handleRedo: false,
      handleUndo: false,
    });
    this.prevState = state;
    this.initListeners();
  }

  initListeners() {
    setupHistoryListeners(this);
  }

  destroyListeners() {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

  purge() {
    this.destroyListeners();
  }

  updateHistory(newState: any, actionType: any) {
    const newTrackedState = pick(newState, trackStateKeys);
    const currentTrackedState = pick(this.getState(), trackStateKeys);
    const changes = microdiff(currentTrackedState, newTrackedState);

    if (changes.length) {
      this.undos.push({ undos: changes, type: actionType });
      this.redos = [];
    }
  }

  getStateHistory() {
    return this.stateHistorySubject.getValue();
  }

  subscribeHistory(callback: any) {
    return this.stateHistorySubject.subscribe(callback);
  }

  getState() {
    return this.stateSubject.getValue();
  }

  subscribe(callback: any) {
    return this.stateSubject.subscribe(callback);
  }

  updateState(
    newPartialState: any,
    options = { updateHistory: false, kind: undefined } as any
  ) {
    const currentState = this.getState();

    const updatedState = { ...currentState, ...newPartialState };

    if (!isEqual(currentState, updatedState)) {
      if (options.updateHistory) {
        this.updateHistory(updatedState, options.kind);
      }

      const { trackItemsMap, ...rest } = currentState;

      this.prevState = {
        ...rest,
        trackItemsMap: this.prevState.trackItemsMap,
      };
      this.stateSubject.next(updatedState);
    }
  }

  subscribeToSize(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (!isEqual(currentState.size, this.prevState.size)) {
        callback({ size: currentState.size });
      }
    });
  }

  subscribeToScale(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (
        !isEqual(currentState.scale, this.prevState.scale)
        // !isEqual(currentState.tScale, this.prevState.tScale)
      ) {
        callback({ scale: currentState.scale });
      }
    });
  }

  subscribeToUpdateTrackItem(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (!isEqual(currentState.trackItemsMap, this.prevState.trackItemsMap)) {
        callback({
          trackItemsMap: currentState.trackItemsMap,
          tracksSettings: currentState.tracksSettings,
        });
      }
    });
  }

  subscribeToUpdateItemDetails(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (
        !isEqual(
          currentState.trackItemDetailsMap,
          this.prevState.trackItemDetailsMap
        )
      ) {
        callback({ trackItemDetailsMap: currentState.trackItemDetailsMap });
      }
    });
  }

  subscribeToUpdateTracksSettings(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (
        !isEqual(currentState.tracksSettings, this.prevState.tracksSettings)
      ) {
        callback({ tracksSettings: currentState.tracksSettings });
      }
    });
  }

  subscribeToDuration(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (currentState.duration !== this.prevState.duration) {
        callback({ duration: currentState.duration });
        // this.prevState.duration = currentState.duration;
        // this.prevState = currentState;
      }
    });
  }

  subscribeToHistory(callback: any) {
    return this.stateHistorySubject
      .asObservable()
      .subscribe((historyState: any) => {
        if (historyState.handleRedo) {
          const lastUndoType = this.undos[this.undos.length - 1]?.type;
          if (lastUndoType === "update") {
            callback({ ...this.getState(), type: lastUndoType });
          }
          this.stateHistorySubject.next({
            handleRedo: false,
            handleUndo: false,
          });
        }

        if (historyState.handleUndo) {
          const lastRedoType = this.redos[this.redos.length - 1]?.type;
          if (lastRedoType === "update") {
            callback({ ...this.getState(), type: lastRedoType });
          }
          this.stateHistorySubject.next({
            handleRedo: false,
            handleUndo: false,
          });
        }
      });
  }

  subscribeToAddOrRemoveItems(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (
        !currentState.trackItemIds?.every((item: any) =>
          this.prevState.trackItemIds?.includes(item)
        ) ||
        !isEqual(currentState.tracks, this.prevState.tracks)
      ) {
        callback({
          trackItemIds: currentState.trackItemIds,
        });
      }
      // if (
      //   !isEqual(currentState.trackItemIds, this.prevState.trackItemIds) ||
      //   !isEqual(currentState.tracks, this.prevState.tracks)
      // ) {
      //   callback({ trackItemIds: currentState.trackItemIds });
      // }
    });
  }

  subscribeToActiveIds(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      if (!isEqual(currentState.activeIds, this.prevState.activeIds)) {
        callback({ activeIds: currentState.activeIds });
      }
    });
  }

  subscribeToTracks(callback: any) {
    return this.stateSubject.asObservable().subscribe((currentState: any) => {
      const hasChanges =
        !isEqual(currentState.tracks, this.prevState.tracks) ||
        !isEqual(currentState.trackItemIds, this.prevState.trackItemIds) ||
        !isEqual(currentState.trackItemsMap, this.prevState.trackItemsMap) ||
        !isEqual(currentState.transitionIds, this.prevState.transitionIds) ||
        !isEqual(currentState.transitionsMap, this.prevState.transitionsMap) ||
        !isEqual(
          currentState.trackItemDetailsMap,
          this.prevState.trackItemDetailsMap
        ) ||
        !isEqual(currentState.tracksSettings, this.prevState.tracksSettings);
      // !isEqual(currentState.structure, this.prevState.structure);

      if (hasChanges) {
        callback({
          tracks: currentState.tracks,
          trackItemIds: currentState.trackItemIds,
          trackItemsMap: currentState.trackItemsMap,
          transitionIds: currentState.transitionIds,
          transitionsMap: currentState.transitionsMap,
          trackItemDetailsMap: currentState.trackItemDetailsMap,
          tracksSettings: currentState.tracksSettings,
          // structure: currentState.structure,
        });
      }
    });
  }

  undo() {
    const lastUndoAction = this.undos.pop();
    const undoPatches = lastUndoAction?.undos;
    const actionType = lastUndoAction?.type;
    if (!undoPatches || !actionType) return;

    enablePatches();

    const {
      trackItemDetailsMap,
      trackItemIds,
      tracks,
      transitionIds,
      transitionsMap,
      trackItemsMap,
    } = this.getState();

    const currentState = cloneDeep({
      trackItemDetailsMap,
      trackItemIds,
      tracks,
      transitionIds,
      transitionsMap,
      trackItemsMap,
    });

    const trackPatches: any = [];
    const transitionIdPatches: any = [];
    const trackItemIdPatches: any = [];
    const transitionMapPatches: any = [];
    const trackItemMapPatches: any = [];
    const trackItemDetailsPatches: any = [];

    undoPatches.forEach((patch) => {
      let formattedPatch;
      const patchPath = patch.path.slice(1);

      if (patch.type === "CREATE") {
        formattedPatch = {
          path: patchPath,
          op: "remove",
          value: patch.value,
        };
      } else if (patch.type === "CHANGE") {
        formattedPatch = {
          path: patchPath,
          op: "replace",
          value: patch.oldValue,
        };
      } else {
        formattedPatch = {
          path: patchPath,
          op: "add",
          value: patch.oldValue,
        };
      }

      if (patch.path.includes("trackItemIds")) {
        trackItemIdPatches.push(formattedPatch);
      } else if (patch.path.includes("transitionIds")) {
        transitionIdPatches.push(formattedPatch);
      } else if (patch.path.includes("trackItemsMap")) {
        trackItemMapPatches.push(formattedPatch);
      } else if (patch.path.includes("transitionsMap")) {
        transitionMapPatches.push(formattedPatch);
      } else if (patch.path.includes("tracks")) {
        trackPatches.push(formattedPatch);
      } else if (patch.path.includes("trackItemDetailsMap")) {
        trackItemDetailsPatches.push(formattedPatch);
      }
    });

    const updatedTracks = this.applyPatch(currentState.tracks, trackPatches);
    const updatedTransitionIds = this.applyPatch(
      currentState.transitionIds,
      transitionIdPatches
    );
    const updatedTrackItemIds = this.applyPatch(
      currentState.trackItemIds,
      trackItemIdPatches
    );
    const updatedTransitionsMap = this.applyPatch(
      currentState.transitionsMap,
      transitionMapPatches
    );
    const updatedTrackItemsMap = this.applyPatch(
      currentState.trackItemsMap,
      trackItemMapPatches
    );
    const updatedTrackItemDetailsMap = this.applyPatch(
      currentState.trackItemDetailsMap,
      trackItemDetailsPatches
    );

    const updatedState = cloneDeep({
      tracks: updatedTracks,
      transitionIds: updatedTransitionIds,
      trackItemIds: updatedTrackItemIds,
      transitionsMap: updatedTransitionsMap,
      trackItemsMap: updatedTrackItemsMap,
      trackItemDetailsMap: updatedTrackItemDetailsMap,
    });

    const previousState = cloneDeep(this.getState());
    const newState = { ...previousState, ...updatedState };

    this.prevState = previousState;

    const redos: any = { redos: undoPatches, type: actionType };
    this.redos.push(redos);

    const newDuration = calculateDuration(newState.trackItemsMap);

    this.stateSubject.next({ ...newState, duration: newDuration });
    this.stateHistorySubject.next({ handleRedo: false, handleUndo: true });
  }

  redo() {
    const r: any = this.redos.pop();
    if (!r?.redos || !r?.type) return;

    enablePatches();

    const state = this.getState();
    const {
      trackItemDetailsMap,
      trackItemIds,
      tracks,
      transitionIds,
      transitionsMap,
      trackItemsMap,
    } = state;

    const initialState = cloneDeep({
      trackItemDetailsMap,
      trackItemIds,
      tracks,
      transitionIds,
      transitionsMap,
      trackItemsMap,
    });

    const patchGroups = {
        trackItemIds: [],
        transitionIds: [],
        trackItemsMap: [],
        transitionsMap: [],
        trackItemDetailsMap: [],
        other: [],
      },
      H: any = [],
      _: any = [],
      f: any = [],
      l: any = [],
      p: any = [],
      I: any = [];

    r.redos.forEach((change: any) => {
      const path = change.path.slice(1);
      let patch = {};

      switch (change.type) {
        case "CREATE":
          patch = {
            path,
            op: "add",
            value: change.value,
          };
          break;
        case "CHANGE":
          patch = {
            path,
            op: "replace",
            value: change.value,
          };
          break;
        case "REMOVE":
          patch = {
            path,
            op: "remove",
            value: change.oldValue,
          };
          break;
        default:
          return null;
      }

      if (change.path.includes("trackItemIds")) {
        f.push(patch);
      } else if (change.path.includes("transitionIds")) {
        _.push(patch);
      } else if (change.path.includes("trackItemsMap")) {
        p.push(patch);
      } else if (change.path.includes("transitionsMap")) {
        l.push(patch);
      } else if (change.path.includes("trackItemDetailsMap")) {
        I.push(patch);
      } else {
        H.push(patch);
      }
    });

    const updatedState = {
      tracks: this.applyPatch(initialState.tracks, H),
      transitionIds: this.applyPatch(initialState.transitionIds, _),
      trackItemIds: this.applyPatch(initialState.trackItemIds, f),
      transitionsMap: this.applyPatch(initialState.transitionsMap, l),
      trackItemsMap: this.applyPatch(initialState.trackItemsMap, p),
      trackItemDetailsMap: this.applyPatch(initialState.trackItemDetailsMap, I),
    };

    const newState = cloneDeep(updatedState);
    const mergedState = { ...cloneDeep(state), ...newState };
    this.prevState = state;
    this.undos.push({ undos: r.redos, type: r.type });

    const trackItemsDuration = calculateDuration(mergedState.trackItemsMap);
    this.stateSubject.next({ ...mergedState, duration: trackItemsDuration });
    this.stateHistorySubject.next({ handleRedo: true, handleUndo: false });
  }

  applyPatch(r: any, n: any) {
    return n.reverse().reduce(
      (a: any, s: any) =>
        produce(a, (c: any) => {
          applyPatches(c, [s]);
        }),
      r
    );
  }
}

export function setupHistoryListeners(state: any) {
  const historySubscription = eventBus.subject
    .pipe(filter(({ key }) => key.startsWith(HISTORY_PREFIX)))
    .subscribe((event) => {
      if (event.key === HISTORY_UNDO) {
        state.undo();
      }
      if (event.key === HISTORY_REDO) {
        state.redo();
      }
    });

  const addSubscription = eventBus.subject
    .pipe(filter(({ key, value }) => key.startsWith(ADD_PREFIX)))
    .subscribe((event) => {
      handleAddRemoveStateEvents.bind(state)(event);
    });

  const sceneSubscription = eventBus.subject
    .pipe(
      filter(({ key, value }) => {
        return key.startsWith(SCENE_PREFIX);
      })
    )
    .subscribe(async (event) => {
      await handleSceneStateEvents.bind(state)(event);
    });

  const activeSubscription = eventBus.subject
    .pipe(filter(({ key }) => key.startsWith(ACTIVE_PREFIX)))
    .subscribe(async (event) => {
      handleActiveItemsStateEvents.bind(state)(event);
    });

  const editSubscription = eventBus.subject
    .pipe(filter(({ key }) => key.startsWith(EDIT_PREFIX)))
    .subscribe(async (event) => {
      handleEditObject.bind(state)(event);
    });

  // const layerSubscription = eventBus.subject
  //   .pipe(filter(({ key }) => key.startsWith(LAYER_PREFIX)))
  //   .subscribe((event) => {
  //     handleActiveItemsStateEvents.bind(state)(event);
  //   });

  return () => {
    historySubscription.unsubscribe();
    addSubscription.unsubscribe();
    activeSubscription.unsubscribe();
    sceneSubscription.unsubscribe();
    editSubscription.unsubscribe();
    // layerSubscription.unsubscribe();
  };
}
