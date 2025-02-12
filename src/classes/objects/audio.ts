import { Control, Rect, RectProps, classRegistry, controlsUtils } from "fabric";
import { getOffset, renderControl } from "./text";
import { unitsToTimeMs } from "@/shared/utils";
import { wrapResizeWithAnchorPosition } from "./video";
import { defaultColor } from "./helper";
import { IDisplay, ITrim } from "@/shared/types";

export interface AudioProps
  extends Pick<RectProps, "width" | "height" | "top" | "left"> {
  id: string;
  tScale: number;
  display: IDisplay;
  trim: ITrim;
  duration: number;
  src: string;
}

export class AudioObject extends Rect {
  id: number;
  itemType: string = "audio";
  isSelected: boolean = false;
  trim?: any;
  src?: string;
  tScale?: number;
  display?: any;

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
  };

  static type = "Audio";

  constructor(options: any) {
    super({
      ...AudioObject.getDefaults(),
      ...options,
    });
    this.id = options.id;
    this.tScale = options.tScale;
    this.display = options.display;
    this.trim = options.trim;
    this.src = options.src;
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...AudioObject.ownDefaults,
    };
  }

  static createControls() {
    return { controls: createAudioControls() };
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
        AudioObject.ownDefaults.rx
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = defaultColor;
      ctx.stroke();
      ctx.restore();
    }
  }
}

classRegistry.setClass(AudioObject, "Audio");

export const createAudioControls = () => ({
  mr: new Control({
    x: 0.5,
    y: 0,
    render: renderControl,
    actionHandler: resizeActionHandler,
    cursorStyleHandler: controlsUtils.scaleSkewCursorStyleHandler,
    actionName: "resizing",
  }),
  ml: new Control({
    x: -0.5,
    y: 0,
    render: renderControl,
    actionHandler: resizeActionHandler,
    cursorStyleHandler: controlsUtils.scaleSkewCursorStyleHandler,
    actionName: "resizing",
  }),
});

const { wrapWithFireEvent, getLocalPoint } = controlsUtils;

const handleResize = (
  event: any,
  transform: any,
  pointerX: number,
  pointerY: number
) => {
  const localPoint = getLocalPoint(
    transform,
    transform.originX,
    transform.originY,
    pointerX,
    pointerY
  );

  if (
    getOffset(transform.originX) === getOffset("center") ||
    (getOffset(transform.originX) === getOffset("right") && localPoint.x < 0) ||
    (getOffset(transform.originX) === getOffset("left") && localPoint.x > 0)
  ) {
    const { target } = transform;
    const strokeWidth =
      target.strokeWidth / (target.strokeUniform ? target.scaleX : 1);
    const scalingFactor = isScalingFromCenter(transform) ? 2 : 1;
    const originalWidth = target.width;
    const newWidth = Math.ceil(
      Math.abs((localPoint.x * scalingFactor) / target.scaleX) - strokeWidth
    );

    if (transform.corner === "mr") {
      const trimEnd = target.trim.to;
      const widthChange = newWidth - originalWidth;
      const timeChange = unitsToTimeMs(widthChange, target.tScale);
      const newTrimEnd = trimEnd + timeChange;

      if (newTrimEnd > target.duration) return false;

      target.set("width", Math.max(newWidth, 0));
      target.trim.to = newTrimEnd;
    } else {
      if (target.left < 0) return false;

      const remainingWidth = originalWidth - newWidth;

      if (target.left + remainingWidth < 0) {
        target.set("width", target.width + target.left);
        return true;
      }

      const widthChange = newWidth - originalWidth;
      const trimStart = target.trim.from;
      const timeChange = unitsToTimeMs(widthChange, target.tScale);
      const newTrimStart = trimStart - timeChange;

      if (newTrimStart < 0) return false;

      target.set("width", Math.max(newWidth, 0));
      target.trim.from = newTrimStart;
    }

    return originalWidth !== target.width;
  }
  return false;
};

function isScalingFromCenter(transform: any) {
  return (
    getOffset(transform.originX) === getOffset("center") &&
    getOffset(transform.originY) === getOffset("center")
  );
}

const resizeActionHandler = wrapWithFireEvent(
  "resizing",
  wrapResizeWithAnchorPosition(handleResize)
);
