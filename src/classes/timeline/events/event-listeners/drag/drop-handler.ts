import {
  ADD_AUDIO,
  ADD_IMAGE,
  ADD_VIDEO,
  DRAG_END,
} from "../../constants-events";
import eventBus from "../../event-bus";
import { transitionStore } from "../../store";
import { v4 as uuidv4 } from "uuid";
import { pick } from "lodash-es";
import { Timeline } from "@/classes/timeline/timeline";
import { DropEventData } from "fabric";

type DragEventData = {
  type: string;
  [key: string]: any;
};

export function dropHandler(this: Timeline, event: DropEventData) {
  const dragDataTransfer = event.e.dataTransfer?.types[0];
  if (!dragDataTransfer) return;

  const dragData: DragEventData = JSON.parse(
    (event.e.dataTransfer as any).getData(dragDataTransfer)
  );

  const canvas = this;

  if (dragData.type !== "transition") {
    handleNonTransitionDrop(dragData);
    canvas.remove(transitionStore.guide);
    canvas.requestRenderAll();
    eventBus.dispatch(DRAG_END);
    return;
  }

  if (!transitionStore.guide) return;

  if (transitionStore.object) {
    updateTransitionSettings(dragData, canvas);
  }

  transitionStore.objects.forEach((obj: any) => {
    obj.strokeDashArray = [];
    obj.setSelected(false);
    if (obj.kind === "none") {
      obj.visible = false;
    }
  });

  canvas.remove(transitionStore.guide);
  canvas.requestRenderAll();
  eventBus.dispatch(DRAG_END);
}

function handleNonTransitionDrop(dragData: DragEventData) {
  const payload = { ...dragData, id: uuidv4() };

  switch (dragData.type) {
    case "image":
      eventBus.dispatch(ADD_IMAGE, { payload });
      break;
    case "video":
      eventBus.dispatch(ADD_VIDEO, { payload });
      break;
    case "audio":
      eventBus.dispatch(ADD_AUDIO, { payload });
      break;
    default:
      break;
  }
}

function updateTransitionSettings(dragData: DragEventData, canvas: any) {
  const transitionId = transitionStore.object?.id;
  const propsToUpdate = pick(dragData, ["kind", "direction"]);

  Object.entries(propsToUpdate).forEach(([key, value]) => {
    if (key === "kind") {
      transitionStore.object.kind = value;
    } else {
      transitionStore.object[key] = value;
    }
  });

  canvas.transitionsMap[transitionId] = {
    ...canvas.transitionsMap[transitionId],
    ...propsToUpdate,
  };

  canvas.updateState();
}
