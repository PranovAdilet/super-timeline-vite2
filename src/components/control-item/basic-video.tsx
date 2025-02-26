import { ScrollArea, Button } from "@/shared";
import { ITrackItem, IVideo } from "@/shared/types";
import { Crop } from "lucide-react";

const BasicVideo = ({ trackItem }: { trackItem: ITrackItem & IVideo }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Video
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={() => {
              console.log(trackItem);
            }}
          >
            <Crop size={18} />
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};

export default BasicVideo;
