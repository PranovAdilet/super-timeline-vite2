import { ITrack, ITrackItem } from "@/shared/types";
export declare const calculateDuration: (trackItems: Record<string, ITrackItem>) => number;
export declare const calculateTrim: (trim: {
    from?: number;
    to?: number;
} | null, context: {
    duration: number;
}) => {
    from: number;
    to: number;
};
export declare const calculateDisplayRange: (display: {
    from: number;
    to: number;
} | undefined, options: {
    duration: number;
    trim?: {
        from: number;
        to: number;
    };
}) => {
    from: number;
    to: number;
};
export declare function filterAndCleanTracks(tracks: ITrack[], idsToRemove: string[]): {
    items: string[];
    id: string;
    type: "text" | "image" | "video" | "audio" | "helper" | "main" | "tracksettings";
    metadata?: Partial<import("@/shared/types").IMetadata>;
    accepts?: import("@/shared/types").ItemType[];
    index?: number;
}[];
//# sourceMappingURL=timeline.d.ts.map