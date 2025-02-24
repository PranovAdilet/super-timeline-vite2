import { Control, Rect, classRegistry, controlsUtils } from "fabric";
import { getOffset, renderControl } from "./text";
import { IDisplay, IMetadata, ITrim } from "@/shared/types";
import { defaultColor } from "./helper";
import { unitsToTimeMs } from "@/shared";
import { isScalingFromCenter } from "./audio";

export interface VideoProps {
  id: string;
  width: number;
  height?: number;
  tScale: number;
  fill: string;
  resourceId: string;
  top?: number;
  left?: number;
  display: IDisplay;
  trim: ITrim;
  metadata?: Partial<IMetadata>;
}

export class VideoObject extends Rect {
  id: string;
  tScale?: number;
  isSelected: boolean = false;
  display?: any;
  trim?: any;

  static type = "Video";

  static defaultProps = {
    objectCaching: false,
    rx: 8,
    ry: 8,
    fill: "#27272a",
  };

  constructor(options: VideoProps) {
    super(Object.assign({}, VideoObject.defaultProps, options));
    this.id = options.id;
    this.tScale = options.tScale;
    this.display = options.display;
    this.trim = options.trim;
  }

  static createControls() {
    return { controls: createMediaControls() };
  }

  _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);
    this.updateSelected(ctx);
  }

  setSelected(isSelected: boolean) {
    this.isSelected = isSelected;
    this.set({ dirty: true });
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
        this.rx
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = defaultColor;
      ctx.stroke();
      ctx.restore();
    }
  }
}

classRegistry.setClass(VideoObject, "Video");

export const createMediaControls = () => ({
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
  eventData: any,
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

    if (transform.corner === "ml") {
      const widthChange = newWidth - originalWidth;
      const timeChange = unitsToTimeMs(widthChange, target.tScale);

      const trimStart = target.trim.from;
      const newTrimStart = trimStart - timeChange;

      if (newTrimStart < 0) return false;
      const u = transform.width - newWidth;
      if (transform.left + u < 0)
        return transform.set("width", transform.width + transform.left), !0;
    }

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

export function wrapResizeWithAnchorPosition(updateLogic: any) {
  return (eventData: any, transform: any, pointerX: any, pointerY: any) => {
    const { target, originX, originY } = transform;
    const relativeCenter = target.getRelativeCenterPoint();
    const anchorPoint = target.translateToOriginPoint(
      relativeCenter,
      originX,
      originY
    );
    const result = updateLogic(eventData, transform, pointerX, pointerY);

    target.setPositionByOrigin(anchorPoint, originX, originY);
    return result;
  };
}

const resizeActionHandler = wrapWithFireEvent(
  "resizing",
  wrapResizeWithAnchorPosition(handleResize)
);
