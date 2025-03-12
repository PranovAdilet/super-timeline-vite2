import type { ITrackItem } from "../../";
type SequenceItemOptions = {
    fps: number;
    width: number;
    height: number;
};
type ItemType = "text" | "image" | "video" | "audio";
export declare const SequenceItem: Record<ItemType, (item: ITrackItem, options: SequenceItemOptions) => React.JSX.Element>;
export declare const createInitialObject: (item: any, width: number, height: number) => any;
export {};
//# sourceMappingURL=index2.d.ts.map