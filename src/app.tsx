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
import { AUDIOS, IMAGES, useDataStore, VIDEOS } from "./shared";

const stateManager = new StateManager();

export const App = () => {
  const { playerRef } = useStore();
  const setState = useDataStore((state) => state.setState);

  useTimelineEvents();

  const [data, setData] = useState<any>([]);
  // const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!data) return;
    eventBus.dispatch(SCENE_LOAD, {
      payload: data,
    });
  }, [data]);

  useEffect(() => {
    setState({
      audios: AUDIOS,
      videos: VIDEOS,
      images: IMAGES,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(data1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        <Scene stateManager={stateManager} />
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
  size: { width: 1920, height: 1080 },
  tracks: [
    {
      id: "8859c9e2-2f4e-4b11-89f0-1c20a7a7aca7",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "audio",
      items: ["222", "111", "2"],
      magnetic: false,
      static: false,
    },
    {
      id: "a803250d-3203-4d65-9fe7-ebb06561bacf",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "video",
      items: [
        "c208fea3-cbe2-4a23-a12c-5459c4e853d9",
        "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5",
        "56efda38-e743-43db-b2c0-e1aa46b46641",
      ],
      magnetic: false,
      static: false,
    },
    {
      id: "bdc41fcb-3f35-478c-8cb8-0a0b8c7949a0",
      items: ["3"],
      type: "audio",
      accepts: ["text", "audio", "helper", "video", "image"],
    },
  ],

  tracksSettings: {
    "8859c9e2-2f4e-4b11-89f0-1c20a7a7aca7": {
      id: "8743cb00-c733-4b92-8818-bca353c57f77",
      type: "tracksettings",
      trackId: "8859c9e2-2f4e-4b11-89f0-1c20a7a7aca7",
    },
    "a803250d-3203-4d65-9fe7-ebb06561bacf": {
      id: "3b08fc2a-f554-4c4d-a468-4280090e91e8",
      type: "tracksettings",
      trackId: "a803250d-3203-4d65-9fe7-ebb06561bacf",
    },
    "bdc41fcb-3f35-478c-8cb8-0a0b8c7949a0": {
      id: "3c881ae3-928b-48e4-9b94-49d178b970dc",
      type: "tracksettings",
      trackId: "bdc41fcb-3f35-478c-8cb8-0a0b8c7949a0",
    },
    "edf7c614-3c2b-46a4-aa02-baceceb05f85": {
      id: "9e74a6ed-58e1-4d66-a102-f41fa32738e2",
      type: "tracksettings",
      trackId: "edf7c614-3c2b-46a4-aa02-baceceb05f85",
    },
  },

  trackItemDetailsMap: {
    "2": {
      type: "audio",
      details: {
        src: "https://cdn.designcombo.dev/audio/Hope.mp3",
        duration: 112802,
        volume: 100,
      },
    },
    "3": {
      type: "audio",
      details: {
        src: "https://cdn.designcombo.dev/audio/Tenderness.mp3",
        duration: 123794.286,
        volume: 100,
      },
    },
    "111": {
      type: "audio",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\KhDhy5qKkppcfCMWV9md5w.mpeg",
        duration: 4080,
        volume: 100,
        text: "Voiceover",
      },
    },
    "222": {
      type: "audio",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\SQCTWQnVjRBzbUjCMyZd32.mpeg",
        duration: 4992,
        volume: 100,
        text: "Voiceover",
      },
    },
    "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5": {
      type: "video",
      details: {
        width: 800,
        height: 608,
        duration: 6050,
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\fdcKLDioCK6fNMFSaV9no9.mp4",
        volume: 100,
        top: "656px",
        left: "140px",
        text: "Video",
      },
    },
    "56efda38-e743-43db-b2c0-e1aa46b46641": {
      type: "video",
      details: {
        width: 800,
        height: 608,
        duration: 6050,
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\NarjF5LQKZ3RE8cg5BAEZa.mp4",
        volume: 100,
        top: "656px",
        left: "140px",
        text: "Video",
      },
    },
    "c208fea3-cbe2-4a23-a12c-5459c4e853d9": {
      type: "video",
      details: {
        width: 800,
        height: 608,
        duration: 6050,
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\LUB9JnQSSeVJdzRrq8PnAr.mp4",
        volume: 100,
        top: "656px",
        left: "140px",
        text: "Video",
      },
    },
  },
  trackItemIds: [
    "3",
    "c208fea3-cbe2-4a23-a12c-5459c4e853d9",
    "56efda38-e743-43db-b2c0-e1aa46b46641",
    "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5",
    "2",
    "222",
    "111",
  ],
  transitionsMap: {},
  trackItemsMap: {
    "2": {
      id: "2",
      name: "",
      type: "audio",
      display: { from: 9072, to: 121874 },
      trim: { from: 0, to: 112802 },
      metadata: { author: "Hugo Dujardin" },
      isMain: false,
      details: {
        src: "https://cdn.designcombo.dev/audio/Hope.mp3",
        duration: 112802,
        volume: 100,
      },
    },
    "3": {
      id: "3",
      name: "",
      type: "audio",
      display: { from: 0, to: 123794.28600000001 },
      trim: { from: 0, to: 123794.286 },
      metadata: { author: "Benjamin Tissot" },
      isMain: false,
      details: {
        src: "https://cdn.designcombo.dev/audio/Tenderness.mp3",
        duration: 123794.286,
        volume: 100,
      },
    },
    "111": {
      id: "111",
      name: "",
      type: "audio",
      display: { from: 4992, to: 9072 },
      trim: { from: 0, to: 4080 },
      metadata: { author: "Adilet" },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\KhDhy5qKkppcfCMWV9md5w.mpeg",
        duration: 4080,
        volume: 100,
        text: "Voiceover",
      },
    },
    "222": {
      id: "222",
      name: "",
      type: "audio",
      display: { from: 0, to: 4992 },
      trim: { from: 0, to: 4992 },
      metadata: { author: "Adilet2" },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\SQCTWQnVjRBzbUjCMyZd32.mpeg",
        duration: 4992,
        volume: 100,
        text: "Voiceover",
      },
    },
    "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5": {
      id: "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5",
      type: "video",
      preview:
        "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\MjU9BA9oBAcasKPWW89oAq.webp",
      display: { from: 12100, to: 18150 },
      trim: { from: 0, to: 6050 },
      isMain: false,
      details: {
        width: 800,
        height: 608,
        duration: 6050,
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\fdcKLDioCK6fNMFSaV9no9.mp4",
        volume: 100,
        top: "656px",
        left: "140px",
        text: "Video",
      },
    },
    "56efda38-e743-43db-b2c0-e1aa46b46641": {
      id: "56efda38-e743-43db-b2c0-e1aa46b46641",
      type: "video",
      preview:
        "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\br3G6fanEMrVZCXAmYpWdL.webp",
      display: { from: 6050.000000000006, to: 12100 },
      trim: { from: 0, to: 6050 },
      isMain: false,
      details: {
        width: 800,
        height: 608,
        duration: 6050,
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\NarjF5LQKZ3RE8cg5BAEZa.mp4",
        volume: 100,
        top: "656px",
        left: "140px",
        text: "Video",
      },
    },
    "c208fea3-cbe2-4a23-a12c-5459c4e853d9": {
      id: "c208fea3-cbe2-4a23-a12c-5459c4e853d9",
      type: "video",
      preview:
        "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\N8SF2nTVffFxn8fwA7VZZM.webp",
      display: { from: 0, to: 6050 },
      trim: { from: 0, to: 6050 },
      isMain: false,
      details: {
        width: 800,
        height: 608,
        duration: 6050,
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\LUB9JnQSSeVJdzRrq8PnAr.mp4",
        volume: 100,
        top: "656px",
        left: "140px",
        text: "Video",
      },
    },
  },
  transitionIds: [],
};

export const data2 = {
  id: "dtpMWWHEkZLIpTa4",
  fps: 30,

  size: { width: 1920, height: 1080 },

  transitionsMap: {},

  transitionIds: [],

  trackItemsMap: {
    "5923c95e-9996-4fef-ac4d-f538413d90d7": {
      id: "5923c95e-9996-4fef-ac4d-f538413d90d7",
      name: "",
      type: "text",
      display: { from: 0, to: 5000 },
      metadata: {},
      isMain: false,
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: 1.16,
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "#00000090",
        border: "none",
        textShadow: "none",
        text: "Every soul begins with a spark...",
        opacity: 100,
        width: 921.5999999999999,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "781.6281951219511px",
        left: "115.20000000000005px",
        height: 49.54360975609757,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "efeefe1c-8a22-4972-94a9-32e72167960f": {
      id: "efeefe1c-8a22-4972-94a9-32e72167960f",
      type: "image",
      name: "",
      display: { from: 0, to: 5000 },
      metadata: {},
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/14/13\\XfxCjwPq2iHWLPnnsTBp6m.webp",
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "85f4157e-dc83-4d9d-89df-1a9b422d0f76": {
      id: "85f4157e-dc83-4d9d-89df-1a9b422d0f76",
      name: "",
      type: "audio",
      display: { from: 0, to: 2136 },
      trim: { from: 0, to: 2136 },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/14/13\\PurbUrrToHzVj53dyNfpSu.mpeg",
        duration: 2136,
        volume: 100,
        text: "Every soul begins with a spark...",
      },
    },
    "b9e5723f-205c-42bf-87bd-e909d3c98337": {
      id: "b9e5723f-205c-42bf-87bd-e909d3c98337",
      name: "",
      type: "text",
      display: { from: 5000, to: 10000 },
      metadata: {},
      isMain: false,
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: 1.16,
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "#00000090",
        border: "none",
        textShadow: "none",
        text: "Your destiny lies within these ancient whispers.",
        opacity: 100,
        width: 921.5999999999999,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "781.6281951219511px",
        left: "115.20000000000005px",
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "695c748b-4027-4ddf-ba04-f3929b9a1afa": {
      id: "695c748b-4027-4ddf-ba04-f3929b9a1afa",
      type: "image",
      name: "",
      display: { from: 5000, to: 10000 },
      metadata: {},
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/14/13\\EgP4j9Pm8ERMSxEu8BGUJa.webp",
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1": {
      id: "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1",
      name: "",
      type: "audio",
      display: { from: 5000, to: 7880 },
      trim: { from: 0, to: 2880 },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/14/13\\fXcY6buvk6fXBDcbiRqhGF.mpeg",
        duration: 2880,
        volume: 100,
        text: "Your destiny lies within these ancient whispers.",
      },
    },
    "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e": {
      id: "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e",
      name: "",
      type: "text",
      display: { from: 10000, to: 15000 },
      metadata: {},
      isMain: false,
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "#00000090",
        border: "none",
        textShadow: "none",
        text: "I will harness this fire and rise beyond!",
        opacity: 100,
        width: 921.6,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "707.8399999999999px",
        left: "115.19999999999999px",
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240": {
      id: "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240",
      type: "image",
      name: "",
      display: { from: 10000, to: 15000 },
      metadata: {},
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/14/13\\8dKB6RVmt9QQC8GwXDy3U8.webp",
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "251574f7-350d-4c36-8cec-bb1c18c263b8": {
      id: "251574f7-350d-4c36-8cec-bb1c18c263b8",
      name: "",
      type: "audio",
      display: { from: 10000, to: 12544 },
      trim: { from: 0, to: 2544 },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/14/13\\8FZgKk7c8ds5gbZanBXMA5.mpeg",
        duration: 2544,
        volume: 100,
        text: "I will harness this fire and rise beyond!",
      },
    },
    "b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7": {
      id: "b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7",
      name: "",
      type: "audio",
      display: { from: 0, to: 15000 },
      trim: { from: 0, to: 15000 },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/music/2025/3/10/13\\5uArfrWTAWdLw6ECfjFhCM.mpeg",
        duration: null,
        volume: 100,
        text: "music",
      },
    },
  },
  trackItemIds: [
    "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1",
    "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e",
    "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240",
    "251574f7-350d-4c36-8cec-bb1c18c263b8",
    "b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7",
    "5923c95e-9996-4fef-ac4d-f538413d90d7",
    "efeefe1c-8a22-4972-94a9-32e72167960f",
    "85f4157e-dc83-4d9d-89df-1a9b422d0f76",
    "b9e5723f-205c-42bf-87bd-e909d3c98337",
    "695c748b-4027-4ddf-ba04-f3929b9a1afa",
  ],
  trackItemDetailsMap: {
    "5923c95e-9996-4fef-ac4d-f538413d90d7": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: 1.16,
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "#00000090",
        border: "none",
        textShadow: "none",
        text: "Every soul begins with a spark...",
        opacity: 100,
        width: 921.5999999999999,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "781.6281951219511px",
        left: "115.20000000000005px",
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "efeefe1c-8a22-4972-94a9-32e72167960f": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/14/13\\XfxCjwPq2iHWLPnnsTBp6m.webp",
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "85f4157e-dc83-4d9d-89df-1a9b422d0f76": {
      type: "audio",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/14/13\\PurbUrrToHzVj53dyNfpSu.mpeg",
        duration: 2136,
        volume: 100,
        text: "Every soul begins with a spark...",
      },
    },
    "b9e5723f-205c-42bf-87bd-e909d3c98337": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: 1.16,
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "#00000090",
        border: "none",
        textShadow: "none",
        text: "Your destiny lies within these ancient whispers.",
        opacity: 100,
        width: 921.5999999999999,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "781.6281951219511px",
        left: "115.20000000000005px",
        height: 49.54360975609757,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "695c748b-4027-4ddf-ba04-f3929b9a1afa": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/14/13\\EgP4j9Pm8ERMSxEu8BGUJa.webp",
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1": {
      type: "audio",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/14/13\\fXcY6buvk6fXBDcbiRqhGF.mpeg",
        duration: 2880,
        volume: 100,
        text: "Your destiny lies within these ancient whispers.",
      },
    },
    "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "#00000090",
        border: "none",
        textShadow: "none",
        text: "I will harness this fire and rise beyond!",
        opacity: 100,
        width: 921.6,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "707.8399999999999px",
        left: "115.19999999999999px",
        // height: 197.12,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/14/13\\8dKB6RVmt9QQC8GwXDy3U8.webp",
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "251574f7-350d-4c36-8cec-bb1c18c263b8": {
      type: "audio",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/14/13\\8FZgKk7c8ds5gbZanBXMA5.mpeg",
        duration: 2544,
        volume: 100,
        text: "I will harness this fire and rise beyond!",
      },
    },
    "b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7": {
      type: "audio",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/music/2025/3/10/13\\5uArfrWTAWdLw6ECfjFhCM.mpeg",
        duration: null,
        volume: 100,
        text: "music",
      },
    },
  },
  tracks: [
    {
      id: "1",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "text",
      items: [
        "5923c95e-9996-4fef-ac4d-f538413d90d7",
        "b9e5723f-205c-42bf-87bd-e909d3c98337",
        "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e",
      ],
      magnetic: false,
      static: false,
    },
    {
      id: "2",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "image",
      items: [
        "efeefe1c-8a22-4972-94a9-32e72167960f",
        "695c748b-4027-4ddf-ba04-f3929b9a1afa",
        "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240",
      ],
      magnetic: false,
      static: false,
    },
    {
      id: "3",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "audio",
      items: [
        "85f4157e-dc83-4d9d-89df-1a9b422d0f76",
        "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1",
        "251574f7-350d-4c36-8cec-bb1c18c263b8",
      ],
      magnetic: false,
      static: false,
    },
    {
      id: "5",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "audio",
      items: ["b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7"],
      magnetic: false,
      static: false,
    },
  ],
};

// text
// image/video
// soundFX
// voiceover
