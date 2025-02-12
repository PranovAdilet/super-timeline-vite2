import { Timeline } from "@/classes/timeline/timeline";
import type { PlayerRef } from "@remotion/player";
import { create } from "zustand";
import {
  ITimelineScaleState,
  ITimelineScrollState,
  ITimelineStore,
} from "../types";

export const useStore = create<ITimelineStore>((set) => ({
  timeline: null,
  size: {
    width: 1080,
    height: 1920,
  },
  duration: 5000,
  fps: 30,
  scale: {
    // 1x distance (second 0 to second 5, 5 segments).
    index: 7,
    unit: 300,
    zoom: 1 / 300,
    segments: 5,
  },
  scroll: {
    left: 0,
    top: 0,
  },
  playerRef: null,

  activeIds: [],
  targetIds: [],
  tracks: [],
  trackItemIds: [],
  transitionIds: [],
  transitionsMap: {},
  trackItemDetailsMap: {},
  trackItemsMap: {},

  setTimeline: (timeline: Timeline) => {
    set(() => ({
      timeline: timeline,
    }));
  },
  setScale: (scale: ITimelineScaleState) => {
    set(() => ({
      scale: scale,
    }));
  },
  setScroll: (scroll: ITimelineScrollState) => {
    set(() => ({
      scroll: scroll,
    }));
  },
  setState: async (state) => {
    set({ ...state });
  },
  setPlayerRef: (playerRef: React.RefObject<PlayerRef> | null) => {
    set({ playerRef });
  },
}));

export default useStore;
