import {
  HISTORY_REDO,
  HISTORY_UNDO,
  SCENE_RESIZE,
} from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import { Button, Popover } from "@/shared/ui";
import { Icons } from "../menu-list/icons";

export default function Navbar() {
  const handleUndo = () => {
    eventBus.dispatch(HISTORY_UNDO);
  };

  const handleRedo = () => {
    eventBus.dispatch(HISTORY_REDO);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr 320px",
      }}
      className="pointer-events-none absolute left-0 right-0 top-0 z-[205] flex h-[72px] items-center px-2"
    >
      <div className="pointer-events-auto flex h-14 items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-background">
          {/* <img
            src={logo.src}
            alt="logo"
            className="p-1"
          /> */}
        </div>
        <div className="flex h-12 items-center bg-background px-1.5">
          <Button
            onClick={handleUndo}
            className="text-muted-foreground"
            variant="ghost"
            size="icon"
          >
            <Icons.undo width={20} />
          </Button>
          <Button
            onClick={handleRedo}
            className="text-muted-foreground"
            variant="ghost"
            size="icon"
          >
            <Icons.redo width={20} />
          </Button>
        </div>
      </div>
      <div className="pointer-events-auto flex h-14 items-center justify-center gap-2">
        <div className="flex h-12 items-center gap-4 rounded-md bg-background px-2.5">
          <div className="px-1 text-sm font-medium">Untitled video</div>
          <ResizeVideo />
        </div>
      </div>
    </div>
  );
}

interface ResizeOptionProps {
  label: string;
  icon: string;
  value: ResizeValue;
  description: string;
}

interface ResizeValue {
  width: number;
  height: number;
  name: string;
}

const RESIZE_OPTIONS: ResizeOptionProps[] = [
  {
    label: "16:9",
    icon: "landscape",
    description: "YouTube ads",
    value: {
      width: 1920,
      height: 1080,
      name: "16:9",
    },
  },
  {
    label: "9:16",
    icon: "portrait",
    description: "TikTok, YouTube Shorts",
    value: {
      width: 1080,
      height: 1920,
      name: "9:16",
    },
  },
  {
    label: "1:1",
    icon: "square",
    description: "Instagram, Facebook posts",
    value: {
      width: 1080,
      height: 1080,
      name: "1:1",
    },
  },
];

export const ResizeVideo = () => {
  const handleResize = (options: ResizeValue) => {
    eventBus.dispatch(SCENE_RESIZE, {
      payload: {
        ...options,
      },
    });
  };
  return (
    <div className="text-sm">
      <Popover
        trigger={
          <Button
            className="border border-border"
            variant="secondary"
          >
            Resize
          </Button>
        }
      >
        {RESIZE_OPTIONS.map((option, index) => (
          <ResizeOption
            key={index}
            label={option.label}
            icon={option.icon}
            value={option.value}
            handleResize={handleResize}
            description={option.description}
          />
        ))}
      </Popover>
    </div>
  );
};

const ResizeOption = ({
  label,
  icon,
  value,
  description,
  handleResize,
}: ResizeOptionProps & { handleResize: (payload: ResizeValue) => void }) => {
  const Icon = Icons[icon as "text"];
  return (
    <div
      onClick={() => handleResize(value)}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-zinc-50/10"
    >
      <div className="w-8 text-muted-foreground">
        <Icon size={20} />
      </div>
      <div>
        <div>{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
};
