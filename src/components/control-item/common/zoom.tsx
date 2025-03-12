import { Button, Popover } from "@/shared";
import { Flex } from "@radix-ui/themes";
import { Label } from "@radix-ui/themes/dist/cjs/components/context-menu";

const Zoom = ({
  type,
  onTypeChange,
  ease,
  onEaseChange,
}: {
  type: string;
  onTypeChange: (v: string) => void;
  ease: string;
  onEaseChange: (v: string) => void;
}) => {
  return (
    <Flex
      direction="column"
      gap="3"
      pb="3"
    >
      <Label className="font-sans text-xs font-semibold text-muted-foreground">
        Dynamic Zoom
      </Label>
      <ZoomDisplay
        value={type}
        onZoomChange={onTypeChange}
        options={zoomTypes}
      />
      <Label className="font-sans text-xs font-semibold text-muted-foreground">
        Ease Zoom
      </Label>
      <ZoomDisplay
        value={ease}
        onZoomChange={onEaseChange}
        options={zoomEasings}
      />
    </Flex>
  );
};

const ZoomDisplay = ({
  value,
  onZoomChange,
  options,
}: {
  value: string;
  onZoomChange: (value: string) => void;
  options: string[];
}) => {
  return (
    <Popover
      trigger={
        <Button
          className="flex w-full items-center justify-between text-sm"
          variant="secondary"
        >
          <div className="w-full text-left">
            <p className="truncate">{value}</p>
          </div>
        </Button>
      }
    >
      {options.map((value, index) => (
        <div
          className="flex cursor-pointer items-center px-2 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-lg"
          key={index}
          onClick={() => onZoomChange(value)}
        >
          {value}
        </div>
      ))}
    </Popover>
  );
};

export default Zoom;

const zoomTypes = ["in", "out", "none"];

const zoomEasings = ["ease-in", "ease-out", "ease-in-out", "linear"];
