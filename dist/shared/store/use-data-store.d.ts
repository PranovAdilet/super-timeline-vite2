import { IAudio, IImage, IVideo } from "../types";
type IDataState = {
    images: Partial<IImage>[] | null;
    videos: Partial<IVideo>[] | null;
    audios: Partial<IAudio>[] | null;
    setState: (state: Partial<IDataState>) => void;
};
export declare const useDataStore: import("zustand").UseBoundStore<import("zustand").StoreApi<IDataState>>;
export {};
//# sourceMappingURL=use-data-store.d.ts.map