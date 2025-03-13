"use client";

import type { ITrackItem, ZoomType } from "../../";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
} from "remotion";

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
  currentFrame: number;
  // handleReady: any;
};

type ItemType = "text" | "image" | "video" | "audio";

export const SequenceItem: Record<
  ItemType,
  (item: ITrackItem, options: SequenceItemOptions) => React.JSX.Element
> = {
  text: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    return (
      <Sequence
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        data-track-item="transition-element"
        style={{
          position: "absolute",
          width: item.details.width ?? 300,
          height: item.details.height ?? 400,
          transform: item.details.transform ?? "none",
          fontSize: item.details.fontSize || "16px", // Updated default font size
          textAlign: item.details.textAlign || "left", // Updated default text alignment
          top: item.details.top ?? 300,
          left: item.details.left ?? 600,
          color: item.details.color || "#000000", // Updated text color (fill)
          backgroundColor: item.details.backgroundColor || "transparent", // Updated background color
          border: item.details.border ?? "none", // Updated border
          opacity: item.details.opacity ?? 100 / 100,
          fontFamily: item.details.fontFamily || "Arial", // Updated default font family
          textDecoration: item.details.textDecoration || "none",
          fontWeight: item.details.fontWeight || "normal",
          lineHeight: item.details.lineHeight || "normal", // Added line height
          letterSpacing: item.details.letterSpacing || "normal", // Added letter spacing
          wordSpacing: item.details.wordSpacing || "normal", // Added word spacing
          wordWrap: item.details.wordWrap || "normal", //'break-word'
          wordBreak: item.details.wordBreak || "normal", //'break-all',
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            textAlign: item.details.textAlign || "left",
            width: "100%",
          }}
        >
          {item.details.text}
        </div>
      </Sequence>
    );
  },
  image: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, currentFrame } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);

    const adjustedFrame = currentFrame - from;

    const zoomScale = calculateScale(
      adjustedFrame,
      durationInFrames,
      item.details.zoom
    );

    return (
      <Sequence
        key={item.id}
        from={from}
        durationInFrames={durationInFrames}
        style={{
          // width: item.details.width ?? "100%", // Default width
          // height: item.details.height ?? "auto", // Default height
          // transform: item.details.transform ?? "none",
          opacity: (item.details.opacity ?? 100) / 100 || 1,
          border: item.details.border ?? "none", // Default border
          borderRadius: item.details.borderRadius ?? "0", // Default border radius
          boxShadow: item.details.boxShadow ?? "none", // Default box shadow
          filter:
            `brightness(${item.details.brightness ?? 100}%) blur(${
              item.details.blur ?? 0
            }px)` || "none",

          // top: item.details.top ?? 0,
          // left: item.details.left ?? 0,
        }}
      >
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Img
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              objectFit: "contain",
              opacity: item.details.opacity || 1,
              filter:
                `brightness(${item.details.brightness}%) blur(${item.details.blur}px)` ||
                "none",
              transform: `scale(${zoomScale})`,
            }}
            data-id={item.id}
            src={item.details.src}
          />
        </AbsoluteFill>
      </Sequence>
    );
  },
  video: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, currentFrame } = options;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const trim = item.trim;

    const crop = item.details.crop || {
      x: 0,
      y: 0,
      width: item.details.width,
      height: item.details.height,
    };

    const adjustedFrame = currentFrame - from;

    const zoomScale = calculateScale(
      adjustedFrame,
      durationInFrames,
      item.details.zoom
    );

    // console.log(zoomScale, item);

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
              transform: `scale(${zoomScale})`,
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

const calculateScale = (
  frame: number,
  durationInFrames: number,
  zoom?: ZoomType
) => {
  const startScale = zoom?.type === "out" ? 1.3 : 1;
  const endScale = zoom?.type === "in" ? 1.3 : 1;

  const zoomScale =
    zoom?.type === "none"
      ? 1
      : interpolate(frame, [0, durationInFrames], [startScale, endScale], {
          easing: getEasingFunction(zoom?.ease),
          extrapolateRight: "clamp",
        });

  return zoomScale;
};

const getEasingFunction = (easing?: ZoomType["ease"]) => {
  switch (easing) {
    case "ease-in":
      return Easing.in(Easing.quad);
    case "ease-out":
      return Easing.out(Easing.quad);
    case "ease-in-out":
      return Easing.inOut(Easing.quad);
    default:
      return Easing.linear;
  }
};
