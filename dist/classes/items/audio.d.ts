import { AudioObject as AudioBase } from "../objects/audio";
export declare class Audio extends AudioBase {
    static type: string;
    text: string;
    constructor(props: any);
    _render(ctx: CanvasRenderingContext2D): void;
    drawTextIdentity(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=audio.d.ts.map