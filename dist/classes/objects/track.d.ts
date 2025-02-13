import { Rect } from "fabric";
import type { IMetadata, ItemType } from "@/shared/types/timeline";
export type TrackItemProps = {
    id: number;
    top: number;
    left: number;
    tScale: number;
    accepts: ItemType[];
    items: string[];
    metadata?: Partial<IMetadata>;
} & Pick<Rect, "top" | "left" | "fill" | "width" | "height">;
export declare class TrackObject extends Rect {
    static ownDefaults: Partial<Rect>;
    static type: string;
    id: number;
    accepts: ItemType[];
    metadata?: Partial<IMetadata>;
    items: string[];
    borderColor: string;
    stroke: string;
    strokeWidth: number;
    constructor(props: TrackItemProps);
    static getDefaults(): Record<string, any>;
    updateCoords(size: number): void;
}
//# sourceMappingURL=track.d.ts.map