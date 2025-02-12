import { ItemType } from "@/shared/types/timeline";
import type { FabricObject, RectProps } from "fabric";
import { classRegistry, Rect } from "fabric";

type PlaceholderProps = {
  id: string;
  for: ItemType;
} & Pick<RectProps, "width" | "height" | "top" | "left">;

export class Placeholder extends Rect {
  static type = "Placeholder";

  guideItemId?: string;
  distXToActCenter?: number;
  trackItemType?: ItemType;
  defaultPos?: { x: number; y: number };
  draggedObject: FabricObject | null = null;

  for: ItemType;
  id: string;

  static ownDefaults = {
    rx: 6,
    ry: 6,
    objectCaching: false,
    borderColor: "transparent",
    strokeWidth: 0,
    fill: "rgba(255, 211, 42, 0.1)",
    stroke: "rgba(255, 211, 42, 1.0)",
    selectable: false,
    borderOpacityWhenMoving: 1,
    hoverCursor: "default",
    strokeDashArray: [5, 1],
    evented: false,
  };

  constructor(props: PlaceholderProps) {
    super(props);
    this.id = props.id;
    this.for = props.for;
    Object.assign(this, Placeholder.ownDefaults);
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...Placeholder.ownDefaults,
    };
  }

  _render(ctx: CanvasRenderingContext2D): void {
    super._render(ctx);
    this.updateSelected(ctx);
  }

  updateSelected(ctx: CanvasRenderingContext2D): void {
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
    ctx.strokeStyle = "rgba(0, 216, 214,1.0)";
    ctx.stroke();
    ctx.restore();
  }
}

classRegistry.setClass(Placeholder, "Placeholder");

export default Placeholder;
