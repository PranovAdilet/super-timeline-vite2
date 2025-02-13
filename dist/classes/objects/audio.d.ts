import { Control, Rect, RectProps } from "fabric";
import { IDisplay, ITrim } from "@/shared/types";
export interface AudioProps extends Pick<RectProps, "width" | "height" | "top" | "left"> {
    id: string;
    tScale: number;
    display: IDisplay;
    trim: ITrim;
    duration: number;
    src: string;
}
export declare class AudioObject extends Rect {
    id: number;
    itemType: string;
    isSelected: boolean;
    trim?: any;
    src?: string;
    tScale?: number;
    display?: any;
    static ownDefaults: {
        rx: number;
        ry: number;
        objectCaching: boolean;
        borderColor: string;
        stroke: string;
        strokeWidth: number;
        fill: string;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
    };
    static type: string;
    constructor(options: any);
    static getDefaults(): {
        rx: number;
        ry: number;
        objectCaching: boolean;
        borderColor: string;
        stroke: string;
        strokeWidth: number;
        fill: string;
        borderOpacityWhenMoving: number;
        hoverCursor: string;
    };
    static createControls(): {
        controls: {
            mr: Control;
            ml: Control;
        };
    };
    setSelected(isSelected: boolean): void;
    _render(ctx: CanvasRenderingContext2D): void;
    updateSelected(ctx: CanvasRenderingContext2D): void;
}
export declare const createAudioControls: () => {
    mr: Control;
    ml: Control;
};
//# sourceMappingURL=audio.d.ts.map