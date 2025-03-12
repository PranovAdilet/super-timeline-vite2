import type { ITrackItem } from "../../";
type SequenceItemOptions = {
    fps: number;
    width: number;
    height: number;
    currentFrame: number;
};
type ItemType = "text" | "image" | "video" | "audio";
export declare const SequenceItem: Record<ItemType, (item: ITrackItem, options: SequenceItemOptions) => React.JSX.Element>;
export {};
//# sourceMappingURL=index.d.ts.map