import useTimelineEvents from "@/classes/timeline/events/use-timeline-events";
import Timeline from "@/components/timeline";
import useStore from "@/shared/store/store";
import MenuList from "@/components/menu-list";
import { MenuItem } from "@/components/menu-item";
import Navbar from "@/components/navbar";
import { Scene } from "@/components/scene";
import { StateManager } from "@/classes/state";
import { useEffect, useState } from "react";
import "./index.css";
import { eventBus, SCENE_LOAD } from "./classes";
import ControlList from "./components/control-list";
import { ControlItem } from "./components/control-item";

const stateManager = new StateManager();

export const App = () => {
  const { playerRef } = useStore();

  useTimelineEvents();

  const [data, setData] = useState<any>([]);
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   if (!data) return;
  //   eventBus.dispatch(SCENE_LOAD, {
  //     payload: data,
  //   });
  // }, [data]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setData(data1);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col bg-background ">
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <MenuList />
        <MenuItem />
        <ControlList />
        <ControlItem />
        <Scene />
      </div>
      <div className="h-70 w-full ">
        {/* <Button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          VISIBLE
        </Button> */}
        {playerRef && <Timeline stateManager={stateManager} />}
      </div>
    </div>
  );
};

export const data1 = {
  id: "dtpMWWHEkZLIpTa4",
  fps: 30,
  tracks: [
    {
      id: "c6ee958e-742a-45b1-8877-34f48e77c67a",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "video",
      items: ["eb8c7a4d-bf49-4028-8725-00b4f74e8b02"],
      magnetic: false,
      static: false,
    },
    {
      id: "a9212ccc-e743-4407-bf7b-50adb34578bd",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "audio",
      items: ["1"],
      magnetic: false,
      static: false,
    },
    {
      id: "37cf9676-5050-4079-b2d3-f9e032c65a9b",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "image",
      items: ["b8679617-ca1c-4091-b995-f55480dae721"],
      magnetic: false,
      static: false,
    },
  ],
  size: { width: 1920, height: 1080 },
  trackItemDetailsMap: {
    "1": {
      type: "audio",
      details: {
        src: "https://cdn.designcombo.dev/audio/Dawn%20of%20change.mp3",
        duration: 117242.833,
        volume: 100,
        text: "Voiceover",
      },
    },
    "b8679617-ca1c-4091-b995-f55480dae721": {
      type: "image",
      details: {
        src: "https://ik.imagekit.io/wombo/images/img4.jpg",
        width: 1280,
        height: 1920,
        opacity: 100,
        transform: "scale(0.84375)",
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
        left: "-100px",
      },
    },
    "eb8c7a4d-bf49-4028-8725-00b4f74e8b02": {
      type: "video",
      details: {
        duration: 14000,
        width: 1280,
        height: 720,
        src: "https://cdn.designcombo.dev/videos/demo-video-1.mp4",
        volume: 100,
        top: "600px",
        left: "-100px",
        text: "Scene",
      },
    },
  },
  trackItemIds: [
    "b8679617-ca1c-4091-b995-f55480dae721",
    "1",
    "eb8c7a4d-bf49-4028-8725-00b4f74e8b02",
  ],
  transitionsMap: {},
  trackItemsMap: {
    "1": {
      id: "1",
      name: "",
      type: "audio",
      display: { from: 3000, to: 120242.833 },
      trim: { from: 0, to: 120242.833 },
      metadata: { author: "Roman Senyk" },
      isMain: false,
      details: {
        src: "https://cdn.designcombo.dev/audio/Dawn%20of%20change.mp3",
        duration: 117242.833,
        volume: 100,
        text: "Voiceover",
      },
    },
    "b8679617-ca1c-4091-b995-f55480dae721": {
      id: "b8679617-ca1c-4091-b995-f55480dae721",
      type: "image",
      name: "",
      display: { from: 0, to: 10000 },
      metadata: {},
      isMain: false,
      details: {
        src: "https://ik.imagekit.io/wombo/images/img4.jpg",
        width: 1280,
        height: 1920,
        opacity: 100,
        transform: "scale(0.84375)",
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
        left: "-100px",
      },
    },
    "eb8c7a4d-bf49-4028-8725-00b4f74e8b02": {
      id: "eb8c7a4d-bf49-4028-8725-00b4f74e8b02",
      type: "video",
      preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-1.png",
      duration: 14000,
      display: { from: 3000, to: 15000 },
      trim: { from: 0, to: 12000 },
      isMain: false,
      details: {
        width: 1280,
        height: 720,
        duration: 12000,
        src: "https://cdn.designcombo.dev/videos/demo-video-1.mp4",
        volume: 100,
        top: "600px",
        left: "-100px",
        text: "Scene",
      },
    },
  },
  transitionIds: [],
};

// text
// image/video
// soundFX
// voiceover
