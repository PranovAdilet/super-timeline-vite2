import { Canvas, CanvasOptions } from "fabric";
import { CanvasMixin, TrackItemsMixin, TracksMixin, TransitionsMixin } from "@/classes/mixins";
import { Bounding, CanvasSpacing, ITimelineScaleState, ITimelineStore, ITrack, ITrackItem, ITransition, IUpdateStateOptions, TrackSettings } from "@/shared/types";
interface TimelineOptions extends CanvasOptions {
    bounding?: {
        width: number;
        height: number;
    };
    onScroll?: OnScroll;
    tScale?: number;
    store: ITimelineStore;
    acceptsMap?: Record<string, string[]>;
    sizesMap?: Record<string, number>;
    spacing?: CanvasSpacing;
    state: any;
    scale: ITimelineScaleState;
}
type OnScroll = (v: {
    scrollTop: number;
    scrollLeft: number;
}) => void;
export interface Timeline extends Canvas, CanvasMixin, TrackItemsMixin, TracksMixin, TransitionsMixin {
}
export declare class Timeline extends Canvas {
    acceptsMap?: Record<string, string[]>;
    tracks: ITrack[];
    trackItemsMap: Record<string, ITrackItem>;
    trackItemIds: string[];
    transitionIds: string[];
    transitionsMap: Record<string, ITransition>;
    trackItemDetailsMap: Record<string, ITrackItem>;
    bounding: Bounding;
    onScroll?: OnScroll;
    tScale: number;
    store?: ITimelineStore;
    state: any;
    activeIds: string[];
    spacing: CanvasSpacing;
    scale?: ITimelineScaleState;
    sizesMap?: Record<string, number>;
    duration: any;
    tracksSettings: Record<string, TrackSettings>;
    setupFabricDefaults(): void;
    constructor(canvasEl: HTMLCanvasElement, options: Partial<TimelineOptions>);
    createAcceptsItemMap(map?: Record<string, string[]>): Record<string, string[]>;
    setActiveIds(activeIds: string[]): void;
    purge(): void;
    static registerItems(classes: Record<any, any>): void;
    initEventListeners(): void;
    getUpdatedState(): {
        tracks: ITrack[];
        trackItemIds: string[];
        trackItemsMap: Record<string, (import("@/shared/types").ITrackItemBase & {
            type: "text";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "image";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "video";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "audio";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "helper";
        })>;
        transitionIds: string[];
        transitionsMap: Record<string, ITransition>;
        scale: ITimelineScaleState | undefined;
        duration: number;
        tracksSettings: any;
    };
    getState(): {
        tracks: ITrack[];
        trackItemIds: string[];
        trackItemsMap: Record<string, (import("@/shared/types").ITrackItemBase & {
            type: "text";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "image";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "video";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "audio";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "helper";
        })>;
        transitionIds: string[];
        transitionsMap: Record<string, ITransition>;
        trackItemDetailsMap: Record<string, (import("@/shared/types").ITrackItemBase & {
            type: "text";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "image";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "video";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "audio";
        }) | (import("@/shared/types").ITrackItemBase & {
            type: "helper";
        })>;
        tracksSettings: Record<string, TrackSettings>;
        scale: ITimelineScaleState | undefined;
        duration: number;
    };
    notify(dataHistory?: {
        updateHistory: boolean;
    }): void;
    updateState(dataHistory?: IUpdateStateOptions): void;
    scrollTo({ scrollLeft, scrollTop, }: {
        scrollLeft: number;
        scrollTop: number;
    }): void;
    setBoundingBox(bounding: Bounding): void;
    calcBounding(): void;
    setScale(scale: ITimelineScaleState): void;
    setViewportPos(viewportX: any, viewportY: any): void;
    getViewportPos(x: number, y: number): {
        x: number;
        y: number;
    };
}
export {};
//# sourceMappingURL=timeline.d.ts.map