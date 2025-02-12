import { IDisplay } from "@/shared/types";
import {
  Rect,
  classRegistry,
  Control,
  controlsUtils,
  util,
  RectProps,
} from "fabric";

export interface TextProps
  extends Pick<RectProps, "width" | "height" | "top" | "left"> {
  id: string;
  text: string;
  tScale: number;
  display: IDisplay;
  backgroundColor: string;
}

export class TextObject extends Rect {
  isSelected = false;
  text?: string;
  tScale?: number;
  display?: any;
  id: string;
  backgroundColor: string;

  static ownDefaults = {
    rx: 6,
    ry: 6,
    objectCaching: false,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    fill: "#27272a",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    fontSize: 16,
    fontFamily: "Arial",
    fontColor: "#ffffff",
    textAlign: "center",
  };

  static type = "Text";

  constructor(options: TextProps) {
    super(options);

    Object.assign(this, TextObject.ownDefaults);
    this.id = options.id;
    this.tScale = options.tScale;
    this.display = options.display;
    this.text = options.text || "";
    this.backgroundColor = options.backgroundColor || "transparent";
  }

  static createControls() {
    return {
      controls: createResizeControls(),
    };
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...TextObject.ownDefaults,
    };
  }

  setSelected(isSelected: boolean) {
    this.isSelected = isSelected;
    this.set({ dirty: true });
  }

  _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);
    this.updateSelected(ctx);
  }

  updateSelected(ctx: CanvasRenderingContext2D) {
    if (this.isSelected) {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height,
        6
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0, 216, 214,1.0)";
      ctx.stroke();
      ctx.restore();
    }
  }
}

export function renderControl(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  styleOverride: any,
  fabricObject: any
) {
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(util.degreesToRadians(90 + fabricObject.angle));
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#dfe2e8";
  ctx.moveTo(-6, 0);
  ctx.lineTo(6, 0);
  ctx.stroke();
  ctx.restore();
}

export function createResizeControls() {
  return {
    mr: new Control({
      x: 0.5,
      y: 0,
      actionHandler: handleResize,
      cursorStyleHandler: controlsUtils.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: renderControl,
    }),
    ml: new Control({
      x: -0.5,
      y: 0,
      actionHandler: handleResize,
      cursorStyleHandler: controlsUtils.scaleSkewCursorStyleHandler,
      actionName: "resizing",
      render: renderControl,
    }),
  };
}

export const handleResize = controlsUtils.wrapWithFireEvent(
  "resizing",
  controlsUtils.wrapWithFixedAnchor((eventData, transform, x, y) => {
    const localPoint = controlsUtils.getLocalPoint(
      transform,
      transform.originX,
      transform.originY,
      x,
      y
    );
    if (
      isCenteredOrigin(transform.originX) ||
      (isRightAlignedOrigin(transform.originX) && localPoint.x < 0) ||
      (isLeftAlignedOrigin(transform.originX) && localPoint.x > 0)
    ) {
      const target = transform.target;
      const strokeWidth =
        target.strokeWidth / (target.strokeUniform ? target.scaleX : 1);
      const scaleFactor = isCenteredObject(transform) ? 2 : 1;
      const currentWidth = target.width;
      const newWidth = Math.ceil(
        Math.abs((localPoint.x * scaleFactor) / target.scaleX) - strokeWidth
      );
      const isLeftHandle = transform.corner === "ml";

      if (isLeftHandle) {
        const newLeftWidth = currentWidth - newWidth;
        if (target.left + newLeftWidth < 0) {
          target.set("width", target.width + target.left);
          return true;
        }
      }
      target.set("width", Math.max(newWidth, 0));
      return currentWidth !== target.width;
    }
    return false;
  })
);

export const positionOffsets = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5,
};

export const getOffset = (position: any) =>
  typeof position === "string"
    ? positionOffsets[position as keyof typeof positionOffsets]
    : position - 0.5;

const isCenteredOrigin = (originX: any) =>
  getOffset(originX) === getOffset("center");
const isLeftAlignedOrigin = (originX: any) =>
  getOffset(originX) === getOffset("left");
const isRightAlignedOrigin = (originX: any) =>
  getOffset(originX) === getOffset("right");

function isCenteredObject(transform: any) {
  return (
    getOffset(transform.originX) === getOffset("center") &&
    getOffset(transform.originY) === getOffset("center")
  );
}

classRegistry.setClass(TextObject, "Text");
