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
      setData(data2);
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
  tracks: [
    {
      id: "222",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "text",
      items: ["d75c944f-05cf-4af0-aea8-576b33cf4afb"],
      magnetic: false,
      static: false,
    },
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
    "d75c944f-05cf-4af0-aea8-576b33cf4afb": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 120,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Heading and some body",
        opacity: 100,
        width: 600,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "324px",
        left: "660px",
        height: 432,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
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
    "d75c944f-05cf-4af0-aea8-576b33cf4afb",
  ],
  transitionsMap: {},
  trackItemsMap: {
    "d75c944f-05cf-4af0-aea8-576b33cf4afb": {
      id: "d75c944f-05cf-4af0-aea8-576b33cf4afb",
      name: "",
      type: "text",
      display: { from: 0, to: 5000 },
      metadata: {},
      isMain: false,
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: 120,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Heading and some body",
        opacity: 100,
        width: 600,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "324px",
        left: "660px",
        height: 432,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "1": {
      id: "1",
      name: "",
      type: "audio",
      display: { from: 0, to: 120242.833 },
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
    "5923c95e-9996-4fef-ac4d-f538413d90d7",
    "efeefe1c-8a22-4972-94a9-32e72167960f",
    "85f4157e-dc83-4d9d-89df-1a9b422d0f76",
    "b9e5723f-205c-42bf-87bd-e909d3c98337",
    "695c748b-4027-4ddf-ba04-f3929b9a1afa",
    "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1",
    "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e",
    "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240",
    "251574f7-350d-4c36-8cec-bb1c18c263b8",
    "b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7",
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
