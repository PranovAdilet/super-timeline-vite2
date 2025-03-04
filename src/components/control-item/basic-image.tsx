import { EDIT_OBJECT, eventBus } from "@/classes";
import { IImage, ITrackItem, ScrollArea, useLayoutStore } from "@/shared";
import { useEffect, useState } from "react";
import Opacity from "./common/opacity";
import Blur from "./common/blur";
import Brightness from "./common/brightness";

const BasicImage = ({ trackItem }: { trackItem: ITrackItem & IImage }) => {
  const [properties, setProperties] = useState(trackItem);
  useEffect(() => {
    setProperties({
      ...trackItem,
      details: {
        ...trackItem.details,
        brightness: trackItem.details?.brightness ?? 100,
        opacity: trackItem.details?.opacity ?? 100,
        blur: trackItem.details?.blur ?? 0,
      },
    });
  }, [trackItem]);

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

  const onChangeBlur = (v: number) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            blur: v,
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          blur: v,
        },
      };
    });
  };
  const onChangeBrightness = (v: number) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            brightness: v,
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          brightness: v,
        },
      };
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Image
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <Opacity
            onChange={(v: number) => handleChangeOpacity(v)}
            value={properties.details.opacity!}
          />
          <Blur
            onChange={(v: number) => onChangeBlur(v)}
            value={properties.details.blur!}
          />
          <Brightness
            onChange={(v: number) => onChangeBrightness(v)}
            value={properties.details.brightness!}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default BasicImage;
