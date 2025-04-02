import { EventBusData } from "@/classes/timeline/events/event-bus/types";
import { StateManager } from "..";
import { ITrack, TrackSettings } from "@/shared";
export declare function handleActiveItemsStateEvents(this: StateManager, obj: EventBusData): void;
export declare function handleSceneStateEvents(this: any, event: EventBusData): Promise<void>;
export declare function handleEditObject(this: any, event: EventBusData): void;
export declare function handleAddRemoveStateEvents(this: any, event: EventBusData): Promise<void>;
export declare const trackSettingsDetailsMap: Record<string, any>;
export declare const updateTrackSettings: (tracks: ITrack[], tracksSettings: Record<string, TrackSettings>) => any;
//# sourceMappingURL=crud.d.ts.map