import { Timeline } from "@/classes/timeline/timeline";
import { Group } from "fabric";

export function selectionCreationHandler(this: Timeline) {
  const canvas = this;
  const activeObject: any = canvas.getActiveObject();

  const selectedIds = canvas.getActiveObjects().map((obj: any) => obj.id);

  if (activeObject instanceof Group) {
    activeObject.borderColor = "rgba(0, 216, 214, 0.75)";
    activeObject.hasControls = false;
    activeObject.hoverCursor = "default";
    activeObject.borderScaleFactor = 1;
    activeObject.padding = 0;

    activeObject.getObjects().forEach((obj: any) => {
      obj.setSelected(true);
    });
  } else {
    if (activeObject != null) {
      activeObject.setSelected(true);
    }
  }

  this.setActiveIds(selectedIds);
}
