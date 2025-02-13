import { Control, Rect, RectProps } from "fabric";
interface TransitionGuideProps extends Pick<RectProps, "width" | "height" | "top" | "left"> {
    id: string;
}
export declare class TransitionGuide extends Rect {
    static type: string;
    static ownDefaults: {
        objectCaching: boolean;
        borderColor: string;
        stroke: string;
        strokeWidth: number;
        fill: string;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
        lockMovementX: boolean;
        lockMovementY: boolean;
        duration: number;
        rx: number;
        ry: number;
    };
    tScale?: number;
    duration: number;
    fromId?: string;
    toId?: string;
    itemType: string;
    isSelected: boolean;
    id: string;
    constructor(props: TransitionGuideProps);
    static createControls(): {
        controls: {
            mr: Control;
            ml: Control;
        };
    };
    static getDefaults(): {
        objectCaching: boolean;
        borderColor: string;
        stroke: string;
        strokeWidth: number;
        fill: string;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
        lockMovementX: boolean;
        lockMovementY: boolean;
        duration: number;
        rx: number;
        ry: number;
    };
    updateCoords(): void;
    _render(ctx: CanvasRenderingContext2D): void;
    drawTextIdentity(ctx: CanvasRenderingContext2D): void;
    setSelected(isSelected: boolean): void;
    updateSelected(ctx: CanvasRenderingContext2D): void;
}
export declare function createControls(): {
    mr: Control;
    ml: Control;
};
export {};
//# sourceMappingURL=transition-guide.d.ts.map