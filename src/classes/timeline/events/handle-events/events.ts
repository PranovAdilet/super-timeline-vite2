import { filter } from "rxjs";
import {
  ACTIVE_PREFIX,
  ADD_PREFIX,
  TIMELINE_SCALE_CHANGED,
  TIMELINE_SCALE_PREFIX,
} from "../constants-events";
import eventBus from "../event-bus";
import { Timeline } from "../../timeline";

export function handleEvents(timeline: Timeline) {
  // const addSubscription = eventBus.subject
  //   .pipe(filter(({ key, value }) => key.startsWith(ADD_PREFIX)))
  //   .subscribe((event) => {
  //     handleAddRemoveEvents.bind(timeline)(event);
  //   });

  // const activeSubscription = eventBus.subject
  //   .pipe(filter(({ key }) => key.startsWith(ACTIVE_PREFIX)))
  //   .subscribe((event) => {
  //     handleActiveItemsEvents.bind(timeline)(event);
  //   });

  const timelineScaleSubscription = eventBus.subject
    .pipe(filter(({ key }) => key.startsWith(TIMELINE_SCALE_PREFIX)))
    .subscribe((event: any) => {
      if (event.key === TIMELINE_SCALE_CHANGED) {
        const scaleData = event.value;
        timeline.setScale(scaleData?.payload.scale ?? undefined);
      }
    });

  return {
    unsubscribe: () => {
      // Отписываемся от всех событий при завершении
      // addSubscription.unsubscribe();
      // activeSubscription.unsubscribe();
      timelineScaleSubscription.unsubscribe();
    },
  };
}
