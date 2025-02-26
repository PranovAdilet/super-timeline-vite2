import { IImage, ITrackItem, ScrollArea } from "@/shared";

const BasicImage = ({ trackItem }: { trackItem: ITrackItem & IImage }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Image
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4"></div>
      </ScrollArea>
    </div>
  );
};

export default BasicImage;
