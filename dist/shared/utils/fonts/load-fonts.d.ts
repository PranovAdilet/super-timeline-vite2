import { ICompactFont, IFont } from "@/shared/types";
export declare const loadFonts: (fonts: {
    name: string;
    url: string;
}[]) => Promise<unknown>;
export declare const getCompactFontData: (fonts: IFont[]) => ICompactFont[];
export declare function ensureFontLoaded(fontFamily: string, fontUrl: string): Promise<void>;
//# sourceMappingURL=load-fonts.d.ts.map