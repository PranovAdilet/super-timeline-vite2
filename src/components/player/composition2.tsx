"use client";

import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import useStore from "../../shared/store/store";
import { SequenceItem } from "../sequence-item";
import { merge } from "lodash-es";

import { ITrackItem, ITransition } from "@/shared";
import { groupTrackItems } from "@/shared/utils/track-items";
import { TransitionSeries } from "@remotion/transitions";
import { populateTransitionIds } from "@/shared/utils/scene";
import { TransitionSequenceItem } from "../transition-sequence-item";
import { Transitions } from "./transitions";
import "./styles.css";

type ItemType = "text" | "image" | "video" | "audio";

type Props = {
  trackItemIds?: string[];
  trackItemsMap?: Record<string, ITrackItem>;
  trackItemDetailsMap?: Record<string, any>;
  transitionsMap?: Record<string, ITransition>;
};
const Composition = ({
  trackItemIds: trackItemIdsProps,
  trackItemsMap: trackItemsMapProps,
  trackItemDetailsMap: trackItemDetailsMapProps,
  transitionsMap: transitionsMapProps,
}: Props) => {
  const {
    trackItemIds: trackItemIdsStore,
    trackItemsMap: trackItemsMapStore,
    fps,
    trackItemDetailsMap: trackItemDetailsMapStore,
    transitionsMap: transitionsMapStore,
    size,
  } = useStore();

  const { width, height } = useVideoConfig();

  const currentFrame = useCurrentFrame();

  const trackItemDetailsMap =
    trackItemDetailsMapProps ?? trackItemDetailsMapStore;
  const trackItemsMap = trackItemsMapProps ?? trackItemsMapStore;
  const trackItemIds = trackItemIdsProps ?? trackItemIdsStore;
  const transitionsMap = transitionsMapProps ?? transitionsMapStore;

  const mergedTrackItemsDeatilsMap = merge(trackItemsMap, trackItemDetailsMap);

  const groupedItems = groupTrackItems({
    trackItemIds,
    transitionsMap,
    trackItemsMap: mergedTrackItemsDeatilsMap,
  });

  return (
    <AbsoluteFill
      className="bg-black overflow-hidden"
      style={{
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {groupedItems.map((group, index) => {
        if (group.length === 1) {
          const item = mergedTrackItemsDeatilsMap[group[0]];
          return SequenceItem[item.type as ItemType](item, {
            fps,
            width,
            height,
            // handleReady,
            currentFrame,
          });
        }
        const firstTrackItem = mergedTrackItemsDeatilsMap[group[0]];
        const from = (firstTrackItem.display.from / 1000) * fps;
        return (
          <TransitionSeries
            from={from}
            key={index}
          >
            {populateTransitionIds(group).map((id, index) => {
              if (index % 2 === 0) {
                const item = mergedTrackItemsDeatilsMap[id];
                const containTransition = Object.values(transitionsMap).find(
                  (t) => t.toId === id && true
                );
                return TransitionSequenceItem[item.type as ItemType](item, {
                  fps,
                  currentFrame,
                  containTransition,
                });
              } else {
                const transition: ITransition = transitionsMap[id];
                const durationInFrames =
                  ((transition.duration / 1000) * fps) / 2;

                return Transitions[transition.kind]({
                  durationInFrames,
                  ...size,
                  id: id,
                  direction: transition.direction,
                });
              }
            })}
          </TransitionSeries>
        );
      })}
    </AbsoluteFill>
  );
};

export default Composition;
