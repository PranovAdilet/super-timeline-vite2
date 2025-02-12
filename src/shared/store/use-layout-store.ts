import { ILayoutState } from "../types";
import { create } from "zustand";

export const useLayoutStore = create<ILayoutState>((set) => ({
  activeMenuItem: null,
  showMenuItem: false,
  cropTarget: null,
  showControlItem: false,
  showToolboxItem: false,
  activeToolboxItem: null,
  setCropTarget: (cropTarget) => set({ cropTarget }),
  setActiveMenuItem: (showMenu) => set({ activeMenuItem: showMenu }),
  setShowMenuItem: (showMenuItem) => set({ showMenuItem }),
  setShowControlItem: (showControlItem) => set({ showControlItem }),
  setShowToolboxItem: (showToolboxItem) => set({ showToolboxItem }),
  setActiveToolboxItem: (activeToolboxItem) => set({ activeToolboxItem }),
}));
