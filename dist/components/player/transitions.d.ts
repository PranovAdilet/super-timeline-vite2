import { type SlideDirection } from "@remotion/transitions/slide";
import type { ReactNode } from "react";
type TransitionOptions = {
    width: number;
    height: number;
    durationInFrames: number;
    id: string;
    direction?: SlideDirection;
};
export declare const Transitions: Record<string, (options: TransitionOptions) => ReactNode>;
export {};
//# sourceMappingURL=transitions.d.ts.map