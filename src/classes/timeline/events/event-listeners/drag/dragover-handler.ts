import { Timeline } from "@/classes/timeline/timeline";
import { transitionStore } from "../../store";
import { DragEventData, Point } from "fabric";

export function dragOverHandler(this: Timeline, event: DragEventData) {
  if (!transitionStore.guide) return false;

  event.e.preventDefault();

  const canvas = this;
  const viewportPoint = canvas.getViewportPoint(event.e);

  // Коррекция позиции с учетом viewportTransform
  const transformedPoint = applyViewportTransform(viewportPoint, canvas);

  transitionStore.guide.set({
    left: transformedPoint.x - 16,
    top: transformedPoint.y - transitionStore.guide.height / 2,
  });

  // Поиск ближайшего объекта для привязки
  const closestObject = findClosestObject(
    transformedPoint,
    transitionStore.objects
  );

  // Если изменился выбранный объект — обновляем
  if (transitionStore.object !== closestObject) {
    if (transitionStore.object) {
      transitionStore.object.strokeDashArray = undefined; // Сброс предыдущего объекта
      transitionStore.object.setSelected(false);
    }

    transitionStore.object = closestObject;

    if (closestObject) {
      closestObject.strokeDashArray = [5, 1];
      closestObject.setSelected(true);
    }
  }
  canvas.requestRenderAll(); // Рендерить только при изменениях
}

// Коррекция координат с учетом viewportTransform
function applyViewportTransform(
  point: { x: number; y: number },
  canvas: Timeline
) {
  const t = canvas.viewportTransform || [1, 0, 0, 1, 0, 0]; // [scaleX, skewX, skewY, scaleY, translateX, translateY]
  return {
    x: (point.x - t[4]) / t[0], // (x - translateX) / scaleX
    y: (point.y - t[5]) / t[3], // (y - translateY) / scaleY
  };
}

function findClosestObject(
  point: { x: number; y: number },
  objects: any[]
): any | null {
  let closestObject: any | null = null;
  let closestDistance = Infinity;

  const pointAsFabric = new Point(point.x, point.y);

  for (const object of objects) {
    if (object.left == null || object.top == null) continue; // Проверяем координаты объекта

    const distance = calculateDistance(object, pointAsFabric);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestObject = object;
    }
  }

  return closestObject;
}

function calculateDistance(object: any, point: Point): number {
  const dx = object.left - point.x;
  const dy = object.top - point.y;
  return dx * dx + dy * dy; // Убираем Math.sqrt для оптимизации
}
