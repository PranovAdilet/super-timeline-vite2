import { Difference } from "microdiff";
import { IKindHistory } from "@/shared/types";
export declare class StateManager {
    stateSubject: any;
    stateHistorySubject: any;
    prevState: any;
    undos: {
        undos: Difference[];
        type: IKindHistory;
    }[];
    redos: {
        undos: Difference[];
        type: IKindHistory;
    }[];
    listener: any;
    constructor(initialState?: any);
    initListeners(): void;
    destroyListeners(): void;
    purge(): void;
    updateHistory(newState: any, actionType: any): void;
    getStateHistory(): any;
    subscribeHistory(callback: any): any;
    getState(): any;
    subscribe(callback: any): any;
    updateState(newPartialState: any, options?: any): void;
    subscribeToSize(callback: any): any;
    subscribeToScale(callback: any): any;
    subscribeToUpdateTrackItem(callback: any): any;
    subscribeToUpdateItemDetails(callback: any): any;
    subscribeToDuration(callback: any): any;
    subscribeToHistory(callback: any): any;
    subscribeToAddOrRemoveItems(callback: any): any;
    subscribeToActiveIds(callback: any): any;
    subscribeToTracks(callback: any): any;
    undo(): void;
    redo(): void;
    applyPatch(r: any, n: any): any;
}
export declare function setupHistoryListeners(state: any): () => void;
//# sourceMappingURL=index.d.ts.map