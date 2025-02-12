import {
  Placeholder,
  PreviewTrackItem,
  TrackObject,
  Transition,
  TransitionGuide,
} from "@/classes/objects";
import { Canvas, FabricObject } from "fabric";

interface MovingState {
  // canvas: Canvas | null;
  canvas: any;
  enableGuideRedraw: boolean;
  isPointerOverHelperTrack: boolean;
  draggingOverTrack: TrackObject | null | undefined;
  placeholderMovingObjects: Placeholder[];
  primaryMovingObjects: FabricObject[];
  secondaryMovingObjects: FabricObject[];
  objectInitialPositions: Record<
    string,
    {
      top: number;
      left: number;
    }
  >;
  originTrack: TrackObject | Record<string, any>;
  trackToItemsMap: Record<string, FabricObject[]>;
  activeTrackToItemsMap: Record<string, FabricObject[]>;
  trackTopToIdMap: Record<number, string>;
  trackTops: number[];
  activeObjects: FabricObject[];
  primaryTracks: Record<
    string,
    {
      objects: FabricObject[];
      index: number;
    }
  >;
  secondaryTracks: Record<
    string,
    {
      objects: FabricObject[];
      index: number;
    }
  >;
}

export const movingState: MovingState = {
  canvas: null,
  enableGuideRedraw: true,
  isPointerOverHelperTrack: false,

  draggingOverTrack: null,

  primaryMovingObjects: [],
  secondaryMovingObjects: [],
  placeholderMovingObjects: [],

  objectInitialPositions: {},
  originTrack: {},
  trackToItemsMap: {},
  activeTrackToItemsMap: {},
  trackTopToIdMap: {},
  trackTops: [],
  activeObjects: [],
  primaryTracks: {},
  secondaryTracks: {},
};

type TransitionType = {
  // guide: null | TransitionGuide | PreviewTrackItem;
  guide: any;
  // object: Transition | null;
  object: any;
  // objects: Transition[];
  objects: any;
};

export const transitionStore: TransitionType = {
  guide: null,
  object: null,

  objects: [],
};

export const getMovingState = (): MovingState => movingState;

/**
 * Обновляет состояние, объединяя его с переданными данными.
 * @param newState - Новый объект состояния для слияния.
 */
export const updateMovingState = (newState: Partial<MovingState>): void => {
  Object.assign(movingState, newState);
};

//let ys = {}, эту на initialPositions
// Jt = {}, currentTrack
// xs = {}, trackItemsMap
// Qs = {}, groupedTrackItems
// Ae = {}, trackTopMap
// ke = [], trackTopPositions
// De = [], sceneObjects
// Pe = {}, primaryOverlapMap
// Ie = {}; secondaryOverlapMap
// dt= null; currentHoveredObject

// let Ye = [], эту на objectLayer ну или на то что будет понятнее в контекстке
//     le = [], эту переменную поменяй на primaryLayerObjects
//     Cr = []; эту на secondaryLayerObjects

// dt = null, currentHoveredObject
// rr = !0, isAlignmentActive
// xi = !1, isObjectSelected
// Vt = null; selectedGuideObject
