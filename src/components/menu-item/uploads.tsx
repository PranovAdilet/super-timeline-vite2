import {
  ADD_AUDIO,
  ADD_IMAGE,
  ADD_VIDEO,
} from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import {
  Button,
  ScrollArea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui";
import { UploadIcon } from "lucide-react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const Uploads = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    handleFileUpload(newFiles);
  };

  const handleFileUpload = async (files: File[]) => {
    const type = files[0].type;

    if (type.includes("audio")) {
      eventBus.dispatch(ADD_AUDIO, {
        payload: {
          id: uuidv4(),
          details: {
            src: URL.createObjectURL(files[0]),
            volume: 50,
          },
        },
      });
    }
    if (type.includes("video")) {
      eventBus.dispatch(ADD_VIDEO, {
        payload: {
          id: uuidv4(),
          display: {
            from: 2000,
            to: 7000,
          },
          details: {
            src: URL.createObjectURL(files[0]),
            name: files[0].name,
          },
        },
      });
    }
    if (type.includes("image")) {
      eventBus.dispatch(ADD_IMAGE, {
        payload: {
          id: uuidv4(),
          details: {
            src: URL.createObjectURL(files[0]),
          },
        },
      });
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Your media
      </div>
      <input
        ref={inputFileRef}
        id="file-upload-handle"
        type="file"
        accept="audio/*,video/*,image/*"
        onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
        className="hidden"
      />

      <div className="px-4 py-2">
        <div>
          <Tabs
            defaultValue="projects"
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="projects">Project</TabsTrigger>
              <TabsTrigger value="workspace">Workspace</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <Button
                onClick={() => {
                  inputFileRef.current?.click();
                }}
                className="flex w-full gap-2"
                variant="secondary"
              >
                <UploadIcon size={16} /> Upload
              </Button>
              <div></div>
            </TabsContent>
            <TabsContent value="workspace">
              <Button
                onClick={() => {
                  inputFileRef.current?.click();
                }}
                className="flex w-full gap-2"
                variant="secondary"
              >
                <UploadIcon size={16} /> Upload
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <ScrollArea>
        <div className="masonry-sm px-4"></div>
      </ScrollArea>
    </div>
  );
};
