import type { FC } from "react";
import { Canvas } from "fabric";
type Props = {
    className?: string;
    onReady?: (canvas: Canvas) => void;
    initialObjects?: any[];
    readonly?: boolean;
    width?: number;
    height?: number;
};
export declare const FabricCanvas: FC<Props>;
export {};
//# sourceMappingURL=canvas.d.ts.map