import { Timeline } from "../../timeline";
import {
  addBeforeTransformEvents,
  removeBeforeTransformEvents,
} from "./before-transorm";
import { addDragEvents, removeDragEvents } from "./drag";
import { addModifiedEvents, removeModifiedEvents } from "./modified";
import { addMouseEvents, removeMouseEvents } from "./mouse";
import { addMovingEvents, removeMovingEvents } from "./moving";
import { addSelectionEvents, removeSelectionEvents } from "./selection";
import { addSubscribeStateEvents, removeSubscribeStateEvents } from "./state";
import { addTrackEvents, removeTrackEvents } from "./track";

export const addEventListeners = (timeline: Timeline) => {
  addDragEvents(timeline);
  addModifiedEvents(timeline);
  addMouseEvents(timeline);
  addMovingEvents(timeline);
  addTrackEvents(timeline);
  addSelectionEvents(timeline);
  addBeforeTransformEvents(timeline);
  addSubscribeStateEvents(timeline);
};

export const removeEventListeners = (timeline: Timeline) => {
  removeDragEvents(timeline);
  removeModifiedEvents(timeline);
  removeMouseEvents(timeline);
  removeMovingEvents(timeline);
  removeTrackEvents(timeline);
  removeSelectionEvents(timeline);
  removeBeforeTransformEvents(timeline);
  removeSubscribeStateEvents(timeline);
};
