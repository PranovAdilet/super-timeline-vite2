import { onOjectMovingForGuideling } from "./moving-for-guidelines";
import { objectMoving } from "./moving";

export const addMovingEvents = (timeline: any) => {
  timeline.on("object:moving", onOjectMovingForGuideling.bind(timeline));
  timeline.on("object:moving", objectMoving);
};

export const removeMovingEvents = (timeline: any) => {
  timeline.off("object:moving", onOjectMovingForGuideling.bind(timeline));
  timeline.off("object:moving", objectMoving);
};
