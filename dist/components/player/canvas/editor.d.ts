import type { Canvas, TextboxProps } from "fabric";
import { Textbox } from "fabric";
export declare const buildFabricEditor: (canvas: Canvas) => {
    canvas: Canvas;
    updateText(object: Textbox, options?: Partial<TextboxProps & {
        text: string;
    }>): void;
    getActiveText(): Textbox<any, any, any> | undefined;
    exportObjects(): any;
};
export type FabricEditor = ReturnType<typeof buildFabricEditor>;
//# sourceMappingURL=editor.d.ts.map