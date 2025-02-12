import {
  FRAME_INTERVAL,
  PREVIEW_FRAME_WIDTH,
  TIMELINE_OFFSET_X,
} from "../constants/constants";
import { TIMELINE_ZOOM_LEVELS } from "../constants/constants-scale";
import { ITimelineScaleState, ITrack } from "../types/timeline";
import { findIndex } from "./search";

export function getFitZoomLevel(
  totalLengthMs: number,
  zoom = 1
): ITimelineScaleState {
  const getVisibleWidth = () => {
    const scrollOffset = TIMELINE_OFFSET_X;
    const clampedScrollOffset = Math.max(0, scrollOffset);

    const timelineCanvas = document.getElementById(
      "designcombo-timeline-canvas"
    ) as HTMLElement;
    const offsetWidth =
      timelineCanvas?.offsetWidth ?? document.body.offsetWidth;

    // Use 1 to prevent NaN because of dividing by 0.
    return Math.max(1, offsetWidth - clampedScrollOffset);
  };

  const getFullWidth = () => {
    if (typeof totalLengthMs === "number") {
      return timeMsToUnits(totalLengthMs, zoom);
    }

    return calculateTimelineWidth(totalLengthMs, zoom);
  };

  const multiplier = getVisibleWidth() / getFullWidth();
  const targetZoom = zoom * multiplier;

  const fitZoomIndex = findIndex(TIMELINE_ZOOM_LEVELS, (level) => {
    return level.zoom > targetZoom;
  });

  // const clampedIndex = clamp(fitZoomIndex, 0, TIMELINE_ZOOM_LEVELS.length - 1);

  return {
    segments: 5,
    index: fitZoomIndex,
    zoom: targetZoom,
    unit: 1 / targetZoom,
  };
}

export function getZoomByIndex(index: number) {
  return TIMELINE_ZOOM_LEVELS[index];
}

export function getPreviousZoomLevel(
  currentZoom: ITimelineScaleState
): ITimelineScaleState {
  const previousZoom = getPreviousZoom(currentZoom);

  return previousZoom || TIMELINE_ZOOM_LEVELS[0];
}
export const getPreviousZoom = (
  currentZoom: ITimelineScaleState
): ITimelineScaleState | null => {
  // Filter zoom levels that are smaller than the current zoom
  const smallerZoomLevels = TIMELINE_ZOOM_LEVELS.filter(
    (level) => level.zoom < currentZoom.zoom
  );

  // If there are no smaller zoom levels, return null (no previous zoom)
  if (smallerZoomLevels.length === 0) {
    return null;
  }

  // Get the zoom level with the largest zoom value that's still smaller than the current zoom
  const previousZoom = smallerZoomLevels.reduce((prev, curr) =>
    curr.zoom > prev.zoom ? curr : prev
  );

  return previousZoom;
};

export const getNextZoom = (
  currentZoom: ITimelineScaleState
): ITimelineScaleState | null => {
  // Filter zoom levels that are larger than the current zoom
  const largerZoomLevels = TIMELINE_ZOOM_LEVELS.filter(
    (level) => level.zoom > currentZoom.zoom
  );

  // If there are no larger zoom levels, return null (no next zoom)
  if (largerZoomLevels.length === 0) {
    return null;
  }

  // Get the zoom level with the smallest zoom value that's still larger than the current zoom
  const nextZoom = largerZoomLevels.reduce((prev, curr) =>
    curr.zoom < prev.zoom ? curr : prev
  );

  return nextZoom;
};

export function getNextZoomLevel(
  currentZoom: ITimelineScaleState
): ITimelineScaleState {
  const nextZoom = getNextZoom(currentZoom);

  return nextZoom || TIMELINE_ZOOM_LEVELS[TIMELINE_ZOOM_LEVELS.length - 1];
}

export function getPreviousZoomIndex(currentZoom: ITimelineScaleState): number {
  const lastLevel = TIMELINE_ZOOM_LEVELS.at(-1);
  const isLastIndex = currentZoom === lastLevel;
  const nextZoomIndex = getNextZoomIndex(currentZoom);
  const previousZoomIndex = nextZoomIndex - (isLastIndex ? 1 : 2);

  // Limit zoom to the first default level.
  return Math.max(0, previousZoomIndex);
}

export function getNextZoomIndex(currentZoom: ITimelineScaleState): number {
  const nextZoomIndex = findIndex(TIMELINE_ZOOM_LEVELS, (level) => {
    return level.zoom > currentZoom.zoom;
  });

  // Limit zoom to the last default level.
  return Math.min(TIMELINE_ZOOM_LEVELS.length - 1, nextZoomIndex);
}

export function timeMsToUnits(
  timeMs: number,
  zoom = 1,
  playbackRate = 1
): number {
  const zoomedFrameWidth = PREVIEW_FRAME_WIDTH * zoom;
  const frames = timeMs * (60 / 1000);

  return (frames * zoomedFrameWidth) / playbackRate;
}

export function unitsToTimeMs(units: number, zoom = 1): number {
  const zoomedFrameWidth = PREVIEW_FRAME_WIDTH * zoom;

  const frames = units / zoomedFrameWidth;

  return frames * FRAME_INTERVAL;
}

export function calculateTimelineWidth(
  totalLengthMs: number,
  zoom = 1
): number {
  return timeMsToUnits(totalLengthMs, zoom);
}

export const randomInt = Math.floor(Math.random() * 1000) + 1;

export function mergeTrackObjects(nestedArray: any[], maxDepth = 1) {
  const flattenedArray: any[] = [];
  const depthLimit = Math.floor(maxDepth);

  const flattenRecursively = (array: any[], depth: number) => {
    for (const item of array) {
      if (Array.isArray(item) && depth < depthLimit) {
        flattenRecursively(item, depth + 1);
      } else {
        flattenedArray.push(item);
      }
    }
  };

  flattenRecursively(nestedArray, 0);
  return flattenedArray;
}

export function reorderTracksByIndex(newTrack: any, tracks: any[]) {
  // Сортировка треков по индексам tempIndex
  const sortedTracks = tracks.sort((a, b) => a.tempIndex - b.tempIndex);
  const result = [];

  // Добавление треков с отрицательным tempIndex
  for (const track of sortedTracks) {
    if (track.tempIndex < 0) {
      result.push(track);
    }
  }

  // Добавление нового трека
  result.push(newTrack);

  // Добавление треков с положительным tempIndex
  for (const track of sortedTracks) {
    if (track.tempIndex >= 0) {
      result.push(track);
    }
  }

  return result;
}
