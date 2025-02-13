import { VideoObject as VideoBase } from "../objects/video";
export declare class Video extends VideoBase {
    static type: string;
    text: string;
    constructor(props: any);
    _render(ctx: CanvasRenderingContext2D): void;
    drawTextIdentity(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=video.d.ts.map