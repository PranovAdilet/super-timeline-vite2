import { IAudio, IImage, IText, IVideo } from "@/shared/types";
export declare const loadImageItem: (payload: IImage, options: {
    origin?: number;
    size: {
        width: number;
        height: number;
    };
}) => Promise<IImage>;
export declare const loadVideoItem: (payload: IVideo, options: {
    origin?: number;
    size: {
        width: number;
        height: number;
    };
}) => Promise<IVideo>;
export declare const loadAudioItem: (payload: IAudio) => Promise<IAudio>;
export declare const loadTextItem: (payload: IText, options: {
    origin?: number;
    size: {
        width: number;
        height: number;
    };
}) => Promise<IText>;
//# sourceMappingURL=load-item.d.ts.map