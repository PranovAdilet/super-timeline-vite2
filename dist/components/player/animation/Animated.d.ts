import React from "react";
import { Animation } from "./types";
export interface AnimatedProps {
    animationIn?: Animation | Animation[] | null;
    animationOut?: Animation | Animation[] | null;
    durationInFrames: number;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Animated: React.FC<AnimatedProps>;
export declare const combine: (...animations: (Animation | Animation[] | undefined)[]) => Animation[];
//# sourceMappingURL=Animated.d.ts.map