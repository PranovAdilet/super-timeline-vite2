import { Control, Rect, classRegistry, controlsUtils } from "fabric";
import { getOffset, renderControl } from "./text";
import { IDisplay, IMetadata, ITrim } from "@/shared/types";
import { defaultColor } from "./helper";

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

const handleResizeLogic = (
  eventData: any,
  transform: any,
  pointerX: any,
  pointerY: any
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

    return target.width !== target.width;
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
  wrapResizeWithAnchorPosition(handleResizeLogic)
);
