import { Timeline } from "@/classes";
import { PlayerRef } from "@remotion/player";
import type { Canvas } from "fabric";

export type ItemType =
  | "text"
  | "element"
  | "image"
  | "video"
  | "audio"
  | "helper";
export type IDisplay = {
  from: number;
  to: number;
};
export type ITrim = {
  from: number;
  to: number;
};
type ICommonDetails = {
  width?: number;
  height?: number;
  transform?: string;
  opacity?: number;
  border?: string;
  borderRadius?: string;
  boxShadow?: IBoxShadow;
  top?: number | string;
  left?: number | string;
};
export interface IBoxShadow {
  color: string;
  x: number;
  y: number;
  blur: number;
}

export type ZoomType = {
  type?: string | null;
  ease?: string | null;
  // type: "in" | "out" | null;
  // ease: "linear" | "ease-in" | "ease-out" | "ease-in-out" | null;
};

export type ITrackItem =
  | (ITrackItemBase & {
      type: "text";
    })
  | (ITrackItemBase & {
      type: "image";
    })
  | (ITrackItemBase & {
      type: "video";
    })
  | (ITrackItemBase & {
      type: "audio";
    })
  | (ITrackItemBase & {
      type: "helper";
    })
  | (ITrackItemBase & {
      type: "caption";
    })
  | (ITrackItemBase & {
      type: "template";
    });

export type ITransition = {};
export type ITrackItemBase = {
  id: string;
  name: string;
  type: ItemType;
  preview?: string;
  position?: IPosition | null;
  display: IDisplay;
  details: Record<string, any>;
  trim?: ITrim;
  metadata: Record<string, any>;
  isMain?: boolean;
  animation?: any;
};
export type IPosition = {
  top: number;
  left: number;
  transform: string;
};
export type ITextDetails = {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontUrl: string;
  color: string;
  align?: string;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: number;
  fontStyle: string;
  textDecoration: string;
  textAlign: string;
  wordSpacing: number;
  textShadow: string;
  backgroundColor: string;
  opacity: number;
  width: number;
  height: number;
  top: number | string;
  left: number | string;
  border: string;
  wordWrap: string;
  wordBreak: string;
  WebkitTextStrokeColor: string;
  WebkitTextStrokeWidth: string;
} & ICommonDetails;
type IImageDetails = {
  src: string;
} & ICommonDetails;
type IAudioDetails = {
  src: string;
  duration: number;
} & ICommonDetails;
export type IVideoDetails = {
  src: string;
  duration: number;
  frames?: number;
  background?: string;
  stream?: ReadableStream<Uint8Array>;
  blob?: Blob;
  width: number;
  height: number;
  volume?: number;
  text?: string;
  zoom?: ZoomType;
} & ICommonDetails;
export type ITimelineScaleState = {
  unit: number;
  zoom: number;
  segments: number;
  index: number;
};
export type ILayerBase = {
  id: string;
  name?: string;
  type: ItemType;
  preview?: string;
  position?: IPosition | null;
  details: Record<string, any>;
  metadata?: Record<string, any>;
  isMain?: boolean;
  animation?: any;
  trim?: {
    from: number;
    to: number;
  };
  display: {
    from: number;
    to: number;
  };
};
export type IAudio = {
  type: ItemType;
  details: {
    volume?: number;
    src: string;
    duration?: number;
    text?: string;
  };
} & ILayerBase;
export type IText = {
  type: ItemType;
  details: ITextDetails;
} & ILayerBase;
export type IItem = IAudio | IImage | IText | IVideo;
export type ITrackItemAndDetails = ITrackItem & IItem;
export type IImage = {
  type: "image";
  details: {
    src: string;
    width: number;
    height: number;
    background?: string;
    opacity?: number;
    transform?: string;
    border?: number | string;
    borderRadius?: number | string;
    boxShadow?: string;
    top?: number | string;
    left?: number | string;
    duration?: number;
    blur?: number;
    brightness?: number;
  };
} & ILayerBase;
export type IVideo = {
  type: "video";
  details: IVideoDetails;
  trim: {
    from: number;
    to: number;
  };
} & ILayerBase;
export type IMetadata = {
  resourceId: string;
  order: number;
};
export type ITrack = {
  id: string;
  type: ITrackType;
  items: string[];
  metadata?: Partial<IMetadata>;
  accepts?: ItemType[];
  index?: number;
};
type ITrackType = "main" | "text" | "image" | "video" | "audio" | "helper";
export type ITimelineStore = {
  duration: number;
  fps: number;
  scale: ITimelineScaleState;
  scroll: ITimelineScrollState;

  tracks: ITrack[];
  trackItemIds: string[];
  transitionIds: string[];
  transitionsMap: Record<string, ITransition>;
  trackItemsMap: Record<string, ITrackItem>;
  trackItemDetailsMap?: Record<string, any>;
  activeIds: string[];
  timeline: Timeline | null;
  setTimeline: (timeline: Timeline) => void;
  setScale: (scale: ITimelineScaleState) => void;
  setScroll: (scroll: ITimelineScrollState) => void;
  playerRef: React.RefObject<PlayerRef> | null;
  setPlayerRef: (playerRef: React.RefObject<PlayerRef> | null) => void;
  size: {
    width: number;
    height: number;
  };
  aspectRatio: number;

  setState: (state: any) => Promise<void>;
};
export type ITimelineScrollState = {
  /**
   * Timeline scroll state by X-axis.
   */
  left: number;
  /**
   * Timeline scroll state by Y-axis.
   */
  top: number;
};
export {};

export interface CanvasSpacing {
  left: number;
  right: number;
}

export type IKindHistory =
  | "add"
  | "remove"
  | "update"
  | "replace"
  | "update:details"
  | "layer:selection"
  | "undo"
  | "redo";
export interface IUpdateStateOptions {
  updateHistory?: boolean;
  kind?: IKindHistory;
}

export interface Bounding {
  width: number;
  height: number;
}
