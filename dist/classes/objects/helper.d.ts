import { IMetadata } from "@/shared/types";
import { Group, Rect } from "fabric";
type GuideGroupOptions = {
    width: number;
    id?: string;
    tScale?: number;
    metadata: Partial<IMetadata>;
    kind: "top" | "center" | "bottom";
    rectTopFill?: string;
    rectBottomFill?: string;
    rectMiddleFill?: string;
};
export declare const defaultColor = "rgba(0, 216, 214, 1.0)";
declare class GuideGroup extends Group {
    static type: string;
    static defaultSettings: {
        selectable: boolean;
        evented: boolean;
    };
    static ownDefaults: {
        selectable: boolean;
        evented: boolean;
    };
    guide: Rect;
    topGuide: Rect;
    bottomGuide: Rect;
    id?: string;
    metadata: Record<string, any>;
    tScale?: number;
    kind: string;
    constructor(options: GuideGroupOptions);
    static getDefaults(): {
        selectable: boolean;
        evented: boolean;
    };
    updateCoords(width: number): void;
    setSelected(isSelected: boolean): void;
}
export declare const HelperObject: typeof GuideGroup;
export {};
//# sourceMappingURL=helper.d.ts.map