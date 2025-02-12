"use client";

import { Flex } from "@radix-ui/themes";
import { Player } from "../player";

export const Scene = () => {
  return (
    <Flex
      flexGrow="1"
      justify="center"
      width="100%"
      height="100%"
      className="bg-scene py-3"
    >
      <div className="max-w-3xl flex-1  w-full h-full flex relative">
        <Player />
      </div>
    </Flex>
  );
};
