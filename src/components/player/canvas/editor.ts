import type { Canvas, IText, TextboxProps } from "fabric";
import { Textbox } from "fabric";

export const buildFabricEditor = (canvas: Canvas) => {
  return {
    canvas,
    updateText(
      object: Textbox,
      options?: Partial<TextboxProps & { text: string }>
    ) {
      object.set(options);
      canvas.fire("text:changed", { target: object as unknown as IText });
      canvas.renderAll();
    },
    getActiveText() {
      const object = canvas.getActiveObject();
      if (object instanceof Textbox) {
        return object;
      }
    },
    exportObjects() {
      const canvasJSON = canvas.toJSON();

      // Convert object position from pixel to percentage

      const canvasWidth = canvas.getWidth();
      const canvasHeight = canvas.getHeight();

      const canvasSquare = canvasWidth * canvasHeight;
      const canvasSqrt = Math.round(Math.sqrt(canvasSquare) * 100) / 100;

      return canvasJSON.objects.map((object: any) => {
        const { left, top, width, height, fontSize } = object;

        return {
          ...object,
          left: left / canvasWidth,
          top: top / canvasHeight,
          width: width / canvasWidth,
          height: height / canvasHeight,
          fontSize: fontSize
            ? Math.round((canvasSqrt / fontSize) * 100) / 100
            : undefined,
        };
      });
    },
  };
};

export type FabricEditor = ReturnType<typeof buildFabricEditor>;
