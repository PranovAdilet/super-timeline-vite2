"use client";

import type { ITrackItem } from "../../";
import { AbsoluteFill, Audio, Img, OffthreadVideo, Sequence } from "remotion";
import { FabricCanvas } from "../player/canvas";

const calculateFrames = (
  display: { from: number; to: number },
  fps: number
) => {
  const from = (display.from / 1000) * fps;
  const durationInFrames = (display.to / 1000) * fps - from;
  return { from, durationInFrames };
};

type SequenceItemOptions = {
  fps: number;
  width: number;
  height: number;
};

type ItemType = "text" | "image" | "video" | "audio";

export const SequenceItem: Record<
  ItemType,
  (item: ITrackItem, options: SequenceItemOptions) => React.JSX.Element
> = {
  text: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, height, width } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);

    const object = createInitialObject(item, width, height);
    return (
      <Sequence
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        data-track-item="transition-element"
        style={
          {
            // position: "absolute",
            // width: item.details.width ?? 300,
            // height: item.details.height ?? 400,
            // transform: item.details.transform ?? "none",
            // fontSize: item.details.fontSize || "16px", // Updated default font size
            // textAlign: item.details.textAlign || "left", // Updated default text alignment
            // top: item.details.top ?? 300,
            // left: item.details.left ?? 600,
            // color: item.details.color || "#000000", // Updated text color (fill)
            // backgroundColor: item.details.backgroundColor || "transparent", // Updated background color
            // border: item.details.border ?? "none", // Updated border
            // opacity: item.details.opacity ?? 100 / 100,
            // fontFamily: item.details.fontFamily || "Arial", // Updated default font family
            // textDecoration: item.details.textDecoration || "none",
            // fontWeight: item.details.fontWeight || "normal",
            // lineHeight: item.details.lineHeight || "normal", // Added line height
            // letterSpacing: item.details.letterSpacing || "normal", // Added letter spacing
            // wordSpacing: item.details.wordSpacing || "normal", // Added word spacing
            // wordWrap: item.details.wordWrap || "normal", //'break-word'
            // wordBreak: item.details.wordBreak || "normal", //'break-all',
            // pointerEvents: "auto",
          }
        }
      >
        <FabricCanvas
          key={item.id}
          initialObjects={[object]}
          className="absolute left-0 top-0 size-full"
          width={width}
          height={height}
        />
        {/* <div>{item.details.text}</div> */}
      </Sequence>
    );
  },
  image: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, width, height } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const object = createInitialObject(item, width, height);

    return (
      <Sequence
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
      >
        <AbsoluteFill className="flex justify-center">
          <FabricCanvas
            key={item.id}
            initialObjects={[object]}
            className="absolute left-0 top-0 size-full"
            width={width}
            height={height}
          />
          {/* <Img
            style={{
              pointerEvents: "none",
              objectFit: "contain",
              opacity: item.details.opacity || 1,
              filter:
                `brightness(${item.details.brightness}%) blur(${item.details.blur}px)` ||
                "none",
            }}
            className="size-full"
            data-id={item.id}
            src={item.details.src}
          /> */}
        </AbsoluteFill>
      </Sequence>
    );
  },
  video: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, width, height } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const trim = item.trim;

    const crop = item.details.crop || {
      x: 0,
      y: 0,
      width: item.details.width,
      height: item.details.height,
    };

    const object = createInitialObject(item, width, height);

    if (!trim) {
      return <></>;
    }

    return (
      <Sequence
        premountFor={30 * 5}
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        style={{
          // width: crop.width || "100%", // Default width
          // height: crop.height || "auto", // Default height
          transform: item.details.transform ?? "none",
          opacity: (item.details.opacity ?? 100) / 100 || 1,
          border: item.details.border ?? "none", // Default border
          borderRadius: item.details.borderRadius ?? "0", // Default border radius
          boxShadow: item.details.boxShadow ?? "none", // Default box shadow
          // top: item.details.top ?? 0,
          // left: item.details.left ?? 0,
          overflow: "hidden",
        }}
        className="size-full"
      >
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            // width: item.details.width,
            // height: item.details.height,
            top: -crop.y,
            left: -crop.x,
          }}
          className="size-full"
        >
          <OffthreadVideo
            startFrom={(trim.from / 1000) * fps}
            endAt={(trim.to / 1000) * fps}
            src={item.details.src}
            volume={(item.details.volume ?? 100) / 100}
            style={{
              pointerEvents: "none",
              opacity: (item.details.opacity ?? 100) / 100 || 1,
              // width: item.details.width,
              // height: item.details.height,
            }}
            className="size-full"
          />
        </AbsoluteFill>
      </Sequence>
    );
  },
  audio: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const trim = item.trim;
    if (!trim) {
      return <></>;
    }

    return (
      <Sequence
        // premountFor={30 * 5}
        className={`moonshine-scene-item id-${item.id} moonshine-scene-item-type-${item.type}`}
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        style={{
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <AbsoluteFill>
          <Audio
            startFrom={(trim.from / 1000) * fps}
            endAt={(trim.to / 1000) * fps}
            src={item.details.src}
            volume={(item.details.volume ?? 100) / 100}
          />
        </AbsoluteFill>
      </Sequence>
    );
  },
};

export const createInitialObject = (
  item: any,
  width: number,
  height: number
) => {
  if (item.type === "video") {
    return {
      ...item.details,
      id: item.id,
      type: "Video",
      width: item.details.width / width,
      height: item.details.height / height,
      left: item.details.left.slice(0, item.details.left.length - 2) / width,
      top: item.details.top.slice(0, item.details.top.length - 2) / height,
    };
  }
  if (item.type === "image") {
    return {
      ...item.details,
      type: "Image",
      width: item.details.width / width,
      height: item.details.height / height,
      left: item.details.left.slice(0, item.details.left.length - 2) / width,
      top: item.details.top.slice(0, item.details.top.length - 2) / height,
    };
  }
  if (item.type === "text") {
    return {
      ...item.details,
      id: item.id,
      type: "Textbox",
      originX: "center",
      originY: "bottom",
      left: item.details.left.slice(0, item.details.left.length - 2) / width,
      top: item.details.top.slice(0, item.details.top.length - 2) / height,
      width: item.details.width / width,
      height: item.details.heigth / height,
      lockScalingX: false,
      lockScalingY: false,
      fontSize: 23.2,
      backgroundColor: "#00000090",
      fill: item.details.color,
      lineHeight: 1.16,
      charSpacing: 0,
      styles: [],
      pathStartOffset: 0,
      pathSide: "left",
      pathAlign: "baseline",
      direction: "ltr",
      minWidth: 20,
      splitByGrapheme: false,
      version: "6.4.2",
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      visible: true,
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
    };
  }
};
