import { Timeline } from "@/classes/timeline/timeline";
import { DRAG_END } from "../../constants-events";
import eventBus from "../../event-bus";
import { transitionStore } from "../../store";

export function dragLeaveHandler(this: Timeline) {
  if (!transitionStore.guide) return;

  // Завершение события перетаскивания
  eventBus.dispatch(DRAG_END);

  const canvas = this;

  // Сброс состояния объектов
  resetObjectsState(transitionStore.objects);

  // Удаление TransitionGuide
  canvas.remove(transitionStore.guide);
}

function resetObjectsState(objects: any[]) {
  objects.forEach((object) => {
    object.strokeDashArray = [];
    object.setSelected(false);
    if (object.kind === "none") {
      object.visible = false;
    }
  });
}
