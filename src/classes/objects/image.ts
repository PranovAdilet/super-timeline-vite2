import { classRegistry, Rect, RectProps } from "fabric";
import { createResizeControls } from "./text";
import { defaultColor } from "./helper";
import { IDisplay } from "@/shared/types";

export interface ImageProps
  extends Pick<RectProps, "width" | "height" | "left" | "top"> {
  id: string;
  src: string;
  tScale: number;
  display: IDisplay;
}

class ImageClass extends Rect {
  isSelected: boolean;
  tScale?: number;
  display?: any;
  id: string;
  src: string;
  itemType: string;

  static ownDefaults = {
    rx: 8,
    ry: 8,
    objectCaching: false,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    fill: "#27272a",
  };

  static type = "Image";

  constructor(config: ImageProps) {
    super(config);
    this.itemType = "image";
    this.isSelected = false;

    Object.assign(this, ImageClass.ownDefaults);
    this.id = config.id;
    this.src = config.src;
    this.display = config.display;
    this.tScale = config.tScale;
  }

  static createControls() {
    return {
      controls: createResizeControls(),
    };
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...ImageClass.ownDefaults,
    };
  }

  _render(context: CanvasRenderingContext2D) {
    super._render(context);
    this.updateSelected(context);
  }

  setSelected(isSelected: boolean) {
    this.isSelected = isSelected;
    this.set({ dirty: true });
  }

  updateSelected(context: CanvasRenderingContext2D) {
    if (this.isSelected) {
      context.save();
      context.beginPath();
      context.roundRect(
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height,
        this.rx
      );
      context.lineWidth = 2;
      context.strokeStyle = defaultColor;
      context.stroke();
      context.restore();
    }
  }
}

export const ImageObject = ImageClass;

classRegistry.setClass(ImageObject, "Image");
