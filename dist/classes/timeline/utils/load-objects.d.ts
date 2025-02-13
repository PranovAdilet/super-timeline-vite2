import { VideoObject, TextObject } from "@/classes/objects";
import { IAudio, IImage, IText, IVideo } from "@/shared/types";
export declare const loadAudioObject: (item: IAudio, options: {
    tScale: number;
}) => any;
export declare const loadImageObject: (item: IImage, options: {
    tScale: number;
}) => any;
export declare const loadVideoObject: (item: IVideo, options: {
    tScale: number;
}) => VideoObject;
export declare const loadTextObject: (item: IText, options: {
    tScale: number;
}) => TextObject;
//# sourceMappingURL=load-objects.d.ts.map