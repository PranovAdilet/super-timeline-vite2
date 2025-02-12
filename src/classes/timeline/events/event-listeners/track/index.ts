import { trackMovedHandler } from "./track-moved-handler";
import { trackResizeHandler } from "./track-resize-handler";
import { tracksCreationHandler } from "./tracks-creation-handler";

export const addTrackEvents = (timeline: any) => {
  timeline.on("track:create", tracksCreationHandler.bind(timeline));
  timeline.on("track-items:resized", trackResizeHandler.bind(timeline));
  timeline.on("track-items:moved", trackMovedHandler.bind(timeline));
};

export const removeTrackEvents = (timeline: any) => {
  timeline.off("track:create", tracksCreationHandler.bind(timeline));
  timeline.off("track-items:resized", trackResizeHandler.bind(timeline));
  timeline.off("track-items:moved", trackMovedHandler.bind(timeline));
};
