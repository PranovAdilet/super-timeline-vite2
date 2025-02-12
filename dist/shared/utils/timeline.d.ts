import { ITimelineScaleState } from "../types/timeline";
export declare function getFitZoomLevel(totalLengthMs: number, zoom?: number): ITimelineScaleState;
export declare function getZoomByIndex(index: number): ITimelineScaleState;
export declare function getPreviousZoomLevel(currentZoom: ITimelineScaleState): ITimelineScaleState;
export declare const getPreviousZoom: (currentZoom: ITimelineScaleState) => ITimelineScaleState | null;
export declare const getNextZoom: (currentZoom: ITimelineScaleState) => ITimelineScaleState | null;
export declare function getNextZoomLevel(currentZoom: ITimelineScaleState): ITimelineScaleState;
export declare function getPreviousZoomIndex(currentZoom: ITimelineScaleState): number;
export declare function getNextZoomIndex(currentZoom: ITimelineScaleState): number;
export declare function timeMsToUnits(timeMs: number, zoom?: number, playbackRate?: number): number;
export declare function unitsToTimeMs(units: number, zoom?: number): number;
export declare function calculateTimelineWidth(totalLengthMs: number, zoom?: number): number;
export declare const randomInt: number;
export declare function mergeTrackObjects(nestedArray: any[], maxDepth?: number): any[];
export declare function reorderTracksByIndex(newTrack: any, tracks: any[]): any[];
//# sourceMappingURL=timeline.d.ts.map