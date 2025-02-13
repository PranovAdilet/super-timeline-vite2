import { Rect, RectProps } from "fabric";
interface PreviewTrackItemProps extends Pick<RectProps, "width" | "height" | "top" | "left"> {
    id: string;
    name: string;
}
export declare class PreviewTrackItem extends Rect {
    static type: string;
    static ownDefaults: {
        objectCaching: boolean;
        borderColor: string;
        stroke: string;
        strokeWidth: number;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
        rx: number;
        ry: number;
    };
    duration: number;
    fromId: string;
    toId: string;
    isSelected: boolean;
    name: string;
    durationString: string;
    id: string;
    constructor(props: PreviewTrackItemProps);
    static getDefaults(): {
        objectCaching: boolean;
        borderColor: string;
        stroke: string;
        strokeWidth: number;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
        rx: number;
        ry: number;
    };
    _render(ctx: CanvasRenderingContext2D): void;
    drawTextIdentity(ctx: CanvasRenderingContext2D): void;
    private drawRoundedRect;
}
export {};
//# sourceMappingURL=drag-track-item.d.ts.map