import { Animation } from "./types";
export type PresetName = "fadeIn" | "fadeOut" | "scaleIn" | "scaleOut" | "slideInRight" | "slideInLeft" | "slideInTop" | "slideInBottom" | "slideOutRight" | "slideOutLeft" | "slideOutTop" | "slideOutBottom" | "rotateIn" | "flipIn";
export declare const presets: Record<PresetName, Animation>;
export type AnimationPresets = typeof presets;
//# sourceMappingURL=presets.d.ts.map