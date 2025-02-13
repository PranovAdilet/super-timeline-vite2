import { Control, Rect, RectProps } from "fabric";
interface TransitionProps extends Pick<RectProps, "width" | "height" | "top" | "left"> {
    id: string;
    tScale: number;
    duration: number;
    fromId: string;
    toId: string;
    kind: string;
    strokeDashArray?: number[];
}
export declare class Transition extends Rect {
    static type: string;
    id: string;
    duration: any;
    fromId?: string;
    toId?: string;
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
    isSelected: boolean;
    constructor(options: TransitionProps);
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
    setSelected(isSelected: boolean): void;
    updateSelected(ctx: CanvasRenderingContext2D): void;
}
export {};
//# sourceMappingURL=transition.d.ts.map