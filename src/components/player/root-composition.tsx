"use client";

import { Composition, getInputProps } from "remotion";
import CompositionPlayer from "./composition";
import { Flex, Theme } from "@radix-ui/themes";
import { ITrackItem } from "@/shared";
import "./styles.css";

type Props = {
  trackItemIds?: string[];
  trackItemsMap?: Record<string, ITrackItem>;
  trackItemDetailsMap?: Record<string, any>;
  transitionsMap?: Record<string, any>;
  width: number;
  height: number;
  fps: number;
};

export const RootComposition = () => {
  const {
    trackItemDetailsMap,
    trackItemIds,
    trackItemsMap,
    transitionsMap,
    ...props
  } = getInputProps<Props>();

  const durationInFrames = calculateDuration(trackItemsMap!);

  return (
    <Flex
      className="size-full"
      style={{ width: "100%", height: "100%" }}
    >
      <Composition
        id="Timeline"
        {...props}
        durationInFrames={durationInFrames || 5 * 30}
        component={() => (
          <Theme
            accentColor="lime"
            grayColor="mauve"
            panelBackground="solid"
            radius="large"
            appearance="dark"
          >
            <CompositionPlayer
              trackItemDetailsMap={trackItemDetailsMap}
              trackItemIds={trackItemIds}
              trackItemsMap={trackItemsMap}
              // transitionsMap={transitionsMap}
            />
          </Theme>
        )}
      />
    </Flex>
  );
};

const calculateDuration = (
  trackItemsMap: Record<string, ITrackItem>
): number => {
  let maxDuration = 0;

  Object.values(trackItemsMap).forEach((item) => {
    const { to } = item.display;
    if (to > maxDuration) {
      maxDuration = to;
    }
  });

  return Math.round((maxDuration / 1000) * 30);
};
