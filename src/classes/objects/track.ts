import { classRegistry, Rect } from "fabric";
import type { IMetadata, ItemType } from "@/shared/types/timeline";

export type TrackItemProps = {
  id: number;
  top: number;
  left: number;
  tScale: number;
  accepts: ItemType[];
  items: string[];
  metadata?: Partial<IMetadata>;
} & Pick<Rect, "top" | "left" | "fill" | "width" | "height">;

export class TrackObject extends Rect {
  static ownDefaults: Partial<Rect> = {
    selectable: false,
    evented: false,
    strokeWidth: 0,
    stroke: "transparent",
  };

  static type = "Track";

  id: number;

  accepts: ItemType[];
  metadata?: Partial<IMetadata>;
  items: string[];

  borderColor = "transparent";
  stroke = "transparent";
  strokeWidth = 0;

  constructor(props: TrackItemProps) {
    super(props);
    Object.assign(this, TrackObject.ownDefaults);
    this.id = props.id;
    this.accepts = props.accepts || ["audio", "video", "image", "text"];
    this.items = props.items || [];
    this.metadata = props.metadata;
  }

  static getDefaults(): Record<string, any> {
    return { ...super.getDefaults(), ...TrackObject.ownDefaults };
  }

  updateCoords(size: number): void {
    this.width = size;
  }
}

classRegistry.setClass(TrackObject, "Track");
