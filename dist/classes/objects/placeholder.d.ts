import { ItemType } from "@/shared/types/timeline";
import type { FabricObject, RectProps } from "fabric";
import { Rect } from "fabric";
type PlaceholderProps = {
    id: string;
    for: ItemType;
} & Pick<RectProps, "width" | "height" | "top" | "left">;
export declare class Placeholder extends Rect {
    static type: string;
    guideItemId?: string;
    distXToActCenter?: number;
    trackItemType?: ItemType;
    defaultPos?: {
        x: number;
        y: number;
    };
    draggedObject: FabricObject | null;
    for: ItemType;
    id: string;
    static ownDefaults: {
        rx: number;
        ry: number;
        objectCaching: boolean;
        borderColor: string;
        strokeWidth: number;
        fill: string;
        stroke: string;
        selectable: boolean;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
        strokeDashArray: number[];
        evented: boolean;
    };
    constructor(props: PlaceholderProps);
    static getDefaults(): {
        rx: number;
        ry: number;
        objectCaching: boolean;
        borderColor: string;
        strokeWidth: number;
        fill: string;
        stroke: string;
        selectable: boolean;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
        strokeDashArray: number[];
        evented: boolean;
    };
    _render(ctx: CanvasRenderingContext2D): void;
    updateSelected(ctx: CanvasRenderingContext2D): void;
}
export default Placeholder;
//# sourceMappingURL=placeholder.d.ts.map