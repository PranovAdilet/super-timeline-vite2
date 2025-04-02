import { IBoxShadow, ICompactFont, IFont, IText, ITrackItem } from "@/shared";
export interface ITextControlProps {
    color: string;
    colorDisplay: string;
    fontSize: number;
    fontSizeDisplay: string;
    fontFamily: string;
    fontFamilyDisplay: string;
    opacityDisplay: string;
    textAlign: string;
    textDecoration: string;
    borderWidth: number;
    borderColor: string;
    opacity: number;
    boxShadow: IBoxShadow;
    backgroundColor?: string;
}
export declare const getStyleNameFromFontName: (fontName: string) => string;
declare const BasicText: ({ trackItem }: {
    trackItem: ITrackItem & IText;
}) => import("react/jsx-runtime").JSX.Element;
export default BasicText;
export declare const FontFamily: ({ handleChangeFont, fontFamilyDisplay, }: {
    handleChangeFont: (font: ICompactFont) => void;
    fontFamilyDisplay: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FontSize: ({ value, onChange, }: {
    value: number;
    onChange: (v: number) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FontStyle: ({ selectedFont, handleChangeFontStyle, }: {
    selectedFont: ICompactFont;
    handleChangeFontStyle: (font: IFont) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FontColor: ({ value, handleColorChange, }: {
    value: string;
    handleColorChange: (color: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const BackgroundColor: ({ value, handleBackgroundChange, }: {
    value: string;
    handleBackgroundChange: (color: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const TextDecoration: ({ value, onChange, }: {
    value: string;
    onChange: (v: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Alignment: ({ value, onChange, }: {
    value: string;
    onChange: (v: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=basic-text.d.ts.map