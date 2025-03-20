import { Timeline } from "@/classes/timeline/timeline";
import { ITrackItem } from "@/shared/types/timeline";
import {
  removeItemsFromTrack,
  timeMsToUnits,
  unitsToTimeMs,
} from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";
import { VideoObject } from "../objects";
import { AudioObject } from "../objects/audio";
import { isEqual } from "lodash-es";
import { ActiveSelection } from "fabric";
import {
  calculateDuration,
  getTextHeight,
  loadAudioObject,
  loadImageObject,
  loadTextObject,
  loadVideoObject,
} from "../timeline/utils";
import { Text } from "../items";

export class TrackItemsMixin {
  addTrackItem(this: Timeline, object: any) {
    const id = object.id;

    const displayObject = createDisplayObject(object, {
      tScale: this.tScale,
      sizesMap: this.sizesMap,
    });
    this.add(displayObject);
    this.trackItemIds.push(id);
    this.renderTracks();
    this.alignItemsToTrack();
    this.updateTrackItemsPosition();
    this.calcBounding();
    this.duration = calculateDuration(this.trackItemsMap);
    // this.updateState();
  }
  alignItemsToTrack(this: Timeline): void {
    this.pauseEventListeners();
    const tracksMap = new Map(
      this.getObjects("Track").map((track: any) => [track.id, track])
    );
    const items = this.getObjects("Image", "Video", "Text", "Audio");

    this.trackItemIds.forEach((itemId) => {
      const track = this.tracks.find((t) => t.items.includes(itemId));
      if (!track) return;

      const trackObj = tracksMap.get(track.id);

      this.duration;
      const item: any = this.getObjects().find((obj: any) => obj.id === itemId);

      if (item && trackObj) {
        item.isMain = false;
        this.trackItemsMap[itemId].isMain = false;
        item.set({ top: trackObj.top });
        item.setCoords();
      }
    });

    tracksMap.forEach((track) => {
      track.items = items
        .filter((item) => item.top === track.top)
        .map((item: any) => item.id);
    });

    this.resumeEventListeners();
  }

  updateTrackItemsPosition(this: Timeline): void {
    const items = this.getObjects("Image", "Text", "Video", "Audio");
    items.sort((a, b) => a.top - b.top);
    this.trackItemIds = items.map((item: any) => item.id).reverse();
  }

  restoreTrackItemPositions(): void {}

  updateTrackItemsState(this: Timeline): void {
    this.pauseEventListeners();
    const items = this.getObjects("Image", "Video", "Text", "Audio");

    const newTrackItemsMap: Record<string, ITrackItem> = {};

    items.forEach((item: any) => {
      const { id, left, width } = item;
      const trackItem = this.trackItemsMap[id];
      const from = unitsToTimeMs(left, this.tScale);
      const to = from + unitsToTimeMs(width, this.tScale);
      const display = { from, to };
      const updatedTrackItem = {
        ...trackItem,
        display,
        trim:
          item instanceof VideoObject || item instanceof AudioObject
            ? item.trim
            : undefined,
      };
      item.display = display;
      newTrackItemsMap[id] = updatedTrackItem;
    });

    this.trackItemsMap = newTrackItemsMap;
    this.resumeEventListeners();
  }

  deleteActiveTrackItem(this: Timeline): false | undefined {
    const activeItems = this.getActiveObjects();
    if (!activeItems.length) return false;

    const activeIds = activeItems.map((item: any) => item.id);
    const tracks = removeItemsFromTrack(this.tracks, activeIds);
    this.trackItemsMap = Object.keys(this.trackItemsMap).reduce((acc, id) => {
      if (!activeIds.includes(id)) acc[id] = this.trackItemsMap[id];
      return acc;
    }, {} as Record<string, any>);

    this.trackItemIds = this.trackItemIds.filter(
      (id) => !activeIds.includes(id)
    );
    this.tracks = tracks;
    this.discardActiveObject();
    this.remove(...activeItems);
    this.setActiveIds([]);
    this.renderTracks();
    this.alignItemsToTrack();
    this.updateState({ updateHistory: !0, kind: "remove" });
  }

  updateTrackItemsToHistory(this: Timeline) {
    this.pauseEventListeners();

    const objects = this.getObjects();

    this.trackItemIds.forEach((trackItemId) => {
      const track = this.tracks.find((track) =>
        track.items.includes(trackItemId)
      );
      const trackTop = objects.find(
        (object: any) => object.id === track?.id
      )?.top;

      if (!trackTop) {
        console.warn(`Track top not found for trackItemId: ${trackItemId}`);
        return;
      }

      const trackItem = this.trackItemsMap[trackItemId];
      const object = objects.find((object: any) => object.id === trackItemId);

      if (!object) {
        console.warn(`Object not found for trackItemId: ${trackItemId}`);
        return;
      }

      const left = timeMsToUnits(trackItem.display.from, this.tScale);
      const width = timeMsToUnits(
        trackItem.display.to - trackItem.display.from,
        this.tScale
      );

      object.set({ left, width, top: trackTop });
      object.setCoords();
    });

    this.requestRenderAll();
    this.resumeEventListeners();
  }

  cloneActiveTrackItem(
    this: Timeline,
    options?: { trackItemId?: string }
  ): false | undefined {
    const trackItemId = options?.trackItemId || this.activeIds[0];
    if (!trackItemId) return false;

    const originalTrackItem = this.trackItemsMap[trackItemId];
    const clonedTrackItem: ITrackItem = {
      ...originalTrackItem,
      id: uuidv4(),
    };
    const parentTrack = this.tracks.find((track) =>
      track.items.includes(trackItemId)
    );
    const newTrackIndex =
      this.tracks.findIndex((track) => track.id === parentTrack?.id) + 1;

    this.findOrCreateTrack(clonedTrackItem, { trackIndex: newTrackIndex });

    const visualRepresentation = createDisplayObject(clonedTrackItem, {
      tScale: this.tScale,
    });

    if (visualRepresentation) this.add(visualRepresentation);

    const { audioData, ...metadata } = clonedTrackItem.metadata || {};

    clonedTrackItem.metadata = metadata;

    this.trackItemsMap[clonedTrackItem.id] = clonedTrackItem;
    this.trackItemIds.push(clonedTrackItem.id);

    this.alignItemsToTrack();
    this.updateTransitions();
    this.updateState();
  }

  splitActiveTrackItem(
    this: Timeline,
    options: {
      trackItemId?: string;
      time: number;
    }
  ): false | undefined {
    const trackItemId = options.trackItemId ?? this.activeIds[0];

    if (!trackItemId || this.activeIds.length > 1) return false;

    const trackItem: any = this.trackItemsMap[trackItemId];
    const splitTime = options.time;
    if (
      trackItem.display.from >= splitTime ||
      trackItem.display.to <= splitTime
    )
      return false;

    const firstPart: ITrackItem = {
      ...trackItem,
      display: { from: trackItem.display.from, to: splitTime },
    };

    const secondPart: ITrackItem = {
      ...trackItem,
      display: { from: splitTime, to: trackItem.display.to },
      id: uuidv4(),
    };

    if (trackItem.type === "video" || trackItem.type === "audio") {
      const duration = splitTime - firstPart.display.from;

      firstPart.trim = {
        from: trackItem.trim.from,
        to: trackItem.trim.from + duration,
      };

      secondPart.trim = {
        from: firstPart.trim.to,
        to: trackItem.trim.to,
      };
    }

    const visualRep: any = this.getObjects().find(
      (item: any) => item.id === trackItemId
    );
    visualRep.display = firstPart.display;

    const parentTrack = this.tracks.find((track) =>
      track.items.includes(trackItemId)
    );
    parentTrack?.items.push(secondPart.id);

    const secondVisualRepresentation = createDisplayObject(secondPart, {
      tScale: this.tScale,
    });
    if (secondVisualRepresentation) this.add(secondVisualRepresentation);

    this.trackItemsMap[secondPart.id] = secondPart;
    this.trackItemsMap[trackItemId] = firstPart;
    this.trackItemIds.push(secondPart.id);
    this.updateTrackItemCoords(firstPart.id);
    this.alignItemsToTrack();
    this.updateTransitions();
    this.updateState();
  }

  updateTrackItemCoords(this: Timeline, id: string): void {
    const item = this.getObjects().find((obj: any) => obj.id === id);
    const trackItem = this.trackItemsMap[id];
    const left = timeMsToUnits(trackItem.display.from, this.tScale);
    const width = timeMsToUnits(
      trackItem.display.to - trackItem.display.from,
      this.tScale
    );

    item?.set({ left, width });
    item?.setCoords();
  }

  updateTrackItemDetails(
    this: Timeline,
    payload: Partial<ITrackItem>,
    options?: { trackItemId?: string }
  ): false | undefined {
    const trackItemId = options?.trackItemId;
    if (!trackItemId) return false;

    const trackItem = this.trackItemsMap[trackItemId];
    const updatedDetails = { ...trackItem.details, ...payload.details };
    if ("fontSize" in updatedDetails || "lineHeight" in updatedDetails) {
      updatedDetails.height = getTextHeight(
        updatedDetails.text,
        updatedDetails
      );
    }

    this.trackItemsMap[trackItemId] = {
      ...trackItem,
      ...payload,
      details: updatedDetails,
    } as any;
    this.updateState();
  }

  updateTrackItem(
    this: Timeline,
    payload: ITrackItem,
    options: { trackItemId: string }
  ): false | undefined {
    const trackItemId = options.trackItemId;

    if (!trackItemId) return false;

    const trackItem = this.trackItemsMap[trackItemId];
    const updatedDetails = { ...trackItem.details, ...payload.details };
    if (trackItem.type === "text" && payload.details.text) {
      const textObj = this.getObjects("Text").find(
        (obj: any) => obj.id === trackItemId
      );

      if (textObj instanceof Text) {
        textObj.text = payload.details.text;
        this.requestRenderAll();
      }
    }
    if ("fontSize" in updatedDetails || "lineHeight" in updatedDetails) {
      updatedDetails.height = getTextHeight(
        updatedDetails.text,
        updatedDetails
      );
    }

    this.trackItemsMap[trackItemId] = {
      ...trackItem,
      ...payload,
      details: updatedDetails,
    } as any;
    this.updateState();
  }

  updateTrackItemsDetails(
    this: Timeline,
    payload: Partial<ITrackItem>[],
    options?: { trackItemIds?: string[] }
  ): void {
    options?.trackItemIds?.forEach((trackItemId, index) => {
      const trackItem = this.trackItemsMap[trackItemId];
      const updatedDetails = {
        ...trackItem.details,
        ...payload[index].details,
      };
      if ("fontSize" in updatedDetails || "lineHeight" in updatedDetails) {
        updatedDetails.height = getTextHeight(
          updatedDetails.text,
          updatedDetails
        );
      }
      this.trackItemsMap[trackItemId] = {
        ...trackItem,
        ...payload[index],
        details: updatedDetails,
      } as any;
    });
    this.updateState();
  }

  getTrackItems(this: Timeline) {
    return this.getObjects(...trackItems);
  }

  setActiveTrackItemCoords(this: Timeline) {
    this.getActiveObjects().forEach((e) => e.setCoords());
  }

  deleteTrackItemById(this: Timeline, itemIds: any[]) {
    const objectsToRemove = this.getObjects().filter(
      (obj: any) => itemIds.includes(obj.id) && obj.type !== "track"
    );

    this.tracks = removeItemsFromTrack(this.tracks, itemIds);

    this.trackItemsMap = Object.keys(this.trackItemsMap)
      .filter((key) => !itemIds.includes(key))
      .reduce((acc, key) => {
        acc[key] = this.trackItemsMap[key];
        return acc;
      }, {} as any);

    this.trackItemIds = this.trackItemIds.filter((id) => !itemIds.includes(id));

    this.tracksSettings = Object.keys(this.tracksSettings)
      .filter((key) => !itemIds.includes(key))
      .reduce((acc, key) => {
        acc[key] = this.tracksSettings[key];
        return acc;
      }, {} as any);

    this.discardActiveObject();
    this.remove(...objectsToRemove);

    this.renderTracks();
    this.alignItemsToTrack();
    this.calcBounding();

    this.duration = calculateDuration(this.trackItemsMap);
  }

  selectTrackItemByIds(this: Timeline, itemIds: any[]) {
    const activeIds = this.getActiveObjects().map((obj: any) => obj.id);
    if (isEqual(activeIds, itemIds)) return;

    const selectedItems = this.getTrackItems().filter((item: any) =>
      itemIds.includes(item.id)
    );

    if (selectedItems.length === 0) {
      this.discardActiveObject();
    } else if (selectedItems.length === 1) {
      this.setActiveObject(selectedItems[0]);
    } else {
      const activeSelection = new ActiveSelection(selectedItems);
      this.setActiveObject(activeSelection);
    }

    this.requestRenderAll();
  }
}

const trackItems = ["Image", "Text", "Video", "Audio", "Caption", "Template"];

const createDisplayObject = (element: any, context: any) => {
  const objectFactory: any = {
    text: loadTextObject,
    video: loadVideoObject,
    image: loadImageObject,
    audio: loadAudioObject,
  };

  const createFn = objectFactory[element.type];
  return createFn(element, context);
};
