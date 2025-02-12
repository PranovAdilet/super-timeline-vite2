import { Timeline } from "@/classes/timeline/timeline";
import { dragOverHandler } from "./dragover-handler";
import { dragenterHandler } from "./dragenter-handler";
import { dragLeaveHandler } from "./dragleave-handler";
import { dropHandler } from "./drop-handler";

export const addDragEvents = (timeline: Timeline) => {
  timeline.on("dragover", dragOverHandler);
  timeline.on("dragenter", dragenterHandler);
  timeline.on("dragleave", dragLeaveHandler);
  timeline.on("drop", dropHandler);
};

export const removeDragEvents = (timeline: Timeline) => {
  timeline.off("dragover", dragOverHandler);
  timeline.off("dragenter", dragenterHandler);
  timeline.off("dragleave", dragLeaveHandler);
  timeline.off("drop", dropHandler);
};
