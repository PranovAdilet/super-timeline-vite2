import {
  ScrollArea,
  ToggleGroup,
  ToggleGroupItem,
  TrackSettings,
} from "@/shared";
import { useEffect, useState } from "react";

const BasicTrack = ({ trackItem }: { trackItem: TrackSettings }) => {
  //   {
  //     id: "e77389c0-608a-41f9-b300-6b7fed17afc0";
  //     type: "track";
  //     trackId: "303003-1233132312-asaas3-qweewqwqqs"
  //   } = trackItem

  const [properties, setProperties] = useState({
    ...trackItem,
    accepts: ["text"],
  });

  const handleChange = (accepts: string[]) => {
    setProperties({ ...properties, accepts });
  };

  console.log(properties);

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Track
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <AcceptsTrack
            value={properties.accepts}
            onChange={handleChange}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default BasicTrack;

const AcceptsTrack = ({
  value,
  onChange,
}: {
  value: string[];
  onChange: (v: string[]) => void;
}) => {
  const [localValue, setLocalValue] = useState<string[]>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    <ToggleGroup
      size="sm"
      value={localValue}
      className="grid grid-cols-4 gap-2 px-2"
      type="multiple"
      onValueChange={(v) => onChange(v)}
      variant={"secondary"}
    >
      <ToggleGroupItem
        size="sm"
        value="text"
        aria-label="Toggle left"
      >
        Text
      </ToggleGroupItem>
      <ToggleGroupItem
        value="image"
        aria-label="Toggle italic"
      >
        Image
      </ToggleGroupItem>
      <ToggleGroupItem
        value="video"
        aria-label="Toggle strikethrough"
      >
        Video
      </ToggleGroupItem>
      <ToggleGroupItem
        value="audio"
        aria-label="Toggle strikethrough"
      >
        Audio
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
