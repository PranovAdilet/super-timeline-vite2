"use client";

import { AbsoluteFill } from "remotion";
import useStore from "@/shared/store/store";
import { SequenceItem } from "../sequence-item";
import { merge } from "lodash";

type ItemType = "text" | "image" | "video" | "audio";

const Composition = () => {
  const { trackItemIds, trackItemsMap, fps, trackItemDetailsMap } = useStore();

  const mergedTrackItemsDeatilsMap = merge(trackItemsMap, trackItemDetailsMap);

  return (
    <AbsoluteFill className="bg-black overflow-hidden">
      {trackItemIds.map((id) => {
        const item = mergedTrackItemsDeatilsMap[id];

        return SequenceItem[item.type as ItemType](item, {
          fps,
        });
      })}
    </AbsoluteFill>
  );
};

export default Composition;
