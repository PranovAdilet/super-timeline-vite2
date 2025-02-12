import { Rect, RectProps } from "fabric";

interface PreviewTrackItemProps
  extends Pick<RectProps, "width" | "height" | "top" | "left"> {
  id: string;
  name: string;
}

export class PreviewTrackItem extends Rect {
  static type = "PreviewTrackItem";
  static ownDefaults = {
    objectCaching: false,
    borderColor: "transparent",
    stroke: "transparent",
    strokeWidth: 0,
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    rx: 4,
    ry: 4,
  };

  duration: number = 0;
  fromId: string = "";
  toId: string = "";
  isSelected: boolean = false;
  name: string;
  durationString: string;
  id: string;

  constructor(props: PreviewTrackItemProps) {
    super(props);
    Object.assign(this, PreviewTrackItem.ownDefaults);

    this.id = props.id;
    this.name = props.name || "item";
    this.durationString = "00:05";
    this.fill = "#27272a";
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...PreviewTrackItem.ownDefaults,
    };
  }

  _render(ctx: CanvasRenderingContext2D) {
    ctx.save();

    super._render(ctx);

    ctx.beginPath();
    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.clip();

    this.drawTextIdentity(ctx);

    ctx.restore();
  }

  drawTextIdentity(ctx: CanvasRenderingContext2D) {
    const fontSize = 12;
    const fontWeight = 600;
    const padding = 8;
    const spacing = 4;
    const rectHeight = 20;
    const rectRadius = 4;

    ctx.font = `${fontWeight} ${fontSize}px 'Geist variable'`;
    ctx.textAlign = "left";

    // Измерение ширины текста
    const nameWidth = ctx.measureText(this.name).width;
    const durationWidth = ctx.measureText(this.durationString).width;

    // Координаты для текстовых блоков
    const rectY = -this.height / 2 + 4;
    const nameX = -this.width / 2;
    const durationX = nameX + nameWidth + padding * 2 + spacing;

    const nameRectWidth = nameWidth + padding * 2;
    this.drawRoundedRect(
      ctx,
      nameX,
      rectY,
      nameRectWidth,
      rectHeight,
      rectRadius
    );
    ctx.fillStyle = "#f4f4f5";
    ctx.fillText(this.name, nameX + padding, rectY + fontSize + 2);

    const durationRectWidth = durationWidth + padding * 2;
    this.drawRoundedRect(
      ctx,
      durationX,
      rectY,
      durationRectWidth,
      rectHeight,
      rectRadius
    );
    ctx.fillStyle = "#f4f4f5";
    ctx.fillText(
      this.durationString,
      durationX + padding,
      rectY + fontSize + 2
    );
  }

  private drawRoundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(x, y, width, height, radius);
      ctx.fill();
    } else {
      // Альтернатива для старых браузеров
      ctx.fillRect(x, y, width, height);
    }
  }
}
