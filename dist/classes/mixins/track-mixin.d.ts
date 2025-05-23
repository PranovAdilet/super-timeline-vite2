import type { ITrack, ITrackItem } from "@/shared/types/timeline";
import { Timeline } from "../timeline/timeline";
export declare class TracksMixin {
    renderTrackSettings(this: Timeline, tracks: ITrack[]): void;
    findOrCreateTrack(this: Timeline, trackItemData: ITrackItem, { trackId, trackIndex }: {
        trackId?: string;
        trackIndex?: number;
    }): string;
    removeTracks(this: Timeline): void;
    renderTracks(this: Timeline): void;
    updateTracksState(this: Timeline): void;
    updateTrackCoords(this: Timeline): void;
}
//# sourceMappingURL=track-mixin.d.ts.map