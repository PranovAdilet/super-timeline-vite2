import { ADD_VIDEO } from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import { VIDEOS } from "@/shared/data";
import { useIsDraggingOverTimeline } from "@/shared/hooks";
import { IVideo } from "@/shared/types";
import { Draggable, ScrollArea } from "@/shared/ui";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Videos = () => {
  const isDraggingOverTimeline = useIsDraggingOverTimeline();

  const handleAddVideo = (payload: Partial<IVideo>) => {
    eventBus.dispatch(ADD_VIDEO, {
      payload,
      options: {
        resourceId: "main",
      },
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Videos
      </div>
      <ScrollArea>
        <div className="masonry-sm px-4">
          {VIDEOS.map((video, index) => {
            return (
              <VideoItem
                key={index}
                video={video}
                shouldDisplayPreview={!isDraggingOverTimeline}
                handleAddVideo={handleAddVideo}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

const VideoItem = ({
  handleAddVideo,
  video,
  shouldDisplayPreview,
}: {
  handleAddVideo: (payload: Partial<IVideo>) => void;
  video: Partial<IVideo>;
  shouldDisplayPreview: boolean;
}) => {
  const style = React.useMemo(
    () => ({
      backgroundImage: `url(${video.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px",
    }),
    [video.preview]
  );

  return (
    <Draggable
      data={video}
      renderCustomPreview={
        <div
          style={style}
          className="draggable"
        />
      }
      shouldDisplayPreview={shouldDisplayPreview}
    >
      <div
        onClick={() =>
          handleAddVideo({
            ...video,
            id: uuidv4(),
            details: {
              src: video.details!.src,
              ...video.details,
            },
          } as IVideo)
        }
        className="flex w-full items-center justify-center overflow-hidden bg-background pb-2"
      >
        <img
          draggable={false}
          src={video.preview}
          className="h-full w-full rounded-md object-cover"
          alt="image"
        />
      </div>
    </Draggable>
  );
};
