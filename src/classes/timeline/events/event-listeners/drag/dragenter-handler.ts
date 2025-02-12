import { PreviewTrackItem, TransitionGuide } from "@/classes/objects";
import { DRAG_START } from "../../constants-events";
import eventBus from "../../event-bus";
import { transitionStore } from "../../store";
import { timeMsToUnits } from "@/shared/utils";
import { Timeline } from "@/classes/timeline/timeline";
import { DragEventData } from "fabric";

type DragData = {
  type: string;
  duration?: number;
};

const SUPPORTED_TYPES = [
  "transition",
  "image",
  "video",
  "audio",
  "caption",
  "text",
];

export function dragenterHandler(this: Timeline, event: DragEventData) {
  const dragDataTransfer = event.e.dataTransfer?.types[0];
  if (!dragDataTransfer) return;

  const dragData: DragData = JSON.parse(dragDataTransfer);
  const { type, duration = 5000 } = dragData;

  if (!SUPPORTED_TYPES.includes(type)) return;

  const canvas = this;
  canvas.discardActiveObject();

  const width = timeMsToUnits(duration, canvas.tScale);

  transitionStore.guide = createItem({
    width,
    height: 48,
    id: "TransitionGuide",
    left: 0,
    top: 0,
    type,
  });

  canvas.add(transitionStore.guide);

  if (type === "transition") {
    transitionStore.objects = canvas.getObjects("Transition");
    transitionStore.objects.forEach((obj: any) => {
      obj.visible = true;
    });
  }

  eventBus.dispatch(DRAG_START);
}

type ItemParams = {
  width: number;
  height: number;
  id: string;
  left: number;
  top: number;
  type: string;
};

function createItem({ width, height, id, left, top, type }: ItemParams) {
  return type === "transition"
    ? new TransitionGuide({
        top: 0,
        left: 0,
        height: 48,
        width: 48,
        id: "TransitionGuide",
      })
    : new PreviewTrackItem({
        top,
        left,
        height,
        width,
        id,
        name: "Rivers in the mountains",
      });
}
