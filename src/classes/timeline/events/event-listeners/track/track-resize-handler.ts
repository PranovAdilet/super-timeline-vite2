import { Timeline } from "@/classes/timeline/timeline";
import { v4 as uuidv4 } from "uuid";

export function trackResizeHandler(
  this: Timeline,
  {
    trackItemIds,
    isOverlapped,
  }: { trackItemIds: string[]; isOverlapped: boolean }
) {
  const [firstItemId] = trackItemIds;
  if (!firstItemId) return;

  if (
    !this.getObjects("Transition").find(
      (object: any) => object.id === firstItemId
    )
  ) {
    const track = this.tracks.find((t) => t.items.includes(firstItemId));
    if (isOverlapped) {
      const updatedTracks = updateTracks(this.tracks, trackItemIds);

      const newTrack = {
        id: uuidv4(),
        items: [firstItemId],
        type: track?.type,
        accepts: track?.accepts,
      };

      const trackIndex = this.tracks.findIndex((t) => t.id === track?.id);
      updatedTracks.splice(trackIndex, 0, newTrack);
      this.tracks = updatedTracks;
    }
  }

  this.renderTracks();
  this.alignItemsToTrack();
  this.alignTransitionsToTrack();
  this.updateTransitions();
  this.updateTrackItemsPosition();

  this.updateState({ updateHistory: !0, kind: "update" });
}

function updateTracks(tracks: any[], itemIdsToRemove: string[]): any[] {
  return tracks.map((track) => ({
    ...track,
    items: track.items.filter(
      (itemId: any) => !itemIdsToRemove.includes(itemId)
    ),
  }));
}
