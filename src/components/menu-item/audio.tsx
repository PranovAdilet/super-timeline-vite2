import { Music } from "lucide-react";
import { useIsDraggingOverTimeline } from "@/shared/hooks";
import React from "react";
import { ADD_AUDIO } from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import { IAudio } from "@/shared/types";
import { ScrollArea, Draggable } from "@/shared/ui";
import { useDataStore } from "@/shared";

export const Audios = () => {
  const isDraggingOverTimeline = useIsDraggingOverTimeline();

  const audios = useDataStore((state) => state.audios);

  const handleAddAudio = (payload: Partial<IAudio>) => {
    eventBus.dispatch(ADD_AUDIO, {
      payload,
      options: {},
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Audios
      </div>
      <ScrollArea>
        <div className="flex flex-col px-2">
          {audios?.map((audio, index) => {
            return (
              <AudioItem
                shouldDisplayPreview={!isDraggingOverTimeline}
                handleAddAudio={handleAddAudio}
                audio={audio}
                key={index}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

const AudioItem = ({
  handleAddAudio,
  audio,
  shouldDisplayPreview,
}: {
  handleAddAudio: (payload: Partial<IAudio>) => void;
  audio: Partial<IAudio>;
  shouldDisplayPreview: boolean;
}) => {
  const style = React.useMemo(
    () => ({
      backgroundImage: `url(https://cdn.designcombo.dev/thumbnails/music-preview.png)`,
      backgroundSize: "cover",
      width: "70px",
      height: "70px",
    }),
    []
  );

  return (
    <Draggable
      data={audio}
      renderCustomPreview={<div style={style} />}
      shouldDisplayPreview={shouldDisplayPreview}
    >
      <div
        draggable={false}
        onClick={() => handleAddAudio(audio)}
        style={{
          display: "grid",
          gridTemplateColumns: "48px 1fr",
        }}
        className="flex cursor-pointer gap-4 px-2 py-1 text-sm hover:bg-zinc-800/70"
      >
        <div className="flex h-12 items-center justify-center bg-zinc-800">
          <Music width={16} />
        </div>
        <div className="flex flex-col justify-center">
          <div>{audio.name}</div>
          <div className="text-zinc-400">{audio.metadata?.author}</div>
        </div>
      </div>
    </Draggable>
  );
};
