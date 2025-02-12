import { Transition } from "@/classes/objects";
import { Canvas } from "fabric";
import { cloneDeep } from "lodash";
import { movingState } from "../../store";

export const transitionModified = (event: any) => {
  const canvas = event.target.canvas;

  const target: any = event.target;

  if (event.action === "resizing" && target instanceof Transition && canvas) {
    const targetId = target.id;
    const transitionObject = canvas
      .getObjects("Transition")
      .find((obj: any) => obj.id === targetId);

    if (transitionObject && transitionObject instanceof Transition) {
      const currentTransitions = cloneDeep(canvas.transitionsMap);

      const updatedTransitions = {
        ...currentTransitions,
        [targetId]: {
          ...currentTransitions[targetId],
          width: transitionObject.width,
          duration: transitionObject.duration,
        },
      };

      canvas.transitionsMap = updatedTransitions;
      canvas.updateState();
    }
  }

  if (canvas) {
    removeAuxiliaryObjects(canvas, canvas.getObjects());
    deselectHelperObjects(canvas.getObjects("Helper"));
    movingState.isPointerOverHelperTrack = false;
    movingState.draggingOverTrack = null;
  }
};

const removeAuxiliaryObjects = (canvas: Canvas, objects: any[]) => {
  objects.forEach((obj) => {
    if (obj.isAlignmentAuxiliary) {
      canvas.remove(obj);
    }
  });
};

const deselectHelperObjects = (helperObjects: any[]) => {
  helperObjects.forEach((obj) => obj.setSelected(false));
};
