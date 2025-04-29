import { TrackObject, HelperObject } from "@/classes/objects";
import { movingState } from "@/classes/timeline/events/store";
import { calculateTrackIndex } from "../before-transorm";

export function objectModified(n: any) {
  const canvas = n.target.canvas;
  if (!canvas) return;

  const activeObject = canvas.getActiveObject();
  if (!activeObject || !canvas.positionBeforeTransform) return;

  const scenePoint = canvas.getScenePoint(n.e);
  const targetTrack = canvas
    .getObjects("Track", "Helper")
    .find((object: any) => {
      const bounds = object.getBoundingRect();
      return (
        scenePoint.x >= bounds.left &&
        scenePoint.x <= bounds.left + bounds.width &&
        scenePoint.y >= bounds.top &&
        scenePoint.y <= bounds.top + bounds.height
      );
    });

  if (n.action === "resizing") {
    const nonActiveObjects = (
      movingState.trackToItemsMap[movingState.originTrack.id] || []
    ).filter((item) => item !== activeObject);
    activeObject.setCoords();
    const overlappingObject = findOverlappingObject(
      nonActiveObjects,
      activeObject.getBoundingRect()
    );

    canvas.fire("track-items:resized", {
      trackId: movingState.originTrack.id,
      trackItemIds: [activeObject.id],
      isOverlapped: !!overlappingObject,
    });
    return false;
  }

  if (!targetTrack) {
    if (activeObject) {
      activeObject?.set(canvas.positionBeforeTransform);
      activeObject?.setCoords();
    }

    return false;
  }
  if (targetTrack instanceof HelperObject) {
    let orderIndex;
    switch (targetTrack.kind) {
      case "top":
        orderIndex = 0;
        break;
      case "center":
        orderIndex = targetTrack.metadata.order || 0;
        break;
      case "bottom":
        orderIndex = -1;
        break;
      default:
        return;
    }

    const overlapData = {
      isSecondaryOverlapped: false,
      secondaryTracks: movingState.secondaryTracks,
      primaryTracks: movingState.primaryTracks,
      primaryPositions: {
        trackIndex: orderIndex,
        trackId: canvas.trackIdAfterTransform,
        positions: canvas.positionAfterTransform,
      },
    };
    handlePrimaryOverlap(overlapData);
  } else if (targetTrack instanceof TrackObject) {
    const overlapData = {
      isSecondaryOverlapped: checkSecondaryOverlap(),
      secondaryTracks: movingState.secondaryTracks,
      primaryTracks: movingState.primaryTracks,
      primaryPositions: {
        trackId: canvas.trackIdAfterTransform,
        positions: canvas.positionAfterTransform,
      },
    };

    emitTrackItemsMoved(overlapData);
  }
}

const emitTrackItemsMoved = (n: any) => {
  if (!movingState.canvas) return;
  movingState.canvas.fire("track-items:moved", n);
};

function checkSecondaryOverlap() {
  const transformedPositions = calculateTransformedPositions();
  if (!transformedPositions) return;
  return Object.keys(transformedPositions).some((trackId) => {
    const trackItems = movingState.trackToItemsMap[trackId];
    const transformedObjects = transformedPositions[trackId].objects;

    if (!trackItems?.length) {
      return true;
    } else {
      return trackItems
        .filter((item) => !transformedObjects.includes(item))
        .some((item) =>
          findOverlappingObject(transformedObjects, item.getBoundingRect())
        );
    }
  });
}

function calculateTransformedPositions() {
  const [firstObject]: any = movingState.primaryMovingObjects;

  if (!firstObject?.id) {
    return;
  }

  const firstObjectId = firstObject.id;
  const transformedPosition =
    movingState.canvas.positionAfterTransform[firstObjectId];
  const topOffset = transformedPosition.top - firstObject.getBoundingRect().top;

  const positionMap: Record<string, any> = {};

  movingState.secondaryMovingObjects.forEach((object) => {
    const transformedTop = object.getBoundingRect().top + topOffset,
      trackId = movingState.trackTopToIdMap[transformedTop],
      trackIndex = calculateTrackIndex(
        movingState.trackTops,
        movingState.originTrack.top,
        transformedTop
      );

    if (positionMap[trackId]) {
      positionMap[trackId].objects.push(object);
    } else {
      positionMap[trackId] = {
        objects: [object],
        index: trackIndex,
      };
    }
  });

  return positionMap;
}

const handlePrimaryOverlap = (n: any) => {
  if (!movingState.canvas) return;
  movingState.canvas.fire("track:create", n);
};

export function findOverlappingObject(objects: any, activeBounds: any) {
  return objects.find((object: any) => {
    const bounds: any = object.getBoundingRect();
    return (
      activeBounds.left < bounds.left + bounds.width &&
      activeBounds.left + activeBounds.width > bounds.left &&
      activeBounds.top < bounds.top + bounds.height &&
      activeBounds.top + activeBounds.height > bounds.top
    );
  });
}
