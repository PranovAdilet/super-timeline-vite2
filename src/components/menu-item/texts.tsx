import { ADD_TEXT } from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import { Button } from "@/shared/ui";
import { DEFAULT_FONT } from "@/shared/utils";
import { v4 as uuidv4 } from "uuid";

export const Texts = () => {
  const handleAddText = () => {
    eventBus.dispatch(ADD_TEXT, {
      payload: {
        id: uuidv4(),
        display: {
          from: 0,
          to: 5000,
        },
        details: {
          text: "Heading and some body",
          fontSize: 120,
          width: 600,
          fontUrl: DEFAULT_FONT.url,
          fontFamily: DEFAULT_FONT.postScriptName,
          color: "#ffffff",
          wordWrap: "break-word",
          textAlign: "center",
          borderWidth: 0,
          borderColor: "#000000",
          boxShadow: {
            color: "#ffffff",
            x: 0,
            y: 0,
            blur: 0,
          },
        },
      },
      options: {},
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Text
      </div>
      <div className="flex flex-col gap-2 px-4">
        <Button
          draggable={false}
          onClick={handleAddText}
          variant="secondary"
          className="w-full"
        >
          Add text
        </Button>
      </div>
    </div>
  );
};
