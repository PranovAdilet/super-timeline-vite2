import {
  DRAG_END,
  DRAG_PREFIX,
  DRAG_START,
} from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import { useState, useEffect } from "react";
import { filter } from "rxjs";

export const useIsDraggingOverTimeline = () => {
  const [isDraggingOverTimeline, setIsDraggingOverTimeline] = useState(false);

  useEffect(() => {
    const dragEvents = eventBus.subject.pipe(
      filter(({ key }) => key.startsWith(DRAG_PREFIX))
    );

    const dragEventsSubscription = dragEvents.subscribe((obj) => {
      if (obj.key === DRAG_START) {
        setIsDraggingOverTimeline(true);
      } else if (obj.key === DRAG_END) {
        setIsDraggingOverTimeline(false);
      }
    });

    return () => dragEventsSubscription.unsubscribe();
  }, []);

  return isDraggingOverTimeline;
};
