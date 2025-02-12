import { Control, controlsUtils, Rect, RectProps, util } from "fabric";

import { handleResize } from "./text";
import { timeMsToUnits } from "@/shared/utils";

interface TransitionGuideProps
  extends Pick<RectProps, "width" | "height" | "top" | "left"> {
  id: string;
}

export class TransitionGuide extends Rect {
  static type = "TransitionGuide";
  static ownDefaults = {
    objectCaching: false,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 1.5,
    fill: "rgba(0,0,0,0.85)",
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    lockMovementX: true,
    lockMovementY: true,
    duration: 1500,
    rx: 8,
    ry: 8,
  };
  tScale?: number;
  duration: number = 0;
  fromId?: string;
  toId?: string;
  itemType: string = "none";
  isSelected: boolean = false;
  id: string;

  constructor(props: TransitionGuideProps) {
    super(props);
    Object.assign(this, TransitionGuide.ownDefaults);
    this.id = props.id;
  }

  static createControls() {
    return {
      controls: createControls(),
    };
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...TransitionGuide.ownDefaults,
    };
  }
  updateCoords() {
    const canvas = this.canvas;
    if (!canvas) return;

    const fromObject = canvas
      .getObjects()
      .find((obj: any) => obj.id === this.fromId);
    if (!fromObject) return;

    const width = timeMsToUnits(this.duration, this.tScale);
    const left = fromObject.left + fromObject.width - width / 2;

    this.set({
      width,
      left,
    });
  }

  _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);
    this.drawTextIdentity(ctx);
    this.updateSelected(ctx);
  }

  drawTextIdentity(ctx: CanvasRenderingContext2D) {
    const arrowPath = new Path2D(
      "M3 5.30359C3 3.93159 4.659 3.24359 5.629 4.21359L11.997 10.5826L10.583 11.9966L5 6.41359V17.5856L10.586 11.9996L10.583 11.9966L11.997 10.5826L12 10.5856L18.371 4.21459C19.341 3.24459 21 3.93159 21 5.30359V18.6956C21 20.0676 19.341 20.7556 18.371 19.7856L12 13.5L13.414 11.9996L19 17.5866V6.41359L13.414 11.9996L13.421 12.0056L12.006 13.4206L12 13.4136L5.629 19.7846C4.659 20.7546 3 20.0676 3 18.6956V5.30359Z"
    );
    ctx.save();
    ctx.translate(-12, -12);
    ctx.fillStyle = "#ffffff";
    ctx.fill(arrowPath);
    ctx.restore();
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
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255,1.0)";
      ctx.stroke();
      ctx.restore();
    }
  }
}

export function createControls() {
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

/**
 * Рендерит элемент управления на холсте.
 * @param ctx - Контекст рисования.
 * @param x - Позиция по оси X.
 * @param y - Позиция по оси Y.
 */
function renderControl(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  styleOverride: any,
  fabricObject: any
) {
  const lineLength = 6;
  const whiteLineWidth = 6;
  const blackLineWidth = 4;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(util.degreesToRadians(90 + fabricObject.angle));

  // Рисуем белую линию
  ctx.lineWidth = whiteLineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(-lineLength, 0);
  ctx.lineTo(lineLength, 0);
  ctx.stroke();

  // Рисуем черную линию поверх белой
  ctx.lineWidth = blackLineWidth;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(-lineLength, 0);
  ctx.lineTo(lineLength, 0);
  ctx.stroke();

  ctx.restore();
}
