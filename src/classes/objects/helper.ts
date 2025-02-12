import { IMetadata } from "@/shared/types";
import { classRegistry, Group, Rect } from "fabric";

type GuideConfig = {
  top: number;
  guideHeight: number;
  bottom: number;
};

type GuideGroupOptions = {
  width: number;
  id?: string;
  tScale?: number;

  metadata: Partial<IMetadata>;
  kind: "top" | "center" | "bottom";
  rectTopFill?: string;
  rectBottomFill?: string;
  rectMiddleFill?: string;
};

const guideConfiguration: Record<string, GuideConfig> = {
  top: { top: 35, guideHeight: 2, bottom: 3 },
  center: { top: 3, guideHeight: 2, bottom: 3 },
  bottom: { top: 3, guideHeight: 2, bottom: 35 },
};

export const defaultColor = "rgba(0, 216, 214, 1.0)";

const createRect = (top: number, width: number, height: number) =>
  new Rect({
    top,
    left: 0,
    strokeWidth: 0,
    fill: "transparent",
    selectable: true,
    height,
    width,
  });

class GuideGroup extends Group {
  static type = "Helper";
  static defaultSettings = {
    selectable: false,
    evented: false,
  };
  static ownDefaults = { ...GuideGroup.defaultSettings };

  guide: Rect;
  topGuide: Rect;
  bottomGuide: Rect;
  id?: string;
  metadata: Record<string, any> = {};
  tScale?: number;
  kind: string;

  constructor(options: GuideGroupOptions) {
    const config = guideConfiguration[options.kind];

    // Создание частей направляющей
    const topGuide = createRect(0, options.width, config.top);
    const guide = createRect(config.top, options.width, config.guideHeight);
    const bottomGuide = createRect(
      config.top + config.guideHeight,
      options.width,
      config.bottom
    );

    super([topGuide, guide, bottomGuide], {
      ...GuideGroup.defaultSettings,
      ...options,
    });

    this.topGuide = topGuide;
    this.guide = guide;
    this.bottomGuide = bottomGuide;
    this.id = options.id;
    this.metadata = options.metadata ?? {};
    this.tScale = options.tScale;
    this.kind = options.kind;
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      ...GuideGroup.defaultSettings,
    };
  }

  updateCoords(width: number) {
    this.scaleToWidth(width);
    this.set("scaleY", 1);
  }

  setSelected(isSelected: boolean) {
    this.guide.set("fill", isSelected ? defaultColor : "transparent");
  }
}

export const HelperObject = GuideGroup;
classRegistry.setClass(HelperObject, "Helper");
