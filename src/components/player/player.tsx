"use client";

import { useEffect, useRef } from "react";
import type { PlayerRef } from "@remotion/player";
import { Player as RemotionPlayer } from "@remotion/player";
import Composition from "./composition";
// import Composition2 from "./composition2";
import useStore from "../../shared/store/store";
import { Flex } from "@radix-ui/themes";
import "./styles.css";

export const Player = () => {
  const playerRef = useRef<PlayerRef>(null);
  const { setPlayerRef, duration, fps, size } = useStore();

  useEffect(() => {
    setPlayerRef(playerRef as any);
  }, []);

  return (
    <Flex className="size-full">
      <RemotionPlayer
        ref={playerRef}
        component={Composition}
        durationInFrames={Math.round((duration / 1000) * fps) || 5 * 30}
        compositionWidth={size.width}
        compositionHeight={size.height}
        style={{ width: "100%", height: "100%" }}
        fps={fps}
        overflowVisible
        // controls
        numberOfSharedAudioTags={10}
      />
    </Flex>
  );
};
