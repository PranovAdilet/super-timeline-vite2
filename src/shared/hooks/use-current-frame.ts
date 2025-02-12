"use client";

import type { CallbackListener, PlayerRef } from "@remotion/player";
import { useCallback, useSyncExternalStore } from "react";

export const useCurrentPlayerFrame = (ref?: React.RefObject<PlayerRef>) => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!ref?.current) {
        return () => undefined;
      }
      const updater: CallbackListener<"frameupdate"> = () => {
        onStoreChange();
      };
      ref.current.addEventListener("frameupdate", updater);
      return () => {
        if (!ref.current) return;
        ref.current.removeEventListener("frameupdate", updater);
      };
    },
    [ref]
  );
  const data = useSyncExternalStore<number>(
    subscribe,
    () => ref?.current?.getCurrentFrame() ?? 0,
    () => 0
  );
  return data;
};
