import { classRegistry, Control, controlsUtils, Rect, RectProps } from "fabric";
import { getOffset, renderControl } from "./text";
import { unitsToTimeMs } from "@/shared/utils";

interface TransitionProps
  extends Pick<RectProps, "width" | "height" | "top" | "left"> {
  id: string;
  tScale: number;
  duration: number;
  fromId: string;
  toId: string;
  kind: string;
  strokeDashArray?: number[];
}

export class Transition extends Rect {
  static type = "Transition";
  id: string;
  duration: any;
  fromId?: string;
  toId?: string;

  static ownDefaults = {
    objectCaching: false,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 1.5,
    fill: "rgba(0, 0, 0, 0.5)",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    lockMovementX: true,
    lockMovementY: true,
    duration: 1500,
    rx: 8,
    ry: 8,
  };

  isSelected: boolean = false;

  constructor(options: TransitionProps) {
    super(options);

    this.id = options.id;
    this.fromId = options.fromId;
    this.toId = options.toId;

    Object.assign(this, {
      duration: options.duration,
      fromId: options.fromId,
      toId: options.toId,
      kind: options.kind,
      tScale: options.tScale,
      strokeDashArray: options.strokeDashArray || [],
      isSelected: false,
      centeredScaling: true,
      strokeWidth: 0,
    });

    Object.assign(this, Transition.ownDefaults);
  }

  static createControls() {
    return {
      controls: createTransitionControls(),
    };
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Transition.ownDefaults,
    };
  }

  updateCoords() {}

  _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);
    this.updateSelected(ctx);
  }

  setSelected(isSelected: boolean) {
    this.isSelected = isSelected;
    this.set({ dirty: true });
  }

  updateSelected(ctx: CanvasRenderingContext2D) {
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
    if (this.strokeDashArray) {
      ctx.setLineDash(this.strokeDashArray);
    }
    ctx.strokeStyle = this.isSelected
      ? "rgba(255, 255, 255,1.0)"
      : "rgba(255, 255, 255,0.15)";
    ctx.stroke();
    ctx.restore();
  }
}

classRegistry.setClass(Transition, "Transition");

const createTransitionControls = () => ({
  mr: new Control({
    x: 0.5,
    y: 0,
    actionHandler: resizeActionHandler,
    cursorStyleHandler: controlsUtils.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: renderControl,
  }),
  ml: new Control({
    x: -0.5,
    y: 0,
    actionHandler: resizeActionHandler,
    cursorStyleHandler: controlsUtils.scaleSkewCursorStyleHandler,
    actionName: "resizing",
    render: renderControl,
  }),
});

classRegistry.setClass(Transition, "Transition");

const { wrapWithFireEvent, getLocalPoint } = controlsUtils;

const ORIGIN_CENTER = "center";
const ORIGIN_LEFT = "left";
const ORIGIN_RIGHT = "right";

function wrapResizeHandler(resizeLogic: any) {
  return (eventData: any, transform: any, pointerX: any, pointerY: any) => {
    const { target, originX, originY } = transform;
    const relativeCenter = target.getRelativeCenterPoint();
    const anchorPoint = target.translateToOriginPoint(
      relativeCenter,
      originX,
      originY
    );

    const result = resizeLogic(eventData, transform, pointerX, pointerY);

    target.setPositionByOrigin(anchorPoint, originX, originY);
    return result;
  };
}

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
    getOffset(transform.originX) === getOffset(ORIGIN_CENTER) ||
    (getOffset(transform.originX) === getOffset(ORIGIN_RIGHT) &&
      localPoint.x < 0) ||
    (getOffset(transform.originX) === getOffset(ORIGIN_LEFT) &&
      localPoint.x > 0)
  ) {
    const { target } = transform;

    const strokeWidth =
      target.strokeWidth / (target.strokeUniform ? target.scaleX : 1);
    const scalingFactor = isScalingFromCenter(transform) ? 2 : 1;
    const originalWidth = target.width;
    const newWidth = Math.ceil(
      Math.abs((localPoint.x * scalingFactor) / target.scaleX) - strokeWidth
    );

    const newDuration = unitsToTimeMs(newWidth, target.tScale);

    if (newDuration >= 1500 || newDuration < 500) {
      return false;
    }

    target.set("width", Math.max(newWidth, 0));
    target.set("duration", newDuration);

    target.setCoords();
    if (target.canvas) {
      target.canvas.renderAll();
    }

    return originalWidth !== target.width;
  }

  return false;
};

function isScalingFromCenter(transform: any) {
  return (
    getOffset(transform.originX) === getOffset(ORIGIN_CENTER) &&
    getOffset(transform.originY) === getOffset(ORIGIN_CENTER)
  );
}

const resizeActionHandler = wrapWithFireEvent(
  "resizing",
  wrapResizeHandler(handleResize)
);
