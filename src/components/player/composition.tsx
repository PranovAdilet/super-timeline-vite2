"use client";

import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import useStore from "../../shared/store/store";
import { SequenceItem } from "../sequence-item";
import { merge } from "lodash-es";

import { ITrackItem } from "@/shared";

type ItemType = "text" | "image" | "video" | "audio";

type Props = {
  trackItemIds?: string[];
  trackItemsMap?: Record<string, ITrackItem>;
  trackItemDetailsMap?: Record<string, any>;
};
const Composition = ({
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

  // const handleChange = () => {
  //   const updatedObjects = editor?.exportObjects();
  // };

  // const { handleReady, selectedObjects, editor } = useFabricEditor({
  //   onChange: handleChange,
  // });

  // useEffect(() => {
  //   if (selectedObjects?.length === 0) {
  //     setState({ activeIds: [] });
  //     eventBus.dispatch(LAYER_SELECTION, {
  //       payload: {
  //         activeIds: [],
  //       },
  //     });
  //     stateManager.updateState(
  //       {
  //         activeIds: [],
  //       },
  //       {
  //         updateHistory: false,
  //         kind: "layer:selection",
  //       }
  //     );
  //   } else if (selectedObjects?.[0] instanceof Textbox) {
  //     const activeIds = [selectedObjects[0].id];
  //     setState({ activeIds });
  //     eventBus.dispatch(LAYER_SELECTION, {
  //       payload: {
  //         activeIds,
  //       },
  //     });
  //     stateManager.updateState(
  //       {
  //         activeIds: activeIds,
  //       },
  //       {
  //         updateHistory: false,
  //         kind: "layer:selection",
  //       }
  //     );
  //   }
  // }, [selectedObjects]);

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
          // handleReady,
          currentFrame,
        });
      })}
    </AbsoluteFill>
  );
};

export default Composition;
