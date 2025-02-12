import { Timeline } from "@/classes/timeline/timeline";
import { selectionCreationHandler } from "./selection-creation-handler";
import { handleSelectionUpdated } from "./selection-updated-handler";
import { handleSelectionCleared } from "./selection-cleared-handler";

export const addSelectionEvents = (timeline: Timeline) => {
  timeline.on("selection:created", selectionCreationHandler);
  timeline.on("selection:updated", handleSelectionUpdated);
  timeline.on("selection:cleared", handleSelectionCleared);
};

export const removeSelectionEvents = (timeline: Timeline) => {
  timeline.off("selection:created", selectionCreationHandler);
  timeline.off("selection:updated", handleSelectionUpdated);
  timeline.off("selection:cleared", handleSelectionCleared);
};
