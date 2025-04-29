import { ACTIVE_DELETE, eventBus } from "@/classes";
import { useEffect } from "react";
import { useStore } from "../store";

export const useItemsHotkeys = () => {
  const activeIds = useStore((state) => state.activeIds);

  const onKeyDown = (e: KeyboardEvent) => {
    const activeElement = document.activeElement;

    const isTyping =
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLTextAreaElement ||
      (activeElement && "isContentEditable" in activeElement
        ? activeElement.isContentEditable
        : false);

    if (isTyping) return;

    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      eventBus.dispatch(ACTIVE_DELETE);
    }
  };

  useEffect(() => {
    if (activeIds.length === 1) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIds]);
};
