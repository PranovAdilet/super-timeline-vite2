import { eventBus, HISTORY_REDO, HISTORY_UNDO } from "@/classes";
import { useEffect } from "react";
import { useStore } from "../store";

export const useTimelineHotkeys = () => {
  const playerRef = useStore((state) => state.playerRef);

  const onKeyDown = (e: KeyboardEvent) => {
    if (!playerRef?.current) return;
    const player = playerRef.current;

    switch (e.key) {
      case " ":
        e.preventDefault();
        player.isPlaying() ? player.pause() : player.play();
        break;

      case "ArrowLeft":
        e.preventDefault();
        player.seekTo(player.getCurrentFrame() - (e.shiftKey ? 10 : 1));
        break;

      case "ArrowRight":
        e.preventDefault();
        player.seekTo(player.getCurrentFrame() + (e.shiftKey ? 10 : 1));
        break;

      default:
        break;
    }

    const activeElement = document.activeElement;

    const isTyping =
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLTextAreaElement ||
      (activeElement && "isContentEditable" in activeElement
        ? activeElement.isContentEditable
        : false);

    if (isTyping) return;

    if (e.ctrlKey || e.metaKey) {
      const key = e.key.toLowerCase();
      switch (key) {
        case "z":
          e.preventDefault();
          eventBus.dispatch(HISTORY_UNDO);
          break;

        case "x":
          e.preventDefault();
          eventBus.dispatch(HISTORY_REDO);
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [playerRef]);
};
