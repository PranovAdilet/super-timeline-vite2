import { EDIT_OBJECT, eventBus } from "@/classes";
import { ScrollArea } from "@/shared";
import { ITrackItem, IVideo } from "@/shared/types";
import { useEffect, useState } from "react";
import Opacity from "./common/opacity";
import Volume from "./common/volume";

import Zoom from "./common/zoom";

const BasicVideo = ({ trackItem }: { trackItem: ITrackItem & IVideo }) => {
  const [properties, setProperties] = useState(trackItem);

  useEffect(() => {
    setProperties({
      ...trackItem,
      details: {
        ...trackItem.details,
        volume: trackItem.details.volume ?? 100,
        opacity: trackItem.details.opacity ?? 100,
        zoom: trackItem?.details.zoom,
      },
    });
  }, [trackItem]);

  const handleChangeVolume = (v: number) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            volume: v,
          },
        },
      },
    });

    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          volume: v,
        },
      };
    });
  };

  const handleChangeOpacity = (v: number) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            opacity: v,
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          opacity: v,
        },
      };
    });
  };

  const handleZoomTypeChange = (type: string) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            zoom: {
              ...trackItem.details.zoom,
              type,
            },
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          zoom: {
            ...prev.details.zoom,
            type,
          },
        },
      };
    });
  };

  const handleZoomEaseChange = (ease: string) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            zoom: {
              ...trackItem.details.zoom,
              ease,
            },
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          zoom: {
            ...prev.details.zoom,
            ease,
          },
        },
      };
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Video
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <Volume
            onChange={(v: number) => handleChangeVolume(v)}
            value={properties.details.volume!}
          />

          <Opacity
            onChange={(v: number) => handleChangeOpacity(v)}
            value={properties.details.opacity!}
          />
          <Zoom
            type={properties.details.zoom?.type ?? "none"}
            ease={properties.details.zoom?.ease ?? "in"}
            onTypeChange={handleZoomTypeChange}
            onEaseChange={handleZoomEaseChange}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default BasicVideo;
