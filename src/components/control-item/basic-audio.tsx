import { IAudio, ITrackItem, ScrollArea } from "@/shared";

const BasicAudio = ({ trackItem }: { trackItem: ITrackItem & IAudio }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Audio
      </div>
      <ScrollArea className="h-full"></ScrollArea>
    </div>
  );
};

export default BasicAudio;
