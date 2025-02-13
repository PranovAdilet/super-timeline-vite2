import { Placeholder, TrackObject } from "@/classes/objects";
import { FabricObject } from "fabric";
interface MovingState {
    canvas: any;
    enableGuideRedraw: boolean;
    isPointerOverHelperTrack: boolean;
    draggingOverTrack: TrackObject | null | undefined;
    placeholderMovingObjects: Placeholder[];
    primaryMovingObjects: FabricObject[];
    secondaryMovingObjects: FabricObject[];
    objectInitialPositions: Record<string, {
        top: number;
        left: number;
    }>;
    originTrack: TrackObject | Record<string, any>;
    trackToItemsMap: Record<string, FabricObject[]>;
    activeTrackToItemsMap: Record<string, FabricObject[]>;
    trackTopToIdMap: Record<number, string>;
    trackTops: number[];
    activeObjects: FabricObject[];
    primaryTracks: Record<string, {
        objects: FabricObject[];
        index: number;
    }>;
    secondaryTracks: Record<string, {
        objects: FabricObject[];
        index: number;
    }>;
}
export declare const movingState: MovingState;
type TransitionType = {
    guide: any;
    object: any;
    objects: any;
};
export declare const transitionStore: TransitionType;
export declare const getMovingState: () => MovingState;
/**
 * Обновляет состояние, объединяя его с переданными данными.
 * @param newState - Новый объект состояния для слияния.
 */
export declare const updateMovingState: (newState: Partial<MovingState>) => void;
export {};
//# sourceMappingURL=store.d.ts.map