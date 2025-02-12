import {
  HISTORY_REDO,
  HISTORY_UNDO,
} from "@/classes/timeline/events/constants-events";
import eventBus from "@/classes/timeline/events/event-bus";
import { Button } from "@/shared/ui";
import { Icons } from "../menu-list/icons";
import logo from "@/../public/logo.png";

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
    </div>
  );
}
