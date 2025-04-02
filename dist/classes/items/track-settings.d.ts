import { Rect } from "fabric";
export type TrackSettingsItemProps = {
    id: string;
    top: number;
    left: number;
    items: string[];
    trackId: string;
} & Pick<Rect, "top" | "left" | "width" | "height">;
export declare class TrackSettingsObject extends Rect {
    static ownDefaults: Partial<Rect>;
    trackId: string;
    isSelected: boolean;
    static type: string;
    id: string;
    borderColor: string;
    stroke: string;
    strokeWidth: number;
    constructor(props: TrackSettingsItemProps);
    _render(ctx: CanvasRenderingContext2D): void;
    static getDefaults(): Record<string, any>;
    setSelected(isSelected: boolean): void;
    updateSelected(ctx: CanvasRenderingContext2D): void;
    updateCoords(size: number): void;
}
//# sourceMappingURL=track-settings.d.ts.map