import { ActiveSelection, TEvent, TPointerEvent } from "fabric";
import { movingState } from "../store";
import { Placeholder, Transition } from "@/classes/objects";
import { Timeline } from "../../timeline";

export const addBeforeTransformEvents = (timeline: Timeline) => {
  timeline.on("before:transform", beforeTransformEvent.bind(timeline));
};

export const removeBeforeTransformEvents = (timeline: Timeline) => {
  timeline.off("before:transform", beforeTransformEvent.bind(timeline));
};

function beforeTransformEvent(this: Timeline, event: TEvent<TPointerEvent>) {
  movingState.canvas = this;
  movingState.activeTrackToItemsMap = {};
  movingState.primaryTracks = {};
  movingState.secondaryTracks = {};
  movingState.trackTops = [];
  movingState.trackToItemsMap = {};
  movingState.activeObjects = [];
  movingState.trackTopToIdMap = {};
  movingState.canvas.trackIdAfterTransform = "";
  movingState.canvas.positionAfterTransform = {};

  const activeObject = movingState.canvas.getActiveObject();

  if (!activeObject) return;

  movingState.activeObjects =
    activeObject instanceof ActiveSelection
      ? activeObject.getObjects()
      : [activeObject];

  const scenePoint = movingState.canvas.getScenePoint(event.e);
  const tracks = movingState.canvas.getObjects("Track");

  movingState.originTrack =
    tracks.find((track: any) => {
      const boundingRect = track.getBoundingRect();
      return (
        scenePoint.x >= boundingRect.left &&
        scenePoint.x <= boundingRect.left + boundingRect.width &&
        scenePoint.y >= boundingRect.top &&
        scenePoint.y <= boundingRect.top + boundingRect.height
      );
    }) ?? {};

  const objects = movingState.canvas.getObjects(
    "Video",
    "Image",
    "Audio",
    "Text",
    "Element"
  );

  tracks.forEach((track: any) => {
    const trackItems = objects.filter((item: any) =>
      track.items.includes(item.id)
    );
    movingState.trackToItemsMap[track.id] = trackItems;
    movingState.trackTopToIdMap[track.top] = track.id;
    movingState.trackTops.push(track.top);
  });

  movingState.trackTops.sort((a, b) => a - b);

  movingState.activeObjects.forEach((top: any) => {
    const track = tracks?.find((trackItem: any) =>
      trackItem.items.includes(top.id)
    );
    if (!track) return;
    const trackId = track.id;

    if (movingState.activeTrackToItemsMap[trackId]) {
      movingState.activeTrackToItemsMap[trackId].push(top);
    } else {
      movingState.activeTrackToItemsMap[trackId] = [top];
    }
  });

  movingState.primaryMovingObjects = movingState.activeObjects.filter(
    (track) => {
      const boundingRect = track.getBoundingRect();
      return (
        scenePoint.y >= boundingRect.top &&
        scenePoint.y <= boundingRect.top + boundingRect.height &&
        !(track instanceof Transition)
      );
    }
  );

  movingState.primaryMovingObjects.forEach((track) => {
    const boundingRectTop = track.getBoundingRect().top,
      trackId = movingState.trackTopToIdMap[boundingRectTop];

    if (movingState.primaryTracks[trackId]) {
      movingState.primaryTracks[trackId].objects.push(track);
    } else {
      const index = calculateTrackIndex(
        movingState.trackTops,
        movingState.originTrack.top,
        boundingRectTop
      );
      if (typeof index !== "number") return;
      movingState.primaryTracks[trackId] = { objects: [track], index };
    }
  });

  movingState.primaryMovingObjects = movingState.primaryMovingObjects.sort(
    (a, b) => a.left - b.left
  );

  movingState.secondaryMovingObjects = movingState.activeObjects.filter(
    (track) =>
      !movingState.primaryMovingObjects.includes(track) &&
      !(track instanceof Transition)
  );

  movingState.secondaryMovingObjects.forEach((track) => {
    const boundingRectTop = track.getBoundingRect().top;
    const trackId = movingState.trackTopToIdMap[track.getBoundingRect().top];

    if (movingState.secondaryTracks[trackId]) {
      movingState.secondaryTracks[trackId].objects.push(track);
    } else {
      const index = calculateTrackIndex(
        movingState.trackTops,
        movingState.originTrack.top,
        boundingRectTop
      );

      if (typeof index !== "number") return;
      movingState.secondaryTracks[trackId] = { objects: [track], index };
    }
  });

  if (movingState.originTrack) {
    movingState.canvas.trackOriginBeforeTransform = movingState.originTrack.id;
  }

  if (activeObject) {
    movingState.canvas.positionBeforeTransform = {
      top: activeObject.top,
      left: activeObject.left,
    };
  }
  const transform: any = "transform" in event ? event.transform : {};

  if (transform.action === "drag") {
    movingState.placeholderMovingObjects = movingState.primaryMovingObjects.map(
      (track: any) => {
        const boundingRect = track.getBoundingRect();
        movingState.objectInitialPositions[track.id] = {
          top: boundingRect.top,
          left: boundingRect.left,
        };
        const placeholder = new Placeholder({
          id: `${track.id}-placeholder`,
          left: boundingRect.left,
          top: boundingRect.top,
          width: boundingRect.width,
          height: boundingRect.height,
          for: trackItemType[track.type as keyof typeof trackItemType] as any,
        });

        placeholder.draggedObject = track;
        return placeholder;
      }
    );

    movingState.canvas.add(...movingState.placeholderMovingObjects);
  }
}

export function calculateTrackIndex(
  array: any[],
  startValue: number,
  endValue: number
) {
  const startIndex = array.indexOf(startValue),
    endIndex = array.indexOf(endValue);

  return startIndex === -1 || endIndex === -1 ? null : endIndex - startIndex;
}

const trackItemType = {
  trackitemvideo: "video",
  trackitemimage: "image",
  trackitemaudio: "audio",
  trackitemtext: "text",
};
