import { Timeline } from "@/classes/timeline/timeline";
import {
  mergeTrackObjects,
  removeItemsFromTrack,
  reorderTracksByIndex,
} from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";

export function trackMovedHandler(this: Timeline, trackData: any) {
  const {
    isSecondaryOverlapped,
    secondaryTracks,
    primaryTracks,
    primaryPositions,
  } = trackData;

  const { trackId, positions } = primaryPositions;

  const trackIndex = this.tracks.findIndex((track) => track.id === trackId);

  const secondaryTrackIds = mergeTrackObjects(
    Object.keys(secondaryTracks).map((trackKey) =>
      secondaryTracks[trackKey].objects.map((obj: any) => obj.id)
    )
  );
  const updatedTracks = removeItemsFromTrack(this.tracks, [
    ...Object.keys(positions),
    ...secondaryTrackIds,
  ]);

  Object.keys(primaryTracks).forEach((trackKey) => {
    this.pauseEventListeners();

    const { objects } = primaryTracks[trackKey];
    objects.forEach((object: any) => {
      const position = positions[object.id];
      object.left = position.left;
    });

    this.resumeEventListeners();

    const trackToUpdate = updatedTracks.find((track) => track.id === trackId);
    if (trackToUpdate) {
      trackToUpdate.items.push(...Object.keys(positions));
    }
    this.tracks = updatedTracks;
  });

  const trackAtIndex = this.tracks[trackIndex];
  const newTrackItems: any = [];

  Object.keys(secondaryTracks).forEach((trackKey) => {
    const { objects, index } = secondaryTracks[trackKey];
    const objectIds = objects.map((obj: any) => obj.id);
    const [firstObjectId] = objectIds;
    const trackItem = this.trackItemsMap[firstObjectId];

    if (isSecondaryOverlapped) {
      const newTrackItem = {
        id: uuidv4(),
        items: objectIds,
        type: trackItem.type,
        accepts: this.acceptsMap?.[trackItem.type],
        tempIndex: index,
      };
      newTrackItems.push(newTrackItem);
    } else {
      const existingTrack = updatedTracks[trackIndex + index];
      if (existingTrack) {
        existingTrack.items.push(...objectIds);
      }
      this.tracks = updatedTracks;
    }
  });
  const updatedTracksWithNewItems = reorderTracksByIndex(
    trackAtIndex,
    newTrackItems
  );
  if (updatedTracksWithNewItems.length) {
    updatedTracks.splice(trackIndex, 1, ...updatedTracksWithNewItems);
  }
  this.tracks = updatedTracks;
  this.renderTracks();
  this.alignItemsToTrack();
  this.updateTrackItemsPosition();
  this.updateTransitions();

  this.updateState({ updateHistory: true, kind: "update" });
}
