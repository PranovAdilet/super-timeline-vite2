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

const dat = {
  id: "dtpMWWHEkZLIpTa4",
  fps: 30,
  size: {
    width: 1280,
    height: 720,
  },
  trackItemDetailsMap: {
    "023a0443-0f5e-426b-96e1-f6e0b699dcec": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/FsYPz4exntuEwETiUZroXD.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "1edf0b36-b6f0-457a-8d53-59fd5da1a2cd": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Welcome to Brewio, where every cup is a new beginning.",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "296b1b94-7249-4f9a-a3b6-28a9854e0222": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/RAjYcUYyaQugYR8qEuVc8e.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "6d34ab61-4bec-43b4-9af6-bd667de72642": {
      type: "voiceover",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/Bu3poDVdWpiXNo2b3aRcxo.mpeg",
        duration: 3312,
        volume: 100,
      },
    },
    "e4ee4255-3f0f-493b-aee9-83fac11d92b8": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/UiFXnznFY4xkVLGnJV8Nrr.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "bf79b1fd-215d-42ef-8687-a310307d2470": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/J35be7sKNL8RL27n9Mj4nw.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "bacb5f01-d6ef-4ac1-ae50-36b8639ed597": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "I got this!",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "678152bf-1c18-4969-952b-998b74a38dca": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/4f4HzSGJ2b39cUB9g5LfyB.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "6d2e4c8f-62c6-4111-827b-ba55d837e5b7": {
      type: "voiceover",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/UYWSSzVX27Ns6aQqS5A3Mx.mpeg",
        duration: 744,
        volume: 100,
      },
    },
    "0eddaef6-13c0-4ca0-b41f-74443a885e1d": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "This is our moment.",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "c3f10be1-6318-4bed-bd24-e58f1a2a40df": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/9sSFwzQze42GtMdUxq5Ho7.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "5bdb2e82-e54a-46d5-9a9c-d5837bd0b65e": {
      type: "voiceover",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/4kdzz72ADGbDzpbMC2kHof.mpeg",
        duration: 1248,
        volume: 100,
      },
    },
    "4a778060-97c2-4f33-9885-40863fbcd8bb": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/GsKG3iy5imdFWZrrcyqSgj.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "c73c691b-1bb5-4f05-bc3d-ba66a27ba2e3": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Every cup tells a story.",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "4369bc66-fa51-48ac-a1df-5a26297b3ef7": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/7xGWJ7PphbJog3pBiebgiw.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "aedef5b3-7867-498e-b6f1-621e162f1435": {
      type: "voiceover",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/Euk45TdHFBfgQxtP8kiTUs.mpeg",
        duration: 1464,
        volume: 100,
      },
    },
    "c248a672-2ab7-476f-b7e2-4546dce27cec": {
      type: "text",
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Experience the moment with Brewio.",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "7a4e66ca-d47d-4be9-a5d7-9017e53e992e": {
      type: "image",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/LcEQSiwmUUtpaJ4VsW5cns.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "6cae74e9-b367-4602-8dc8-686a63a9d754": {
      type: "voiceover",
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/W9PXoLesNz8T33qEiGpSsQ.mpeg",
        duration: 2136,
        volume: 100,
      },
    },
  },
  trackItemsMap: {
    "023a0443-0f5e-426b-96e1-f6e0b699dcec": {
      id: "023a0443-0f5e-426b-96e1-f6e0b699dcec",
      name: "",
      type: "image",
      display: {
        from: 0,
        to: 5000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/FsYPz4exntuEwETiUZroXD.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "1edf0b36-b6f0-457a-8d53-59fd5da1a2cd": {
      id: "1edf0b36-b6f0-457a-8d53-59fd5da1a2cd",
      name: "",
      type: "text",
      display: {
        from: 5000,
        to: 10000,
      },
      metadata: {},
    },
    "296b1b94-7249-4f9a-a3b6-28a9854e0222": {
      id: "296b1b94-7249-4f9a-a3b6-28a9854e0222",
      name: "",
      type: "image",
      display: {
        from: 5000,
        to: 10000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/RAjYcUYyaQugYR8qEuVc8e.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "6d34ab61-4bec-43b4-9af6-bd667de72642": {
      id: "6d34ab61-4bec-43b4-9af6-bd667de72642",
      name: "",
      type: "voiceover",
      display: {
        from: 5000,
        to: 8312,
      },
      trim: {
        from: 0,
        to: 3312,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/Bu3poDVdWpiXNo2b3aRcxo.mpeg",
        duration: 3312,
        volume: 100,
      },
    },
    "e4ee4255-3f0f-493b-aee9-83fac11d92b8": {
      id: "e4ee4255-3f0f-493b-aee9-83fac11d92b8",
      name: "",
      type: "image",
      display: {
        from: 10000,
        to: 15000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/UiFXnznFY4xkVLGnJV8Nrr.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "bf79b1fd-215d-42ef-8687-a310307d2470": {
      id: "bf79b1fd-215d-42ef-8687-a310307d2470",
      name: "",
      type: "image",
      display: {
        from: 15000,
        to: 20000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/J35be7sKNL8RL27n9Mj4nw.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "bacb5f01-d6ef-4ac1-ae50-36b8639ed597": {
      id: "bacb5f01-d6ef-4ac1-ae50-36b8639ed597",
      name: "",
      type: "text",
      display: {
        from: 20000,
        to: 25000,
      },
      metadata: {},
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "I got this!",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "678152bf-1c18-4969-952b-998b74a38dca": {
      id: "678152bf-1c18-4969-952b-998b74a38dca",
      name: "",
      type: "image",
      display: {
        from: 20000,
        to: 25000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/4f4HzSGJ2b39cUB9g5LfyB.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "6d2e4c8f-62c6-4111-827b-ba55d837e5b7": {
      id: "6d2e4c8f-62c6-4111-827b-ba55d837e5b7",
      name: "",
      type: "voiceover",
      display: {
        from: 20000,
        to: 20744,
      },
      trim: {
        from: 0,
        to: 744,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/UYWSSzVX27Ns6aQqS5A3Mx.mpeg",
        duration: 744,
        volume: 100,
      },
    },
    "0eddaef6-13c0-4ca0-b41f-74443a885e1d": {
      id: "0eddaef6-13c0-4ca0-b41f-74443a885e1d",
      name: "",
      type: "text",
      display: {
        from: 25000,
        to: 30000,
      },
      metadata: {},
    },
    "c3f10be1-6318-4bed-bd24-e58f1a2a40df": {
      id: "c3f10be1-6318-4bed-bd24-e58f1a2a40df",
      name: "",
      type: "image",
      display: {
        from: 25000,
        to: 30000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/9sSFwzQze42GtMdUxq5Ho7.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "5bdb2e82-e54a-46d5-9a9c-d5837bd0b65e": {
      id: "5bdb2e82-e54a-46d5-9a9c-d5837bd0b65e",
      name: "",
      type: "voiceover",
      display: {
        from: 25000,
        to: 26248,
      },
      trim: {
        from: 0,
        to: 1248,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/4kdzz72ADGbDzpbMC2kHof.mpeg",
        duration: 1248,
        volume: 100,
      },
    },
    "4a778060-97c2-4f33-9885-40863fbcd8bb": {
      id: "4a778060-97c2-4f33-9885-40863fbcd8bb",
      name: "",
      type: "image",
      display: {
        from: 30000,
        to: 35000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/GsKG3iy5imdFWZrrcyqSgj.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "c73c691b-1bb5-4f05-bc3d-ba66a27ba2e3": {
      id: "c73c691b-1bb5-4f05-bc3d-ba66a27ba2e3",
      name: "",
      type: "text",
      display: {
        from: 35000,
        to: 40000,
      },
      metadata: {},
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Every cup tells a story.",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "4369bc66-fa51-48ac-a1df-5a26297b3ef7": {
      id: "4369bc66-fa51-48ac-a1df-5a26297b3ef7",
      name: "",
      type: "image",
      display: {
        from: 35000,
        to: 40000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/7xGWJ7PphbJog3pBiebgiw.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "aedef5b3-7867-498e-b6f1-621e162f1435": {
      id: "aedef5b3-7867-498e-b6f1-621e162f1435",
      name: "",
      type: "voiceover",
      display: {
        from: 35000,
        to: 36464,
      },
      trim: {
        from: 0,
        to: 1464,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/Euk45TdHFBfgQxtP8kiTUs.mpeg",
        duration: 1464,
        volume: 100,
      },
    },
    "c248a672-2ab7-476f-b7e2-4546dce27cec": {
      id: "c248a672-2ab7-476f-b7e2-4546dce27cec",
      name: "",
      type: "text",
      display: {
        from: 40000,
        to: 45000,
      },
      metadata: {},
      details: {
        fontFamily: "Roboto-Bold",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textAlign: "right",
        lineHeight: "normal",
        letterSpacing: "normal",
        wordSpacing: "normal",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "none",
        text: "Experience the moment with Brewio.",
        opacity: 100,
        width: 1024,
        wordWrap: "break-word",
        wordBreak: "normal",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "0px",
        top: "568.8px",
        left: "128.0px",
        height: 158.4,
        fontUrl:
          "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      },
    },
    "7a4e66ca-d47d-4be9-a5d7-9017e53e992e": {
      id: "7a4e66ca-d47d-4be9-a5d7-9017e53e992e",
      name: "",
      type: "image",
      display: {
        from: 40000,
        to: 45000,
      },
      trim: {
        from: 0,
        to: 5000,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/image/2025/3/20/15/LcEQSiwmUUtpaJ4VsW5cns.webp",
        duration: null,
        volume: 100,
        opacity: 100,
        border: "none",
        borderRadius: "0",
        boxShadow: "none",
        top: "0px",
      },
    },
    "6cae74e9-b367-4602-8dc8-686a63a9d754": {
      id: "6cae74e9-b367-4602-8dc8-686a63a9d754",
      name: "",
      type: "voiceover",
      display: {
        from: 40000,
        to: 42136,
      },
      trim: {
        from: 0,
        to: 2136,
      },
      isMain: false,
      details: {
        src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/3/20/15/W9PXoLesNz8T33qEiGpSsQ.mpeg",
        duration: 2136,
        volume: 100,
      },
    },
  },
  tracks: [
    {
      id: "2",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "image",
      items: [
        "023a0443-0f5e-426b-96e1-f6e0b699dcec",
        "296b1b94-7249-4f9a-a3b6-28a9854e0222",
        "e4ee4255-3f0f-493b-aee9-83fac11d92b8",
        "bf79b1fd-215d-42ef-8687-a310307d2470",
        "678152bf-1c18-4969-952b-998b74a38dca",
        "c3f10be1-6318-4bed-bd24-e58f1a2a40df",
        "4a778060-97c2-4f33-9885-40863fbcd8bb",
        "4369bc66-fa51-48ac-a1df-5a26297b3ef7",
        "7a4e66ca-d47d-4be9-a5d7-9017e53e992e",
      ],
      magnetic: false,
      static: false,
    },
    {
      id: "1",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "text",
      items: [
        "1edf0b36-b6f0-457a-8d53-59fd5da1a2cd",
        "bacb5f01-d6ef-4ac1-ae50-36b8639ed597",
        "0eddaef6-13c0-4ca0-b41f-74443a885e1d",
        "c73c691b-1bb5-4f05-bc3d-ba66a27ba2e3",
        "c248a672-2ab7-476f-b7e2-4546dce27cec",
      ],
      magnetic: false,
      static: false,
    },
    {
      id: "3",
      accepts: ["text", "audio", "helper", "video", "image"],
      type: "audio",
      items: [
        "6d34ab61-4bec-43b4-9af6-bd667de72642",
        "6d2e4c8f-62c6-4111-827b-ba55d837e5b7",
        "5bdb2e82-e54a-46d5-9a9c-d5837bd0b65e",
        "aedef5b3-7867-498e-b6f1-621e162f1435",
        "6cae74e9-b367-4602-8dc8-686a63a9d754",
      ],
      magnetic: false,
      static: false,
    },
  ],
  trackItemIds: [
    "6cae74e9-b367-4602-8dc8-686a63a9d754",
    "7a4e66ca-d47d-4be9-a5d7-9017e53e992e",
    "aedef5b3-7867-498e-b6f1-621e162f1435",
    "4369bc66-fa51-48ac-a1df-5a26297b3ef7",
    "4a778060-97c2-4f33-9885-40863fbcd8bb",
    "5bdb2e82-e54a-46d5-9a9c-d5837bd0b65e",
    "c3f10be1-6318-4bed-bd24-e58f1a2a40df",
    "6d2e4c8f-62c6-4111-827b-ba55d837e5b7",
    "678152bf-1c18-4969-952b-998b74a38dca",
    "bf79b1fd-215d-42ef-8687-a310307d2470",
    "e4ee4255-3f0f-493b-aee9-83fac11d92b8",
    "6d34ab61-4bec-43b4-9af6-bd667de72642",
    "296b1b94-7249-4f9a-a3b6-28a9854e0222",
    "023a0443-0f5e-426b-96e1-f6e0b699dcec",
    "1edf0b36-b6f0-457a-8d53-59fd5da1a2cd",
    "bacb5f01-d6ef-4ac1-ae50-36b8639ed597",
    "0eddaef6-13c0-4ca0-b41f-74443a885e1d",
    "c73c691b-1bb5-4f05-bc3d-ba66a27ba2e3",
    "c248a672-2ab7-476f-b7e2-4546dce27cec",
  ],
  transitionsMap: {},
  transitionIds: [],
};

// export const data1 = {
//   id: "dtpMWWHEkZLIpTa4",
//   fps: 30,
//   size: { width: 1920, height: 1080 },
//   tracks: [
//     {
//       id: "8859c9e2-2f4e-4b11-89f0-1c20a7a7aca7",
//       accepts: ["text", "audio", "helper", "video", "image"],
//       type: "audio",
//       items: ["222", "111", "2"],
//       magnetic: false,
//       static: false,
//     },
//     {
//       id: "a803250d-3203-4d65-9fe7-ebb06561bacf",
//       accepts: ["text", "audio", "helper", "video", "image"],
//       type: "video",
//       items: [
//         "c208fea3-cbe2-4a23-a12c-5459c4e853d9",
//         "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5",
//         "56efda38-e743-43db-b2c0-e1aa46b46641",
//       ],
//       magnetic: false,
//       static: false,
//     },
//     {
//       id: "bdc41fcb-3f35-478c-8cb8-0a0b8c7949a0",
//       items: ["3"],
//       type: "audio",
//       accepts: ["text", "audio", "helper", "video", "image"],
//     },
//   ],

//   tracksSettings: {
//     "8859c9e2-2f4e-4b11-89f0-1c20a7a7aca7": {
//       id: "8743cb00-c733-4b92-8818-bca353c57f77",
//       type: "tracksettings",
//       trackId: "8859c9e2-2f4e-4b11-89f0-1c20a7a7aca7",
//       accepts: ["audio"],
//       details: {
//         trackType: "text",
//       },
//     },
//     "a803250d-3203-4d65-9fe7-ebb06561bacf": {
//       id: "3b08fc2a-f554-4c4d-a468-4280090e91e8",
//       type: "tracksettings",
//       trackId: "a803250d-3203-4d65-9fe7-ebb06561bacf",
//       accepts: ["video", "image"],
//       details: {
//         trackType: "video",
//       },
//     },
//     "bdc41fcb-3f35-478c-8cb8-0a0b8c7949a0": {
//       id: "3c881ae3-928b-48e4-9b94-49d178b970dc",
//       type: "tracksettings",
//       trackId: "bdc41fcb-3f35-478c-8cb8-0a0b8c7949a0",
//       accepts: ["audio"],
//       details: {
//         trackType: "audio",
//       },
//     },
//     "edf7c614-3c2b-46a4-aa02-baceceb05f85": {
//       id: "9e74a6ed-58e1-4d66-a102-f41fa32738e2",
//       type: "tracksettings",
//       trackId: "edf7c614-3c2b-46a4-aa02-baceceb05f85",
//       accepts: ["text", "audio"],
//       details: {
//         trackType: "text",
//       },
//     },
//   },

//   trackItemDetailsMap: {
//     "2": {
//       type: "audio",
//       details: {
//         src: "https://cdn.designcombo.dev/audio/Hope.mp3",
//         duration: 112802,
//         volume: 100,
//       },
//     },
//     "3": {
//       type: "audio",
//       details: {
//         src: "https://cdn.designcombo.dev/audio/Tenderness.mp3",
//         duration: 123794.286,
//         volume: 100,
//       },
//     },
//     "111": {
//       type: "audio",
//       details: {
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\KhDhy5qKkppcfCMWV9md5w.mpeg",
//         duration: 4080,
//         volume: 100,
//         text: "Voiceover",
//       },
//     },
//     "222": {
//       type: "audio",
//       details: {
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\SQCTWQnVjRBzbUjCMyZd32.mpeg",
//         duration: 4992,
//         volume: 100,
//         text: "Voiceover",
//       },
//     },
//     "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5": {
//       type: "video",
//       details: {
//         width: 800,
//         height: 608,
//         duration: 6050,
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\fdcKLDioCK6fNMFSaV9no9.mp4",
//         volume: 100,
//         top: "656px",
//         left: "140px",
//         text: "Video",
//       },
//     },
//     "56efda38-e743-43db-b2c0-e1aa46b46641": {
//       type: "video",
//       details: {
//         width: 800,
//         height: 608,
//         duration: 6050,
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\NarjF5LQKZ3RE8cg5BAEZa.mp4",
//         volume: 100,
//         top: "656px",
//         left: "140px",
//         text: "Video",
//       },
//     },
//     "c208fea3-cbe2-4a23-a12c-5459c4e853d9": {
//       type: "video",
//       details: {
//         width: 800,
//         height: 608,
//         duration: 6050,
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\LUB9JnQSSeVJdzRrq8PnAr.mp4",
//         volume: 100,
//         top: "656px",
//         left: "140px",
//         text: "Video",
//       },
//     },
//   },
//   trackItemIds: [
//     "3",
//     "c208fea3-cbe2-4a23-a12c-5459c4e853d9",
//     "56efda38-e743-43db-b2c0-e1aa46b46641",
//     "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5",
//     "2",
//     "222",
//     "111",
//   ],
//   transitionsMap: {},
//   trackItemsMap: {
//     "2": {
//       id: "2",
//       name: "",
//       type: "audio",
//       display: { from: 9072, to: 121874 },
//       trim: { from: 0, to: 112802 },
//       metadata: { author: "Hugo Dujardin" },
//       isMain: false,
//       details: {
//         src: "https://cdn.designcombo.dev/audio/Hope.mp3",
//         duration: 112802,
//         volume: 100,
//       },
//     },
//     "3": {
//       id: "3",
//       name: "",
//       type: "audio",
//       display: { from: 0, to: 123794.28600000001 },
//       trim: { from: 0, to: 123794.286 },
//       metadata: { author: "Benjamin Tissot" },
//       isMain: false,
//       details: {
//         src: "https://cdn.designcombo.dev/audio/Tenderness.mp3",
//         duration: 123794.286,
//         volume: 100,
//       },
//     },
//     "111": {
//       id: "111",
//       name: "",
//       type: "audio",
//       display: { from: 4992, to: 9072 },
//       trim: { from: 0, to: 4080 },
//       metadata: { author: "Adilet" },
//       isMain: false,
//       details: {
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\KhDhy5qKkppcfCMWV9md5w.mpeg",
//         duration: 4080,
//         volume: 100,
//         text: "Voiceover",
//       },
//     },
//     "222": {
//       id: "222",
//       name: "",
//       type: "audio",
//       display: { from: 0, to: 4992 },
//       trim: { from: 0, to: 4992 },
//       metadata: { author: "Adilet2" },
//       isMain: false,
//       details: {
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/voiceover/2025/2/20/18\\SQCTWQnVjRBzbUjCMyZd32.mpeg",
//         duration: 4992,
//         volume: 100,
//         text: "Voiceover",
//       },
//     },
//     "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5": {
//       id: "ae7f1dc8-f5af-40fe-86f6-307a36ffd5f5",
//       type: "video",
//       preview:
//         "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\MjU9BA9oBAcasKPWW89oAq.webp",
//       display: { from: 12100, to: 18150 },
//       trim: { from: 0, to: 6050 },
//       isMain: false,
//       details: {
//         width: 800,
//         height: 608,
//         duration: 6050,
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\fdcKLDioCK6fNMFSaV9no9.mp4",
//         volume: 100,
//         top: "656px",
//         left: "140px",
//         text: "Video",
//       },
//     },
//     "56efda38-e743-43db-b2c0-e1aa46b46641": {
//       id: "56efda38-e743-43db-b2c0-e1aa46b46641",
//       type: "video",
//       preview:
//         "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\br3G6fanEMrVZCXAmYpWdL.webp",
//       display: { from: 6050.000000000006, to: 12100 },
//       trim: { from: 0, to: 6050 },
//       isMain: false,
//       details: {
//         width: 800,
//         height: 608,
//         duration: 6050,
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\NarjF5LQKZ3RE8cg5BAEZa.mp4",
//         volume: 100,
//         top: "656px",
//         left: "140px",
//         text: "Video",
//       },
//     },
//     "c208fea3-cbe2-4a23-a12c-5459c4e853d9": {
//       id: "c208fea3-cbe2-4a23-a12c-5459c4e853d9",
//       type: "video",
//       preview:
//         "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/image/2025/2/20/19\\N8SF2nTVffFxn8fwA7VZZM.webp",
//       display: { from: 0, to: 6050 },
//       trim: { from: 0, to: 6050 },
//       isMain: false,
//       details: {
//         width: 800,
//         height: 608,
//         duration: 6050,
//         src: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/generated/video/2025/2/20/19\\LUB9JnQSSeVJdzRrq8PnAr.mp4",
//         volume: 100,
//         top: "656px",
//         left: "140px",
//         text: "Video",
//       },
//     },
//   },
//   transitionIds: [],
// };

export const data2 = {
  fileName: "Timeline",
  id: "Timeline",
  fps: 30,
  width: 1920,
  height: 1080,
  config: {},

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
        duration: 15000,
        volume: 100,
        text: "music",
      },
    },
  },
  trackItemIds: [
    "efeefe1c-8a22-4972-94a9-32e72167960f",
    "85f4157e-dc83-4d9d-89df-1a9b422d0f76",

    "3400f41c-d2b0-4987-9eb7-63bf9e7c10d1",

    "8a1421e6-b47f-44c3-9ef5-1cb8a9ab3240",
    "251574f7-350d-4c36-8cec-bb1c18c263b8",
    "b3e6a71a-6b4c-4d2c-bcd9-acf3732a50b7",

    "695c748b-4027-4ddf-ba04-f3929b9a1afa",
    "5923c95e-9996-4fef-ac4d-f538413d90d7",
    "b9e5723f-205c-42bf-87bd-e909d3c98337",
    "cffd1b0e-6b4a-46f5-948d-15a93a0afc1e",
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
        duration: 126093.061, //TODO: поправить проблему с duration изменением длины музыки
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
