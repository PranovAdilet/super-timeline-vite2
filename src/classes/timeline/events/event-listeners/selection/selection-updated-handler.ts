import { Timeline } from "@/classes/timeline/timeline";
import { Group } from "fabric";

export function handleSelectionUpdated(this: Timeline, event: any) {
  const canvas = this;

  const activeObject = canvas.getActiveObject();

  if (activeObject instanceof Group) {
    activeObject.borderColor = "transparent";
    activeObject.hasControls = false;
    activeObject.hoverCursor = "default";
  }

  event.selected.forEach((obj: any) => {
    obj.setSelected(true);
  });

  event.deselected.forEach((obj: any) => {
    obj.setSelected(false);
  });

  const selectedIds = canvas.getActiveObjects().map((obj: any) => obj.id);
  this.setActiveIds(selectedIds);
}
