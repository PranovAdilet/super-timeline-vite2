import { ActiveSelection } from "fabric";
import { Timeline } from "../timeline/timeline";

export class CanvasMixin {
  private ___eventListeners: Record<string, any>;
  private ___activeObjects: any[];

  constructor() {
    this.___activeObjects = [];
    this.___eventListeners = {};
  }

  pauseEventListeners(this: any) {
    this.___eventListeners = this.__eventListeners;
    this.__eventListeners = {};

    const activeObjects = this.getActiveObjects();
    this.discardActiveObject();
    this.___activeObjects = activeObjects;
  }

  resumeEventListeners(this: any): false | undefined {
    this.__eventListeners = this.___eventListeners;
    this.___eventListeners = {};

    const activeObjects = this.___activeObjects;

    if (!activeObjects.length) {
      this.requestRenderAll();
      return false;
    }
    if (activeObjects.length === 1) {
      this.setActiveObject(activeObjects[0]);
    } else {
      const activeSelection = new ActiveSelection(activeObjects);
      this.setActiveObject(activeSelection);
    }
    this.requestRenderAll();
  }
}
