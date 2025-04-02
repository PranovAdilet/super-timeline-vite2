import type { ITrackItem, ZoomType } from "../../";
import { Easing } from "remotion";
export declare const calculateFrames: (display: {
    from: number;
    to: number;
}, fps: number) => {
    from: number;
    durationInFrames: number;
};
type SequenceItemOptions = {
    fps: number;
    width: number;
    height: number;
    currentFrame: number;
};
type ItemType = "text" | "image" | "video" | "audio";
export declare const SequenceItem: Record<ItemType, (item: ITrackItem, options: SequenceItemOptions) => React.JSX.Element>;
export declare const calculateScale: (frame: number, durationInFrames: number, zoom?: ZoomType) => number;
export declare const getEasingFunction: (easing?: ZoomType["ease"]) => typeof Easing.linear;
export {};
//# sourceMappingURL=index.d.ts.map