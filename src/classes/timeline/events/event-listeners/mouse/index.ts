import { Timeline } from "@/classes/timeline/timeline";
import { mouseUp } from "./mouse-up";
import { mouseWheel } from "./mouse-wheel";

export const addMouseEvents = (timeline: Timeline) => {
  timeline.on("mouse:wheel", mouseWheel);
  timeline.on("mouse:up", mouseUp.bind(timeline));
};

export const removeMouseEvents = (timeline: Timeline) => {
  timeline.off("mouse:wheel", mouseWheel);
  timeline.off("mouse:up", mouseUp.bind(timeline));
};
