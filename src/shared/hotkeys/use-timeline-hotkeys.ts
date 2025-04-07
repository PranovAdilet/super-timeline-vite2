import { eventBus, HISTORY_REDO, HISTORY_UNDO } from "@/classes";
import { useEffect, useCallback } from "react";
import { useStore } from "../store";

export const useTimelineHotkeys = () => {
  const playerRef = useStore((state) => state.playerRef);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const activeElement = document.activeElement;

      const isTyping =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        (activeElement && "isContentEditable" in activeElement
          ? activeElement.isContentEditable
          : false);

      if (isTyping) return;

      if (e.ctrlKey || e.metaKey) {
        switch (e.code) {
          case "KeyZ":
            e.preventDefault();
            eventBus.dispatch(HISTORY_UNDO);
            break;

          case "KeyX":
            e.preventDefault();
            eventBus.dispatch(HISTORY_REDO);
            break;
        }
        return;
      }

      if (!playerRef?.current) return;
      const player = playerRef.current;

      if (e.key === " ") {
        e.preventDefault();
        player.isPlaying() ? player.pause() : player.play();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        player.seekTo(player.getCurrentFrame() - (e.shiftKey ? 10 : 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        player.seekTo(player.getCurrentFrame() + (e.shiftKey ? 10 : 1));
      }
    },
    [playerRef]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
};
