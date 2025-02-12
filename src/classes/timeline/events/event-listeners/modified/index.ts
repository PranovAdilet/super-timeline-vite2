import { Timeline } from "@/classes/timeline/timeline";
import { transitionModified } from "./modified";
import { objectModified } from "./object-modified";

export const addModifiedEvents = (timeline: Timeline) => {
  timeline.on("object:modified", transitionModified);
  timeline.on("object:modified", objectModified);
};

export const removeModifiedEvents = (timeline: any) => {
  timeline.off("object:modified", transitionModified);
  timeline.off("object:modified", objectModified);
};
