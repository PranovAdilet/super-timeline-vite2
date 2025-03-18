import { Canvas, CanvasOptions, classRegistry, FabricObject } from "fabric";
import { timeMsToUnits } from "@/shared/utils";
import {
  LAYER_SELECTION,
  STATE_CHANGED,
  TIMELINE_BOUNDING_CHANGED,
} from "./events/constants-events";
import eventBus from "./events/event-bus";
import {
  CanvasMixin,
  TrackItemsMixin,
  TracksMixin,
  TransitionsMixin,
} from "@/classes/mixins";

import { applyMixins, calculateDuration, mergeSizes } from "./utils";
import {
  Bounding,
  CanvasSpacing,
  ITimelineScaleState,
  ITimelineStore,
  ITrack,
  ITrackItem,
  ITransition,
  IUpdateStateOptions,
} from "@/shared/types";
import {
  addEventListeners,
  removeEventListeners,
} from "./events/event-listeners";
import { cloneDeep } from "lodash-es";

interface TimelineOptions extends CanvasOptions {
  bounding?: {
    width: number;
    height: number;
  };
  onScroll?: OnScroll;
  tScale?: number;
  store: ITimelineStore;
  acceptsMap?: Record<string, string[]>;
  sizesMap?: Record<string, number>;
  spacing?: CanvasSpacing;
  state: any;
  scale: ITimelineScaleState;
}

type OnScroll = (v: { scrollTop: number; scrollLeft: number }) => void;

const ACCEPTS_MAP: Record<string, string[]> = {
  video: ["*"],
  image: ["*"],
  audio: ["*"],
  text: ["*"],
};

const ITEMS_MAP = ["video", "image", "audio", "text"];

export interface Timeline
  extends Canvas,
    CanvasMixin,
    TrackItemsMixin,
    TracksMixin,
    TransitionsMixin {}

export class Timeline extends Canvas {
  acceptsMap?: Record<string, string[]>;
  tracks: ITrack[] = [];
  trackItemsMap: Record<string, ITrackItem> = {};
  trackItemIds: string[] = [];
  transitionIds: string[] = [];
  transitionsMap: Record<string, ITransition> = {};
  trackItemDetailsMap: Record<string, ITrackItem> = {};
  bounding: Bounding;
  onScroll?: OnScroll;
  tScale: number;
  store?: ITimelineStore;
  state: any;
  activeIds: string[] = [];
  spacing: CanvasSpacing;
  scale?: ITimelineScaleState;
  sizesMap?: Record<string, number>;
  duration: any;

  setupFabricDefaults() {
    FabricObject.ownDefaults.borderColor = "transparent";
    FabricObject.ownDefaults.cornerColor = "white";
    FabricObject.ownDefaults.cornerStrokeColor = "transparent";
    FabricObject.ownDefaults.strokeWidth = 0;
    FabricObject.ownDefaults.borderOpacityWhenMoving = 1;
    FabricObject.ownDefaults.borderScaleFactor = 1;
    FabricObject.ownDefaults.cornerSize = 8;
    FabricObject.ownDefaults.cornerStyle = "rect";
    FabricObject.ownDefaults.centeredScaling = false;
    FabricObject.ownDefaults.centeredRotation = true;
    FabricObject.ownDefaults.transparentCorners = false;
  }

  constructor(canvasEl: HTMLCanvasElement, options: Partial<TimelineOptions>) {
    super(canvasEl, options);

    this.bounding = options.bounding || {
      width: options.width || 0,
      height: options.height || 0,
    };
    this.spacing = {
      left: 16,
      right: 80,
      ...options.spacing,
    };
    const viewportTransform = this.viewportTransform;
    viewportTransform[4] = this.spacing.left;

    this.tScale = options.tScale || 1 / 300;
    this.store = options.store;
    this.state = options.state;
    this.scale = options.scale;
    this.onScroll = options.onScroll;
    this.acceptsMap = this.createAcceptsItemMap(options.acceptsMap);
    this.sizesMap = mergeSizes(options.sizesMap);

    this.setupFabricDefaults();
    this.initEventListeners();
  }

  createAcceptsItemMap(map = ACCEPTS_MAP): Record<string, string[]> {
    const result: Record<string, string[]> = {};

    Object.keys(map).forEach((key) => {
      const values = map[key as keyof typeof map];
      result[key] = values.includes("*") ? ITEMS_MAP : values;
    });

    return result;
  }

  // setActiveIds(e: any) {
  //   this.activeIds = e;
  //   eventBus.dispatch(LAYER_SELECTION, {
  //     payload: {
  //       activeIds: this.activeIds,
  //     },
  //   });
  // }
  setActiveIds(activeIds: string[]) {
    this.activeIds = activeIds;

    const hasMatchingTransition = this.getObjects("Transition").some(
      (transition: any) => activeIds.includes(transition.id)
    );

    if (!hasMatchingTransition) {
      this.state?.updateState({
        activeIds: cloneDeep(this.activeIds),
      });
      eventBus.dispatch(LAYER_SELECTION, {
        payload: {
          activeIds: this.activeIds,
        },
      });
    }
  }

  purge() {
    removeEventListeners(this);
    this.dispose();
  }

  static registerItems(classes: Record<any, any>) {
    Object.keys(classes).forEach((s) => {
      classRegistry.setClass(classes[s], s);
    });
  }

  initEventListeners() {
    addEventListeners(this);
  }

  getUpdatedState() {
    const duration = calculateDuration(this.trackItemsMap);

    return {
      tracks: this.tracks,
      trackItemIds: this.trackItemIds,
      trackItemsMap: this.trackItemsMap,
      transitionIds: this.transitionIds,
      transitionsMap: this.transitionsMap,
      // tScale: this.tScale,
      scale: this.scale,
      duration,
    };
  }

  getState() {
    const duration = calculateDuration(this.trackItemsMap);
    return {
      tracks: this.tracks,
      trackItemIds: this.trackItemIds,
      trackItemsMap: this.trackItemsMap,
      transitionIds: this.transitionIds,
      transitionsMap: this.transitionsMap,
      trackItemDetailsMap: this.trackItemDetailsMap,
      // tScale: this.tScale,
      scale: this.scale,
      duration,
    };
  }

  notify(dataHistory = { updateHistory: false }) {
    const updatedState = this.getUpdatedState();
    this.state.updateState(updatedState, dataHistory);
  }

  updateState(dataHistory?: IUpdateStateOptions) {
    this.updateTracksState();
    this.updateTrackItemsState();

    this.requestRenderAll();
    this.calcBounding();
    this.updateTrackCoords();

    // const duration = calculateDuration(this.trackItemsMap);

    // eventBus.dispatch(STATE_CHANGED, {
    //   payload: {
    //     tracks: this.tracks,
    //     trackItemIds: this.trackItemIds,
    //     trackItemsMap: this.trackItemsMap,
    //     transitionIds: this.transitionIds,
    //     transitionsMap: this.transitionsMap,
    //     activeIds: this.activeIds,
    //     duration,
    //   },
    // });

    const updatedState = this.getUpdatedState();

    this.state.updateState(updatedState, dataHistory);
  }

  scrollTo({
    scrollLeft,
    scrollTop,
  }: {
    scrollLeft: number;
    scrollTop: number;
  }) {
    const transform = [...this.viewportTransform];
    let shouldUpdate = false;

    if (typeof scrollLeft == "number") {
      transform[4] = -scrollLeft + this.spacing.left;
      shouldUpdate = true;
    }

    if (typeof scrollTop == "number") {
      transform[5] = -scrollTop;
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      this.viewportTransform = transform as any;
      const activeObject = this.getActiveObject();
      if (activeObject) activeObject.setCoords();
      this.requestRenderAll();
    }
  }

  setBoundingBox(bounding: Bounding) {
    this.bounding = bounding;
  }

  calcBounding() {
    const bounding = this.getTrackItems().reduce(
      (acc, obj) => {
        const { left, top, width, height } = obj.getBoundingRect();
        return {
          left: Math.min(acc.left, left),
          top: Math.min(acc.top, top),
          width: Math.max(acc.width, left + width),
          height: Math.max(acc.height, top + height),
        };
      },
      { left: Infinity, top: Infinity, width: this.width, height: 0 }
    );

    this.bounding = bounding;
    eventBus.dispatch(TIMELINE_BOUNDING_CHANGED, {
      payload: { bounding },
    });
  }

  setScale(scale: ITimelineScaleState) {
    this.pauseEventListeners();
    this.tScale = scale.zoom;

    this.scale = scale;

    const state = this.getState();

    this.getObjects("Video", "Image", "Text", "Audio").forEach(
      (object: any) => {
        const trackItem = state.trackItemsMap[object.id];

        const { from, to } = trackItem.display;

        const newLeft = timeMsToUnits(from, this.tScale);
        const newWidth = timeMsToUnits(
          to - from,
          this.tScale,
          object.playbackRate
        );
        object.set({ left: newLeft, width: newWidth, tScale: scale.zoom });
        object.setCoords();
      }
    );

    this.requestRenderAll();
    this.calcBounding();
    this.updateTrackCoords();
    this.updateTransitions(false);

    this.resumeEventListeners();
    this.notify();
  }

  setViewportPos(viewportX: any, viewportY: any) {
    const viewportCoordinates = this.getViewportPos(viewportX, viewportY);
    const viewportTransform = this.viewportTransform;

    viewportTransform[4] = viewportCoordinates.x;
    viewportTransform[5] = viewportCoordinates.y;

    this.requestRenderAll();

    this.setActiveTrackItemCoords();

    const onScroll = this.onScroll;

    if (onScroll) {
      onScroll.call(this, {
        scrollTop: viewportCoordinates.y,
        scrollLeft: viewportCoordinates.x - this.spacing.left,
      });
    }
  }

  getViewportPos(x: number, y: number) {
    const rightPadding =
      this.bounding.width - 100 >= this.width ? this.spacing.right : 0;
    const minX = this.width - this.bounding.width - rightPadding;
    const maxX = this.spacing.left;
    const adjustedX = Math.max(minX, Math.min(x, maxX));

    if (this.bounding.height < this.height) return { x: adjustedX, y: 0 };

    const minY = this.height - this.bounding.height - 40;

    const adjustedY = Math.max(minY, Math.min(y, 0));

    return { x: adjustedX, y: adjustedY };
  }
}

applyMixins(Timeline, [
  CanvasMixin,
  TrackItemsMixin,
  TracksMixin,
  TransitionsMixin,
]);
