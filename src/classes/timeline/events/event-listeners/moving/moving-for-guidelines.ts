import { HelperObject } from "@/classes/objects";
import { Line, type Canvas } from "fabric";
import { movingState } from "@/classes/timeline/events/store";

export function onOjectMovingForGuideling(this: any, event: any) {
  const canvas = this;
  if (!canvas) return;

  const mousePoint = canvas.getScenePoint(event.e);
  const trackAndHelperObjects = canvas.getObjects("Helper", "Track");

  movingState.draggingOverTrack =
    trackAndHelperObjects.find((obj: any) => {
      const boundingRect = obj.getBoundingRect();
      return (
        mousePoint.x >= boundingRect.left &&
        mousePoint.x <= boundingRect.left + boundingRect.width &&
        mousePoint.y >= boundingRect.top &&
        mousePoint.y <= boundingRect.top + boundingRect.height
      );
    }) ?? null;

  // if (movingState.draggingOverTrack?.items.includes(event.target.id)) {
  // }

  trackAndHelperObjects.forEach((obj: any) => {
    if (isInstancedHelper(obj)) {
      const draggingOverTrack: any = movingState.draggingOverTrack;
      obj.setSelected(obj === draggingOverTrack);
    }
  });

  movingState.isPointerOverHelperTrack = isInstancedHelper(
    movingState.draggingOverTrack
  );

  const allCanvasObjects = canvas.getObjects();
  const movingObject = event.target;
  const movingObjectRect = movingObject.getBoundingRect();
  movingObject.setCoords();

  const alignedObjects = [
    movingObject,
    ...canvas.getActiveObjects(),
    ...canvas.getObjects("Track", "Helper", "Transition", "Placeholder"),
  ];
  const guideLines = getAlignmentGuides(alignedObjects, canvas);
  const movingObjectGuidePoints = getObjectGuides(movingObject);
  const alignmentResults = calculateAlignments(
    guideLines,
    movingObjectGuidePoints
  );
  // Применить привязку, если активен режим выравнивания
  // if (movingState.enableGuideRedraw) {
  //   removeAuxiliaryObjects(canvas, allCanvasObjects);
  //   if (alignmentResults.length)
  //     renderGuides(alignmentResults, movingObjectRect, canvas);

  //   // Переключатель для временной блокировки привязки
  //   movingState.enableGuideRedraw = false;
  //   setTimeout(() => (movingState.enableGuideRedraw = true), 50);
  // }

  // Применить корректировки для объекта в зависимости от направляющих

  alignmentResults.forEach((guide) => {
    if (guide.orientation === "V") {
      movingObject.left = guide.lineGuide + guide.offset;
    } else {
      movingObject.top = guide.lineGuide + guide.offset;
    }
  });
}

const getAlignmentGuides = (selectedObjects: any[], canvas: Canvas) => {
  const verticalGuides: any[] = [];
  const horizontalGuides: any[] = [];

  // Проход по всем объектам, чтобы извлечь их направляющие
  canvas
    .getObjects()
    .filter((obj) => obj.visible)
    .forEach((obj: any) => {
      const selectedObject = selectedObjects.some(
        (selObj) => selObj.id === obj.id
      );
      if (selectedObject || obj.isAlignmentAuxiliary) return;

      const boundingRect = obj.getBoundingRect();
      verticalGuides.push(
        createGuides(
          boundingRect.left,
          boundingRect.width,
          boundingRect.top,
          boundingRect.height
        )
      );
      horizontalGuides.push(
        createGuides(
          boundingRect.top,
          boundingRect.height,
          boundingRect.left,
          boundingRect.width
        )
      );
    });

  return {
    vertical: verticalGuides.flat(),
    horizontal: [],
  };
};
const createGuides = (
  position: number,
  length: number,
  startCoord: number,
  endCoord: number
): any[] => {
  return [position, position + length].map((val) => ({
    val,
    start: startCoord,
    end: startCoord + endCoord,
  }));
};

// Функция для сравнения направляющих и нахождения ближайших направляющих
const calculateAlignments = (
  guides: { vertical: any[]; horizontal: any[] },
  targetGuides: any
) => {
  const closestVerticalGuides: any[] = [];
  const closestHorizontalGuides: any[] = [];

  const ALIGNMENT_THRESHOLD = 10;

  // Сравнение вертикальных направляющих
  guides.vertical.forEach((canvasGuide) => {
    targetGuides.vertical.forEach((targetGuide: any) => {
      const difference = Math.abs(canvasGuide.val - targetGuide.guide);
      if (difference < ALIGNMENT_THRESHOLD) {
        closestVerticalGuides.push({
          lineGuide: canvasGuide.val,
          diff: difference,
          orientation: "V",
          snap: targetGuide.snap,
          offset: targetGuide.offset,
          targetDim: {
            start: canvasGuide.start,
            end: canvasGuide.end,
          },
        });
      }
    });
  });

  // Сравнение горизонтальных направляющих
  guides.horizontal.forEach((canvasGuide) => {
    targetGuides.horizontal.forEach((targetGuide: any) => {
      const difference = Math.abs(canvasGuide.val - targetGuide.guide);
      if (difference < ALIGNMENT_THRESHOLD) {
        closestHorizontalGuides.push({
          lineGuide: canvasGuide.val,
          diff: difference,
          orientation: "H",
          snap: targetGuide.snap,
          offset: targetGuide.offset,
          targetDim: {
            start: canvasGuide.start,
            end: canvasGuide.end,
          },
        });
      }
    });
  });

  // Найти ближайшую направляющую для каждой ориентации
  const alignments: any[] = [];
  const closestVertical = closestVerticalGuides.sort(
    (a, b) => a.diff - b.diff
  )[0];
  const closestHorizontal = closestHorizontalGuides.sort(
    (a, b) => a.diff - b.diff
  )[0];

  if (closestVertical)
    alignments.push({
      lineGuide: closestVertical.lineGuide,
      offset: closestVertical.offset,
      orientation: "V",
      snap: closestVertical.snap,
      targetDim: closestVertical.targetDim,
    });
  if (closestHorizontal)
    alignments.push({
      lineGuide: closestHorizontal.lineGuide,
      offset: closestHorizontal.offset,
      orientation: "H",
      snap: closestHorizontal.snap,
      targetDim: closestHorizontal.targetDim,
    });

  return alignments;
};

// Функция для получения направляющих объекта
const getObjectGuides = (
  object: any
): { vertical: any[]; horizontal: any[] } => {
  const boundingRect = object.getBoundingRect();

  return {
    vertical: [
      {
        guide: Math.round(boundingRect.left),
        offset: Math.round(object.left - boundingRect.left),
        snap: "start",
      },
      {
        guide: Math.round(boundingRect.left + boundingRect.width),
        offset: Math.round(
          object.left - boundingRect.left - boundingRect.width
        ),
        snap: "end",
      },
    ],
    horizontal: [
      {
        guide: Math.round(boundingRect.top),
        offset: Math.round(object.top - boundingRect.top),
        snap: "start",
      },
      {
        guide: Math.round(boundingRect.top + boundingRect.height),
        offset: Math.round(object.top - boundingRect.top - boundingRect.height),
        snap: "end",
      },
    ],
  };
};

// Функция для отображения направляющих на canvas
const renderGuides = (
  alignmentGuides: any,
  objectRect: any,
  canvas: Canvas
) => {
  alignmentGuides.forEach((guide: any) => {
    const guideLineStyle = getGuideStyle(canvas.getZoom());

    if (guide.orientation === "H") {
      canvas.add(
        createGuideLine(
          [
            0,
            guide.lineGuide - guideLineStyle.strokeWidth / 2,
            2000,
            guide.lineGuide - guideLineStyle.strokeWidth / 2,
          ],
          guideLineStyle
        )
      );
    } else if (guide.orientation === "V") {
      canvas.add(
        createGuideLine(
          [
            guide.lineGuide - guideLineStyle.strokeWidth / 2,
            0,
            guide.lineGuide - guideLineStyle.strokeWidth / 2,
            2000,
          ],
          guideLineStyle
        )
      );
    }
  });
};

const getGuideStyle = (n: number): { strokeWidth: number } => ({
  strokeWidth: 2 / n,
});

const createGuideLine = (n: any, t: object) => {
  return new Line(n, {
    ...t,
    stroke: "rgba(0, 216, 214, 1.0)", // Цвет обводки
    strokeLineCap: "square", // Стиль окончания линии
    excludeFromExport: true, // Исключить из экспорта
    isAlignmentAuxiliary: true, // Для вспомогательных линий выравнивания
    selectable: false, // Недоступно для выбора
    objectCaching: false, // Без кэширования
  });
};

const removeAuxiliaryObjects = (canvas: Canvas, objects: any[]) => {
  objects.forEach((obj) => {
    if (obj.isAlignmentAuxiliary) {
      canvas.remove(obj);
    }
  });
};

const isInstancedHelper = (n: any) => n instanceof HelperObject;
