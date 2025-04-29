import { Timeline } from "@/classes/timeline/timeline";
import {
  mergeTrackObjects,
  randomInt,
  removeItemsFromTrack,
  reorderTracksByIndex,
} from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";

export function tracksCreationHandler(this: Timeline, data: any) {
  const {
    secondaryTracks: secondary,
    primaryTracks: primary,
    primaryPositions: positions,
  } = data;

  const { positions: positionMap, trackIndex: selectedTrackIndex } = positions;
  const trackIndex =
    selectedTrackIndex === -1 ? this.tracks.length : selectedTrackIndex;

  if (!primary) return;

  const [primaryTrackId] = Object.keys(primary);
  const track = this.tracks.find((track) => track.id == primaryTrackId);
  const primaryTrack = primary[primaryTrackId];

  if (!primaryTrack) return;

  const trackData = {
    id: uuidv4(),
    items: primaryTrack.objects.map((object: any) => object.id),
    type: track?.type,
    accepts: track?.accepts,
  };

  const secondaryTrackIds = mergeTrackObjects(
    Object.keys(secondary).map((key) =>
      secondary[key].objects.map((object: any) => object.id)
    )
  );

  const updatedTracks = removeItemsFromTrack(this.tracks, [
    ...Object.keys(positionMap),
    ...secondaryTrackIds,
  ]);

  const newTrackItems: any = [];

  Object.keys(secondary).forEach((secondaryTrackId) => {
    const { objects, index } = secondary[secondaryTrackId];
    const secondaryTrack = this.tracks.find(
      (track) => track.id == secondaryTrackId
    );
    const objectIds = objects.map((object: any) => object.id);

    const newTrackItem = {
      id: uuidv4(),
      items: objectIds,
      type: secondaryTrack?.type,
      accepts: secondaryTrack?.accepts,
      tempIndex: index,
    };

    newTrackItems.push(newTrackItem);
  });

  const mergedItems = reorderTracksByIndex(trackData, newTrackItems);

  if (mergedItems.length) {
    updatedTracks.splice(trackIndex, 0, ...mergedItems);
  }

  this.tracks = updatedTracks;
  this.renderTracks();
  this.alignItemsToTrack();
  this.updateTrackItemsPosition();
  this.renderTrackSettings(this.tracks);

  this.updateTransitions();

  this.updateState({ updateHistory: true, kind: "update" });
}
