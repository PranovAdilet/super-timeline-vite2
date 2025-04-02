import React from "react";
import { Animation } from "./types";
interface AnimationConfig {
    animation: Animation | Animation[];
    overlap?: number;
}
interface AnimatedTextProps {
    children: string;
    durationInFrames: number;
    wordAnimation?: AnimationConfig;
    letterAnimation?: AnimationConfig;
    className?: string;
}
export declare const AnimatedText: React.FC<AnimatedTextProps>;
export {};
//# sourceMappingURL=AnimatedText.d.ts.map