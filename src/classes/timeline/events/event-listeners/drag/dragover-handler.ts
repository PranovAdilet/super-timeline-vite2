import { Timeline } from "@/classes/timeline/timeline";
import { transitionStore } from "../../store";
import { DragEventData, Point } from "fabric";

export function dragOverHandler(this: Timeline, event: DragEventData) {
  if (!transitionStore.guide) return false;

  event.e.preventDefault();

  const canvas = this;
  const viewportPoint = canvas.getViewportPoint(event.e);

  transitionStore.guide.set({
    left: viewportPoint.x - 16,
    top: viewportPoint.y - transitionStore.guide.height / 2,
  });

  // Поиск ближайшего объекта для привязки
  const closestObject = findClosestObject(
    viewportPoint,
    transitionStore.objects
  );

  if (closestObject) {
    transitionStore.object = closestObject;
    closestObject.strokeDashArray = [5, 1];
    closestObject.setSelected(true);
  }

  // Снятие выделения с остальных объектов
  transitionStore.objects.forEach((object: any) => {
    if (object !== closestObject) {
      object.setSelected(false);
    }
  });

  canvas.requestRenderAll();
}

function findClosestObject(
  point: { x: number; y: number },
  objects: any[]
): any | null {
  let closestDistance = Infinity;
  let closestObject: any | null = null;

  const pointAsFabric = new Point(point.x, point.y);

  objects.forEach((object) => {
    const distance = calculateDistance(object, pointAsFabric);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestObject = object;
    }
  });

  return closestObject;
}

function calculateDistance(object: any, point: Point): number {
  return Math.sqrt(
    Math.pow(object.left - point.x, 2) + Math.pow(object.top - point.y, 2)
  );
}
