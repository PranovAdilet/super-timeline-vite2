import { movingState } from "@/classes/timeline/events/store";
import { Timeline } from "@/classes/timeline/timeline";
import eventBus from "../../event-bus";
import { PLAYER_SEEK } from "../../constants-events";
import { unitsToTimeMs } from "@/shared/utils";

/**
 * Удаляет указанные объекты из контейнера и очищает массив.
 * @param timeline - Контейнер, из которого нужно удалить объекты.
 * @param objects - Список объектов для удаления.
 */
function removeObjects(timeline: Timeline, objects: any[]) {
  timeline.remove(...objects);
  objects.length = 0;
}

/**
 * Обработчик события mouseup.
 */
export function mouseUp(this: Timeline): void {
  removeObjects(this, movingState.placeholderMovingObjects);
}
