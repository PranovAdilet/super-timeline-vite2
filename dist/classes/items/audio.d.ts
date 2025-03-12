import { AudioObject as AudioBase } from "../objects/audio";
export declare class Audio extends AudioBase {
    static type: string;
    text: string;
    src: string;
    cachedCanvas: OffscreenCanvas | null;
    constructor(props: any);
    _render(ctx: CanvasRenderingContext2D): Promise<void>;
    drawTextIdentity(ctx: CanvasRenderingContext2D): Promise<void>;
}
//# sourceMappingURL=audio.d.ts.map