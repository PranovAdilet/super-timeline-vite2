import { IAudio, IImage, IVideo } from "../types";
import { create } from "zustand";

type IDataState = {
  images: Partial<IImage>[] | null;
  videos: Partial<IVideo>[] | null;
  audios: Partial<IAudio>[] | null;
  setState: (state: Partial<IDataState>) => void;
};

export const useDataStore = create<IDataState>((set) => ({
  images: null,
  audios: null,
  videos: null,
  setState: (state) => {
    set({ ...state });
  },
}));
