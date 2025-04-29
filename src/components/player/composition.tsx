"use client";

import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import useStore from "../../shared/store/store";
import { SequenceItem } from "../sequence-item";
import { merge } from "lodash-es";
import "./styles.css";

import { ITrackItem } from "@/shared";

type ItemType = "text" | "image" | "video" | "audio";

type Props = {
  trackItemIds?: string[];
  trackItemsMap?: Record<string, ITrackItem>;
  trackItemDetailsMap?: Record<string, any>;
};
const TimelinePlayer = ({
  trackItemIds: trackItemIdsProps,
  trackItemsMap: trackItemsMapProps,
  trackItemDetailsMap: trackItemDetailsMapProps,
}: Props) => {
  const {
    trackItemIds: trackItemIdsStore,
    trackItemsMap: trackItemsMapStore,
    fps,
    trackItemDetailsMap: trackItemDetailsMapStore,
  } = useStore();

  const { width, height } = useVideoConfig();

  const currentFrame = useCurrentFrame();

  const trackItemDetailsMap =
    trackItemDetailsMapProps ?? trackItemDetailsMapStore;
  const trackItemsMap = trackItemsMapProps ?? trackItemsMapStore;
  const trackItemIds = trackItemIdsProps ?? trackItemIdsStore;

  const mergedTrackItemsDeatilsMap = merge(trackItemsMap, trackItemDetailsMap);

  return (
    <AbsoluteFill
      className="bg-black overflow-hidden"
      style={{
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {trackItemIds.map((id) => {
        const item = mergedTrackItemsDeatilsMap[id];

        return SequenceItem[item.type as ItemType](item, {
          fps,
          width,
          height,
          currentFrame,
        });
      })}
    </AbsoluteFill>
  );
};

export default TimelinePlayer;
