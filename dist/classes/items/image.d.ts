import { ImageObject as ImageBase } from "../objects/image";
export declare class Image extends ImageBase {
    static type: string;
    text: string;
    constructor(props: any);
    _render(ctx: CanvasRenderingContext2D): void;
    drawTextIdentity(ctx: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=image.d.ts.map