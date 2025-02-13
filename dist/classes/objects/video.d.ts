import { Control, Rect } from "fabric";
import { IDisplay, IMetadata, ITrim } from "@/shared/types";
export interface VideoProps {
    id: string;
    width: number;
    height?: number;
    tScale: number;
    fill: string;
    resourceId: string;
    top?: number;
    left?: number;
    display: IDisplay;
    trim: ITrim;
    metadata?: Partial<IMetadata>;
}
export declare class VideoObject extends Rect {
    id: string;
    tScale?: number;
    isSelected: boolean;
    display?: any;
    trim?: any;
    static type: string;
    static defaultProps: {
        objectCaching: boolean;
        rx: number;
        ry: number;
        fill: string;
    };
    constructor(options: VideoProps);
    static createControls(): {
        controls: {
            mr: Control;
            ml: Control;
        };
    };
    _render(ctx: CanvasRenderingContext2D): void;
    setSelected(isSelected: boolean): void;
    updateSelected(ctx: CanvasRenderingContext2D): void;
}
export declare const createMediaControls: () => {
    mr: Control;
    ml: Control;
};
export declare function wrapResizeWithAnchorPosition(updateLogic: any): (eventData: any, transform: any, pointerX: any, pointerY: any) => any;
//# sourceMappingURL=video.d.ts.map