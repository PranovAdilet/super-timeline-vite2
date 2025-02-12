import { Timeline } from "@/classes/timeline/timeline";

export function handleSelectionCleared(this: Timeline, event: any) {
  this.getObjects().forEach((obj: any) => {
    if (obj.isSelected) {
      obj.isSelected = false;
    }
  });

  event.deselected.forEach((i: any) => {
    i.setSelected(false);
  });
  const activeIds = this.getActiveObjects().map((obj: any) => obj.id);

  this.setActiveIds(activeIds);
}
