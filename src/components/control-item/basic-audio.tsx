import { IAudio, ITrackItem, ScrollArea } from "@/shared";
import Volume from "./common/volume";
import { useEffect, useState } from "react";
import { EDIT_OBJECT, eventBus } from "@/classes";

const BasicAudio = ({ trackItem }: { trackItem: ITrackItem & IAudio }) => {
  const [properties, setProperties] = useState(trackItem);

  useEffect(() => {
    setProperties({
      ...trackItem,
      details: {
        ...trackItem.details,
        volume: trackItem.details?.volume ?? 100,
      },
    });
  }, [trackItem.id]);

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

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Audio
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <Volume
            onChange={(v: number) => handleChangeVolume(v)}
            value={properties.details.volume!}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default BasicAudio;
