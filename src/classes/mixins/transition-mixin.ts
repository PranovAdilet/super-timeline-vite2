import { ITransition } from "@/shared";
import { Transition } from "../objects";
import { Timeline } from "../timeline/timeline";

const FRAME_RATE = 60; // FPS
const BASE_DURATION_MS = 1000 / FRAME_RATE;
const SCALE_FACTOR = 188;

function calculateWidth(duration: number, timeScale = 1, scale = 1) {
  const scaledDuration = SCALE_FACTOR * timeScale;
  return (duration * (FRAME_RATE / 1000) * scaledDuration) / scale;
}

export class TransitionsMixin {
  // Удаление всех переходов
  removeTransitions(this: Timeline) {
    const transitions = this.getObjects("Transition");
    this.remove(...transitions);
  }

  // Рендеринг переходов
  renderTransitions(this: Timeline) {
    this.removeTransitions();
    this.transitionIds.forEach((id: any) => {
      const transition: any = this.transitionsMap[id];
      const fromId = transition.fromId;
      const toId = transition.toId;
      const objects = this.getObjects();

      const fromObject: any = objects.find((obj: any) => obj.id === fromId);
      const toObject: any = objects.find((obj: any) => obj.id === toId);

      if (!fromObject || !toObject) return;

      const width = calculateWidth(transition.duration, this.tScale);
      const left = fromObject.left + fromObject.width - width / 2;
      const height = fromObject.height;

      const transitionObject = new Transition({
        id: transition.id,
        left: left,
        top: fromObject.top,
        height: height,
        width: width,
        tScale: this.tScale,
        duration: transition.duration,
        fromId: fromObject.id,
        toId: toObject.id,
        kind: transition.kind,
      });

      if (transition.kind === "none") {
        transitionObject.visible = false;
      }

      this.add(transitionObject);
    });
  }

  // Обновление координат переходов
  updateTransitionCoordinates(this: Timeline) {
    this.pauseEventListeners();
    this.getObjects("Transition").forEach((transition: any) => {
      transition.tScale = this.tScale;
      transition.updateCoords();
      transition.setCoords();
    });
    this.resumeEventListeners();
  }

  // Выравнивание переходов по треку
  alignTransitionsToTrack(this: Timeline) {
    this.pauseEventListeners();
    this.transitionIds.forEach((id) => {
      const transition = this.getObjects("Transition").find(
        (obj: any) => obj.id === id
      );

      if (transition instanceof Transition) {
        const fromObject = this.getObjects().find(
          (obj: any) => obj.id === transition.fromId
        );
        if (!fromObject) return;

        const width = calculateWidth(transition.duration, this.tScale);
        const left = fromObject.left + fromObject.width - width / 2;

        transition.set({ left: left, top: fromObject.top });
        transition.setCoords();
      }
    });
    this.resumeEventListeners();
  }

  // Обновление переходов
  updateTransitions(this: Timeline, updateListeners = true) {
    if (updateListeners) this.pauseEventListeners();

    const tracks = this.getObjects("Track");
    const mediaObjects = this.getObjects("Video", "Image");

    this.removeTransitions();

    const newTransitionsMap: Record<string, ITransition> = {};
    const newTransitionIds: string[] = [];

    tracks.forEach((track: any) => {
      const sortedItems = mediaObjects
        .filter((media: any) => track.items.includes(media.id))
        .sort((a, b) => a.left - b.left);

      for (let i = 0; i < sortedItems.length - 1; i++) {
        const current: any = sortedItems[i];
        const next: any = sortedItems[i + 1];

        if (Math.abs(current.left + current.width - next.left) <= 1) {
          const transitionId = `${current.id}-${next.id}`;

          if (this.transitionIds.includes(transitionId)) {
            newTransitionsMap[transitionId] = this.transitionsMap[
              transitionId
            ] as any;
          } else {
            const newTransition = {
              id: transitionId,
              duration: 1500,
              fromId: current.id,
              toId: next.id,
              kind: "none",
              trackId: track.id,
              type: "transition",
            };
            newTransitionsMap[transitionId] = newTransition as any;
          }
          newTransitionIds.push(transitionId);
        }
      }
    });

    this.transitionIds = newTransitionIds;
    this.transitionsMap = newTransitionsMap;

    this.renderTransitions();

    if (updateListeners) this.resumeEventListeners();
  }
}
