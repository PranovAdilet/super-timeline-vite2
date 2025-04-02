import { Animation } from "@/components/player/animation";
import { IBasicAnimation, IItem } from "../types";
export declare const getAnimations: (animation: {
    in: IBasicAnimation;
    out: IBasicAnimation;
}, item: IItem) => {
    animationIn: Animation | Animation[] | null;
    animationOut: Animation | Animation[] | null;
};
//# sourceMappingURL=get-animations.d.ts.map