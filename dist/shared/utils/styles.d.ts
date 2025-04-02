import { IImage, IText, ITrackItem } from "../types";
export declare const calculateCropStyles: (details: IImage["details"], crop: IImage["details"]["crop"]) => {
    width: string | number;
    height: string | number;
    top: number;
    left: number;
    position: string;
};
export declare const calculateMediaStyles: (details: ITrackItem["details"], crop: ITrackItem["details"]["crop"]) => React.CSSProperties;
export declare const calculateTextStyles: (details: IText["details"]) => React.CSSProperties;
export declare const calculateContainerStyles: (details: ITrackItem["details"], crop?: ITrackItem["details"]["crop"], overrides?: React.CSSProperties) => React.CSSProperties;
//# sourceMappingURL=styles.d.ts.map