import {
  ACTIVE_CLONE,
  ACTIVE_DELETE,
  ACTIVE_SPLIT,
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
import { ITrackItem } from "@/shared";

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

    const newDuration = calculateDuration(remainingTrackItemsMap);

    this.updateState(
      {
        trackItemIds: remainingTrackItemIds,
        trackItemDetailsMap: remainingTrackItemDetailsMap,
        activeIds: [],
        trackItemsMap: remainingTrackItemsMap,
        tracks: remainingTracks,
        duration: newDuration,
      },
      { updateHistory: true, kind: "remove" }
    );
  }

  if (obj.key === ACTIVE_CLONE) {
    const state = cloneDeep(this.getState());
    const newTrackItemIds: any = [];

    const activeIds = obj.value?.payload.trackItemIds || state.activeIds;
    if (activeIds.length === 0) return;

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

    this.updateState(
      {
        trackItemDetailsMap: state.trackItemDetailsMap,
        tracks: state.tracks,
        trackItemIds: state.trackItemIds,
        trackItemsMap: state.trackItemsMap,
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

    this.updateState(
      {
        trackItemsMap: state.trackItemsMap,
        trackItemDetailsMap: state.trackItemDetailsMap,
        trackItemIds: state.trackItemIds,
        tracks: state.tracks,
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
    await Promise.all(promises);
    const duration = calculateDuration(trackItemsMap);
    this.updateState({
      ...payload,
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
    this.updateState({ trackItemDetailsMap, trackItemsMap });
  }
}

export async function handleAddRemoveStateEvents(
  this: any,
  event: EventBusData
) {
  const state = cloneDeep(this.getState());
  const trackId = event.value?.options?.trackId;
  const trackIndex = event.value?.options?.trackIndex;
  let p: any[] = [];

  let type: string | undefined;

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
    p = [itemDetails.id];
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
    p = [itemDetails.id];
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
    p = [itemDetails.id];
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

    p.push(itemDetails.id);
  }

  const trackInfo = findTrack(
    p,
    state.tracks,
    state.trackItemsMap,
    trackId,
    trackIndex
  );

  if (trackInfo.trackId) {
    const track = state.tracks.find((t: any) => t.id === trackInfo.trackId);
    track?.items.push(...p);
  } else if (trackInfo.trackIndex !== undefined) {
    const newTrack = createTrack(type, p);
    state.tracks.splice(trackInfo.trackIndex, 0, newTrack);
  } else {
    const newTrack = createTrack(type, p);
    state.tracks.unshift(newTrack);
  }

  state.duration = calculateDuration(state.trackItemsMap);

  this.updateState(
    {
      trackItemIds: state.trackItemIds,
      trackItemDetailsMap: state.trackItemDetailsMap,
      trackItemsMap: state.trackItemsMap,
      tracks: state.tracks,
      duration: state.duration,
      structure: state.structure,
    },
    {
      updateHistory: true,
      kind: "add",
    }
  );
}

function createTrack(type: string | undefined, items: any[]): any {
  return {
    id: uuidv4(),
    accepts: ["text", "audio", "helper", "video", "image"],
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
