import { ToggleGroup, ToggleGroupItem } from "@/shared";
import { Label } from "@radix-ui/themes/dist/cjs/components/context-menu";
import { useEffect, useState } from "react";

export const MirrorMedia = ({
  horizontal = false,
  vertical = false,
  onMirrorChange,
}: {
  horizontal?: boolean;
  vertical?: boolean;
  onMirrorChange?: ({ x, y }: { x: boolean; y: boolean }) => void;
}) => {
  const [mirror, setMirror] = useState({ horizontal, vertical });

  useEffect(() => {
    setMirror({ horizontal, vertical });
  }, [horizontal, vertical]);

  const handleHorizontalChange = (value: string) => {
    setMirror((prev) => ({
      ...prev,
      horizontal: value === "true",
    }));
    onMirrorChange?.({ x: value === "true", y: mirror.vertical });
  };

  const handleVerticalChange = (value: string) => {
    setMirror((prev) => ({
      ...prev,
      vertical: value === "true",
    }));
    onMirrorChange?.({ y: value === "true", x: mirror.horizontal });
  };

  return (
    <div className="flex flex-col gap-2 py-4">
      <Label className="font-sans text-xs font-semibold text-muted-foreground">
        Mirror
      </Label>
      <div className="flex gap-3">
        <ToggleGroup
          value={mirror.horizontal ? "true" : "false"}
          size="sm"
          type="single"
          onValueChange={handleHorizontalChange}
          variant={"secondary"}
        >
          <ToggleGroupItem
            value="true"
            aria-label="Toggle horizontal mirror"
          >
            Horizontal
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          value={mirror.vertical ? "true" : "false"}
          size="sm"
          className="grid grid-cols-2 text-sm"
          type="single"
          onValueChange={handleVerticalChange}
          variant={"secondary"}
        >
          <ToggleGroupItem
            value="true"
            aria-label="Toggle vertical mirror"
          >
            Vertical
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
