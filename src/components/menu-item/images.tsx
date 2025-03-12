import React from "react";
import eventBus from "@/classes/timeline/events/event-bus";
import { ADD_IMAGE } from "@/classes/timeline/events/constants-events";
import { IImage } from "@/shared/types";
import { useIsDraggingOverTimeline } from "@/shared/hooks";
import { Draggable, ScrollArea } from "@/shared/ui";
import { v4 as uuidv4 } from "uuid";
import { useDataStore } from "@/shared";

export const Images = () => {
  const isDraggingOverTimeline = useIsDraggingOverTimeline();

  const images = useDataStore((state) => state.images);

  const handleAddImage = (payload: Partial<IImage>) => {
    eventBus.dispatch(ADD_IMAGE, {
      payload,
      options: {
        trackId: "main",
      },
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Photos
      </div>
      <ScrollArea>
        <div className="masonry-sm px-4">
          {images?.map((image, index) => {
            return (
              <ImageItem
                key={index}
                image={image}
                shouldDisplayPreview={!isDraggingOverTimeline}
                handleAddImage={handleAddImage}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

const ImageItem = ({
  handleAddImage,
  image,
  shouldDisplayPreview,
}: {
  handleAddImage: (payload: Partial<IImage>) => void;
  image: Partial<IImage>;
  shouldDisplayPreview: boolean;
}) => {
  const style = React.useMemo(
    () => ({
      backgroundImage: `url(${image.preview})`,
      backgroundSize: "cover",
      width: "80px",
      height: "80px",
    }),
    [image.preview]
  );

  return (
    <Draggable
      data={image}
      renderCustomPreview={<div style={style} />}
      shouldDisplayPreview={shouldDisplayPreview}
    >
      <div
        onClick={() =>
          handleAddImage({
            id: uuidv4(),
            details: {
              src: image.details!.src,
            },
          } as IImage)
        }
        className="flex w-full items-center justify-center overflow-hidden bg-background pb-2"
      >
        <img
          draggable={false}
          src={image.preview}
          className="h-full w-full rounded-md object-cover"
          alt="image"
        />
      </div>
    </Draggable>
  );
};
