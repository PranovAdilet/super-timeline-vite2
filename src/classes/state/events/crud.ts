import {
  ACTIVE_CLONE,
  ACTIVE_DELETE,
  ACTIVE_SPLIT,
  ADD_ANIMATION,
  ADD_AUDIO,
  ADD_IMAGE,
  ADD_TEXT,
  ADD_VIDEO,
  DESIGN_LOAD,
  EDIT_OBJECT,
  SCENE_LOAD,
  SCENE_RESIZE,
} from "@/classes/timeline/events/constants-events";
import { EventBusData } from "@/classes/timeline/events/event-bus/types";
import { StateManager } from "..";
import {
  calculateDuration,
  filterAndCleanTracks,
  loadAudioItem,
  loadImageItem,
  loadTextItem,
  loadVideoItem,
} from "@/classes/timeline/utils";
import { v4 as uuidv4 } from "uuid";
import { cloneDeep } from "lodash-es";
import { ITrack, ITrackItem, TrackSettings } from "@/shared";

export function handleActiveItemsStateEvents(
  this: StateManager,
  obj: EventBusData
) {
  const p = [];
  const value = obj.value;
  const l = [];

  if (value?.payload?.trackItemIds) {
    const trackItemIds = value.payload.trackItemIds;
    l.push(trackItemIds);

    this.updateState({ activeIds: l });
  }

  if (obj.key === ACTIVE_DELETE) {
    const trackItemIdsToRemove = obj.value?.payload.trackItemIds;
    const state = cloneDeep(this.getState());

    const idsToRemove = trackItemIdsToRemove?.length
      ? trackItemIdsToRemove
      : state.activeIds;

    const remainingTrackItemIds = state.trackItemIds.filter(
      (id: any) => !idsToRemove.includes(id)
    );
    const remainingTrackItemDetailsMap = Object.fromEntries(
      Object.entries(state.trackItemDetailsMap).filter(
        ([id]) => !idsToRemove.includes(id)
      )
    );
    const remainingTracks = filterAndCleanTracks(state.tracks, idsToRemove);
    const remainingTrackItemsMap: any = Object.fromEntries(
      Object.entries(state.trackItemsMap).filter(
        ([id]) => !idsToRemove.includes(id)
      )
    );

    // const remainingTracksSettings = Object.fromEntries(
    //   Object.entries(state.tracksSettings).filter(([id]) =>
    //     remainingTracks.find((track) => track.id === id)
    //   )
    // );

    const newDuration = calculateDuration(remainingTrackItemsMap);

    this.updateState(
      {
        trackItemIds: remainingTrackItemIds,
        trackItemDetailsMap: remainingTrackItemDetailsMap,
        activeIds: [],
        trackItemsMap: remainingTrackItemsMap,
        tracks: remainingTracks,
        duration: newDuration,
        // tracksSettings: remainingTracksSettings,
      },
      { updateHistory: true, kind: "remove" }
    );
  }

  if (obj.key === ACTIVE_CLONE) {
    const state = cloneDeep(this.getState());
    const newTrackItemIds: any = [];

    const activeIds = obj.value?.payload.trackItemIds || state.activeIds;
    if (activeIds.length === 0) return;

    if (!state.trackItemsMap[activeIds[0]]) {
      this.updateState({ activeIds: [] });
      return;
    }

    activeIds.forEach((id: any) => {
      const originalTrackItem = state.trackItemsMap[id];
      const originalTrackItemDetails = state.trackItemDetailsMap[id];
      const newId = uuidv4();

      newTrackItemIds.push(newId);

      state.trackItemsMap = {
        ...state.trackItemsMap,
        [newId]: { ...cloneDeep(originalTrackItem), id: newId },
      };

      state.trackItemDetailsMap = {
        ...state.trackItemDetailsMap,
        [newId]: { ...cloneDeep(originalTrackItemDetails) },
      };

      state.trackItemIds.push(newId);
    });

    const newTracks = state.tracks
      .map((track: any) => {
        const newTrack = {
          ...track,
          id: uuidv4(),
          items: track.items
            .filter((itemId: any) => activeIds.includes(itemId))
            .map((itemId: any) => {
              const index = activeIds.indexOf(itemId);
              return newTrackItemIds[index];
            }),
        };
        return newTrack.items.length ? newTrack : null;
      })
      .filter(Boolean);

    state.tracks.unshift(...newTracks);
    state.tracksSettings = updateTrackSettings(newTracks, state.tracksSettings);

    this.updateState(
      {
        trackItemDetailsMap: state.trackItemDetailsMap,
        tracks: state.tracks,
        trackItemIds: state.trackItemIds,
        trackItemsMap: state.trackItemsMap,
        tracksSettings: state.tracksSettings,
      },
      {
        updateHistory: true,
        kind: "update",
      }
    );
  }

  if (obj.key === ACTIVE_SPLIT) {
    const state = cloneDeep(this.getState());
    const splitTime = obj.value?.options.time;

    if (state.activeIds.length !== 1) return;

    const activeItemId = state.activeIds[0];
    const activeItem = state.trackItemsMap[activeItemId];

    if (!activeItem) {
      this.updateState({ activeIds: [] });
      return;
    }

    if (
      splitTime <= activeItem.display.from ||
      splitTime >= activeItem.display.to
    )
      return;

    const newItemId = uuidv4();

    const newItem = {
      ...activeItem,
      id: newItemId,
      display: { from: splitTime, to: activeItem.display.to },
      trim: { from: splitTime, to: activeItem.display.to },
    };

    state.trackItemsMap[activeItemId].display.to = splitTime;

    state.trackItemsMap[newItemId] = newItem;
    state.trackItemDetailsMap[newItemId] =
      state.trackItemDetailsMap[activeItemId];
    state.trackItemIds.push(newItemId);

    // Добавляем новый элемент в треки
    state.tracks.forEach((track: any) => {
      if (track.items.includes(activeItemId)) {
        track.items.push(newItemId);
      }
    });

    state.tracksSettings = updateTrackSettings(
      state.tracks,
      state.tracksSettings
    );

    this.updateState(
      {
        trackItemsMap: state.trackItemsMap,
        trackItemDetailsMap: state.trackItemDetailsMap,
        trackItemIds: state.trackItemIds,
        tracks: state.tracks,
        tracksSettings: state.tracksSettings,
      },
      { updateHistory: true, kind: "update" }
    );
  }
}

export async function handleSceneStateEvents(this: any, event: EventBusData) {
  if (event.key === SCENE_RESIZE) {
    const payload = event.value?.payload;
    this.updateState(
      {
        size: payload,
      },
      {
        kind: "scene:resize",
        updateHistory: !1,
      }
    );
  }

  if (event.key === SCENE_LOAD) {
    const payload = event.value?.payload;

    const size = payload.size;
    const trackItemIds = payload.trackItemIds;
    const trackItemsMap = payload.trackItemsMap;
    const trackItemDetailsMap = payload.trackItemDetailsMap;
    const tracks = payload.tracks;

    if (!trackItemIds) return;

    const promises = trackItemIds?.map(async (id: any) => {
      try {
        const trackItemDetails = trackItemDetailsMap[id];
        const trackItem = trackItemsMap[id];
        if (trackItemDetails.type === "text") {
          const data = await loadTextItem(
            { id: id, details: trackItemDetails.details, ...trackItem },
            {
              size: size,
            }
          );
          const { details, ...rest } = data;
          trackItemDetailsMap[id] = { type: "text", details };
          trackItemsMap[id] = rest;
        }
        return true;
      } catch {
        return false;
      }
    });

    const tracksSettings = updateTrackSettings(tracks, {});
    await Promise.all(promises);
    const duration = calculateDuration(trackItemsMap);

    this.undos = [];
    this.redos = [];

    this.updateState({
      ...payload,
      tracksSettings,
      trackItemsMap,
      duration,
    });
  }
}

export function handleEditObject(this: any, event: EventBusData) {
  if (event.key === EDIT_OBJECT) {
    const payload: ITrackItem = event.value?.payload;
    const state = cloneDeep(this.getState());
    const trackItemDetailsMap = state.trackItemDetailsMap;
    const trackItemsMap = state.trackItemsMap;
    const tracksSettings = state.tracksSettings;

    const track = Object.entries(payload)[0]?.[1];
    const trackId = track?.trackId;
    const details = track?.details;

    if (tracksSettings[trackId]) {
      tracksSettings[trackId].details = {
        ...tracksSettings[trackId].details,
        ...details,
      };
    }

    for (const value of Object.entries(payload)) {
      const id = value[0];
      const details = value[1].details;

      if (trackItemDetailsMap[id]) {
        trackItemDetailsMap[id].details = {
          ...trackItemDetailsMap[id].details,
          ...details,
        };
      }

      if (trackItemsMap[id]) {
        trackItemsMap[id].details = {
          ...trackItemsMap[id].details,
          ...details,
        };
      }
    }

    this.updateState({ trackItemDetailsMap, trackItemsMap, tracksSettings });
  }
}

export async function handleAddRemoveStateEvents(
  this: any,
  event: EventBusData
) {
  const state = cloneDeep(this.getState());
  const trackId = event.value?.options?.trackId;
  const trackIndex = event.value?.options?.trackIndex;
  let data: any[] = [];

  let type: string | undefined;

  if (event.key === ADD_ANIMATION) {
    const payload = event.value?.payload;
    let animations = state.trackItemsMap[payload.id].animations;
    animations
      ? animations.in && payload.animations.in
        ? (animations.in = payload.animations.in)
        : (animations.out && payload.animations.out) ||
          (!animations.out && payload.animations.out)
        ? (animations.out = payload.animations.out)
        : !animations.in && payload.animations.in
        ? (animations.in = payload.animations.in)
        : (animations = payload.animations)
      : (state.trackItemsMap[payload.id].animations = payload.animations);
  }

  if (event.key === ADD_VIDEO) {
    type = "video";

    const item = await loadVideoItem(event.value?.payload, {
      size: state.size,
    });
    const { details, ...itemDetails } = item;

    state.trackItemDetailsMap[itemDetails.id] = {
      type,
      details,
    };
    state.trackItemsMap[itemDetails.id] = itemDetails;
    state.trackItemIds.push(itemDetails.id);
    data = [itemDetails.id];
  }

  if (event.key === ADD_IMAGE) {
    type = "image";
    const imageObject = await loadImageItem(event.value?.payload, {
      size: state.size,
    });
    const { details, ...itemDetails } = imageObject;
    state.trackItemDetailsMap[itemDetails.id] = {
      type,
      details,
    };
    state.trackItemsMap[itemDetails.id] = itemDetails;
    state.trackItemIds.push(itemDetails.id);
    data = [itemDetails.id];
  }

  if (event.key === ADD_AUDIO) {
    type = "audio";
    const item = await loadAudioItem(event.value?.payload),
      { details, ...itemDetails } = item;
    state.trackItemDetailsMap[itemDetails.id] = {
      type,
      details,
    };
    state.trackItemsMap[itemDetails.id] = itemDetails;
    state.trackItemIds.push(itemDetails.id);
    data = [itemDetails.id];
  }

  if (event.key === ADD_TEXT) {
    type = "text";
    const { details, ...itemDetails } = await loadTextItem(
      event.value?.payload ?? undefined,
      {
        size: state.size,
      }
    );

    state.trackItemDetailsMap[itemDetails.id] = { type, details };
    state.trackItemsMap[itemDetails.id] = itemDetails;
    state.trackItemIds.push(itemDetails.id);

    data.push(itemDetails.id);
  }

  const trackInfo = findTrack(
    data,
    state.tracks,
    state.trackItemsMap,
    trackId,
    trackIndex
  );

  if (trackInfo.trackId) {
    const track = state.tracks.find((t: any) => t.id === trackInfo.trackId);
    track?.items.push(...data);
  } else if (trackInfo.trackIndex !== undefined) {
    const newTrack = createTrack(type, data);
    state.tracks.splice(trackInfo.trackIndex, 0, newTrack);
  } else {
    const newTrack = createTrack(type, data);
    state.tracks.unshift(newTrack);
  }

  state.tracksSettings = updateTrackSettings(
    state.tracks,
    state.tracksSettings
  );

  state.duration = calculateDuration(state.trackItemsMap);

  this.updateState(
    {
      trackItemIds: state.trackItemIds,
      trackItemDetailsMap: state.trackItemDetailsMap,
      trackItemsMap: state.trackItemsMap,
      tracks: state.tracks,
      duration: state.duration,
      structure: state.structure,
      tracksSettings: state.tracksSettings,
    },
    {
      updateHistory: true,
      kind: "add",
    }
  );
}

function createTrack(type: string | undefined, items: any[]): any {
  const accepts =
    type === "image" || type === "video" ? ["image", "video"] : [type];

  return {
    id: uuidv4(),
    accepts,
    type,
    items,
    magnetic: false,
    static: false,
  };
}

//pi
const findTrack = (
  items: any[],
  tracks: any,
  itemMap: any,
  trackId: number,
  trackIndex: number
) => {
  if (trackId === undefined && trackIndex === undefined) {
    return { trackId: undefined, trackIndex: undefined };
  }

  const selectedTrack =
    trackIndex !== undefined
      ? tracks[Math.max(0, Math.min(trackIndex, tracks.length - 1))]
      : tracks.find((track: any) => track.id === trackId);

  if (!selectedTrack) {
    return {
      trackId: undefined,
      trackIndex:
        trackIndex !== undefined
          ? Math.max(0, Math.min(trackIndex, tracks.length - 1))
          : undefined,
    };
  }

  const trackItems = selectedTrack.items.map((id: any) => itemMap[id]);
  const currentItems = items.map((id) => itemMap[id]);

  for (const trackItem of trackItems) {
    const trackFrom = trackItem.display.from;
    const trackTo = trackItem.display.to;

    for (const currentItem of currentItems) {
      const currentFrom = currentItem.display.from;
      const currentTo = currentItem.display.to;

      if (!(currentTo <= trackFrom || currentFrom >= trackTo)) {
        return {
          trackId: undefined,
          trackIndex: tracks.indexOf(selectedTrack),
        };
      }
    }
  }

  return {
    trackId: selectedTrack.id,
    trackIndex: tracks.indexOf(selectedTrack),
  };
};

export const trackSettingsDetailsMap: Record<string, any> = {
  text: {
    color: "#ffffff",
    colorDisplay: "#000000",
    fontSize: 120,
    fontSizeDisplay: "12px",
    fontFamily: "Roboto-Bold",
    fontFamilyDisplay: "Roboto",
    opacity: 100,
    opacityDisplay: "100%",
    textAlign: "center",
    textDecoration: "none",
    borderWidth: 0,
    borderColor: "#000000",
    boxShadow: {
      color: "#000000",
      x: 0,
      y: 0,
      blur: 0,
    },
    backgroundColor: "#00000090",
  },
  audio: {
    volume: 100,
  },
  video: {
    volume: 100,
    opacity: 100,
    zoom: { type: "none", ease: "linear" },
    mirror: {
      x: false,
      y: false,
    },
  },
  image: {
    brightness: 100,
    opacity: 100,
    blur: 0,
    zoom: { type: "none", ease: "linear" },
    mirror: {
      x: false,
      y: false,
    },
  },
  helper: {},
  caption: {},
  element: {},
  main: {},
};

export const updateTrackSettings = (
  tracks: ITrack[],
  tracksSettings: Record<string, TrackSettings>
) => {
  return tracks?.reduce((acc: any, rec) => {
    const newTrackSettingsDetails = trackSettingsDetailsMap[rec.type];

    const trackSettingsDetails = tracksSettings[rec.id]
      ? tracksSettings[rec.id].details
      : newTrackSettingsDetails;

    return {
      ...acc,
      [rec.id]: {
        ...rec,
        id: rec.id,
        type: "tracksettings",
        trackId: rec.id,
        details: {
          trackType: rec.type,
          ...trackSettingsDetails,
        },
        items: rec.items,
      },
    };
  }, {} as Record<string, TrackSettings>);
};
