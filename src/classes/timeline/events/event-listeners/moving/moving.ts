"use client";

import { movingState } from "../../store";
import { findOverlappingObject } from "../modified/object-modified";

/**
 * Обновляет прозрачность объекта в зависимости от его состояния.
 * @param layer - Объект слоя.
 */
function updateOpacity(layer: any) {
  layer.opacity = movingState.isPointerOverHelperTrack ? 0 : 1;
}

/**
 * Основная логика для обработки перемещения объектов на холсте.
 */
export const objectMoving = throttle((event: any) => {
  const canvas = event.target.canvas;

  // Обновляем состояние перед началом вычислений
  updateCanvasState(event);

  if (!movingState.draggingOverTrack) return;

  const draggedObjects = movingState.placeholderMovingObjects.map(
    (layer) => layer.draggedObject
  );

  const availableObjects = (
    movingState.trackToItemsMap[movingState.draggingOverTrack.id] || []
  ).filter((item) => !draggedObjects.includes(item));

  const intersectedObject = availableObjects.find((item) =>
    findOverlappingObject(draggedObjects, item.getBoundingRect())
  );

  movingState.placeholderMovingObjects.forEach((layer) => {
    const draggedObject: any = layer.draggedObject;
    draggedObject?.setCoords();
    updateOpacity(layer);

    const newCoords = calculateNewCoordinates(
      draggedObject,
      availableObjects,
      intersectedObject,
      movingState.placeholderMovingObjects.length > 1
    );

    canvas.trackIdAfterTransform = movingState.trackTopToIdMap[newCoords.top];
    canvas.positionAfterTransform[draggedObject?.id] = {
      top: newCoords.top,
      left: newCoords.left,
    };

    layer.left = newCoords.left;
    layer.top = newCoords.top;
  });
}, 5);

/**
 * Вычисляет новые координаты объекта.
 */
const calculateNewCoordinates = (
  object: any,
  availableItems: any[],
  targetItem: any,
  isMultiple: boolean
): { left: number; top: number } => {
  if (!isObjectValid(object) || (isMultiple && targetItem)) {
    return getInitialCoordinates(object);
  }

  if (targetItem) {
    return calculatePosition(object, targetItem, availableItems);
  }

  return getDefaultAction(object);
};

/**
 * Проверяет валидность объекта.
 */
const isObjectValid = (object: any): boolean => {
  if (!movingState.draggingOverTrack) return false;
  return movingState.draggingOverTrack.accepts?.includes(object.type) ?? false;
};

/**
 * Возвращает начальные координаты объекта.
 */
const getInitialCoordinates = (object: any): { left: number; top: number } => {
  return {
    top: movingState.objectInitialPositions[object.id].top,
    left: movingState.objectInitialPositions[object.id].left,
  };
};

/**
 * Вычисляет позицию объекта относительно других элементов.
 */
const calculatePosition = (
  object: any,
  targetItem: any,
  availableItems: any[]
): { left: number; top: number } => {
  const relativePosition = calculateRelativePosition(object, targetItem);

  if (
    !isIntersecting(availableItems, object, relativePosition) ||
    movingState.activeObjects.length !== 1
  ) {
    return getInitialCoordinates(object);
  }

  return {
    left: relativePosition,
    top: targetItem.top,
  };
};

/**
 * Вычисляет относительное положение объекта.
 */
const calculateRelativePosition = (object: any, targetItem: any): number => {
  const objectCenterX = object.left + object.width / 2;
  const targetCenterX = targetItem.left + targetItem.width / 2;

  return objectCenterX < targetCenterX
    ? targetItem.left - object.width
    : targetItem.left + targetItem.width;
};

/**
 * Проверяет пересечение объекта с другими элементами.
 */
const isIntersecting = (
  availableItems: any[],
  object: any,
  relativePosition: number
): boolean => {
  return !(
    relativePosition < 0 ||
    findOverlappingObject(availableItems, {
      ...object.getBoundingRect(),
      left: relativePosition,
    })
  );
};

/**
 * Возвращает действие по умолчанию.
 */
const getDefaultAction = (object: any): { left: number; top: number } => {
  const boundingRect = object.getBoundingRect();

  return {
    left: boundingRect.left,
    top: movingState.draggingOverTrack?.top ?? 0,
  };
};

/**
 * Ограничивает частоту вызовов функции.
 */
function throttle(func: Function, delay: number): Function {
  let lastCall: number | null = null;
  return function (...args: any[]) {
    const now = Date.now();
    if (lastCall === null || now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

/**
 * Обновляет состояние холста.
 */
function updateCanvasState(event: any): void {
  const target = event.target;
  const canvas = target.canvas;

  // Ограничиваем вертикальную позицию
  const currentTop = target.top;
  const minTop = -target.height * 0.75;
  const maxTop = canvas.height + target.height * 0.75;
  target.top = Math.min(Math.max(currentTop, minTop), maxTop - target.height);

  // Ограничиваем горизонтальную позицию
  const currentLeft = target.left;
  target.left = Math.max(currentLeft, 0);
}
