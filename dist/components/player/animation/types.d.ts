export interface Animation {
    property: string;
    from: number;
    to: number;
    durationInFrames: number;
    ease: (t: number) => number;
    delay?: number;
    previewUrl?: string;
    name?: string;
}
export interface StaggerConfig {
    amount: number;
    overlap?: number;
}
export interface AnimationConfig {
    in?: Animation | Animation[];
    out?: Animation | Animation[];
    stagger?: StaggerConfig;
}
export interface AnimatedElementProps {
    animationIn?: Animation | Animation[];
    animationOut?: Animation | Animation[];
    durationInFrames: number;
    children: React.ReactNode;
    className?: string;
}
export interface AnimatedTextProps {
    children: string;
    durationInFrames: number;
    wordAnimation?: AnimationConfig;
    letterAnimation?: AnimationConfig;
    className?: string;
}
export type CombineAnimations = (...animations: (Animation | Animation[] | undefined)[]) => Animation[];
export type CreateStaggeredAnimations = (animations: Animation | Animation[] | undefined, count: number, stagger: StaggerConfig, durationInFrames: number, isOut: boolean) => Animation[];
//# sourceMappingURL=types.d.ts.map