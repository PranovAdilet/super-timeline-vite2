import { Timeline } from "@/classes/timeline/timeline";

export function mouseWheel(this: Timeline, event: any) {
  const canvasHeightExceeded = this.height < this.bounding.height;
  const canvasWidthExceeded = this.width < this.bounding.width;

  if (!canvasHeightExceeded && !canvasWidthExceeded) return;

  const viewport = this.viewportTransform;
  let viewportX = viewport[4];
  let viewportY = viewport[5];

  const zoomFactor = 2;

  if (event.e.shiftKey) {
    viewportX = viewport[4] - event.e.deltaY * zoomFactor;
  } else {
    if (canvasHeightExceeded) {
      viewportY = viewport[5] - event.e.deltaY * zoomFactor;
    }
    viewportX = viewport[4] - event.e.deltaX * zoomFactor;
  }

  this.setViewportPos(viewportX, viewportY);
}
