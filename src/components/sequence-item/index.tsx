"use client";

import {
  type IImage,
  type IItem,
  type IText,
  type ITrackItem,
  type IVideo,
  type ZoomType,
} from "../../";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
} from "remotion";
import { Animated } from "../player/animation";
import { getAnimations } from "@/shared/utils/get-animations";
import { calculateContainerStyles } from "@/shared/utils/styles";

export const calculateFrames = (
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
    const { details, animations } = item as IText;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const { animationIn, animationOut } = getAnimations(
      animations!,
      item as IItem
    );

    const fontStyles = {
      fontFamily: `"${item.details.fontFamily || "Arial"}", sans-serif`,
      fontSize: item.details.fontSize || "16px",
      fontWeight: item.details.fontWeight || "normal",
      fontStyle: item.details.fontStyle || "normal",
      textAlign: item.details.textAlign || "left",
      color: item.details.color || "#000000",
      backgroundColor: item.details.backgroundColor || "transparent",
      lineHeight: item.details.lineHeight || "normal",
      letterSpacing: item.details.letterSpacing || "normal",
      wordSpacing: item.details.wordSpacing || "normal",
      textDecoration: item.details.textDecoration || "none",
    };

    // Добавляем @font-face для каждого шрифта
    const fontFaceStyle = item.details.fontUrl
      ? `
      @font-face {
        font-family: "${item.details.fontFamily}";
        src: url("${item.details.fontUrl}") format("woff2");
        font-display: swap;
      }
    `
      : "";

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
          top: item.details.top ?? 300,
          left: item.details.left ?? 600,
          opacity: item.details.opacity ?? 100 / 100,
          border: item.details.border ?? "none",
          ...fontStyles,
        }}
      >
        <style>{fontFaceStyle}</style>
        <Animated
          style={calculateContainerStyles(
            details,
            {},
            { textAlign: item.details.textAlign || "left", width: "100%" }
          )}
          animationIn={animationIn}
          animationOut={animationOut}
          durationInFrames={durationInFrames}
        >
          {item.details.text}
        </Animated>
      </Sequence>
    );
  },
  image: (item, options: SequenceItemOptions) => {
    const { fps, currentFrame } = options;
    const { details, animations } = item as IImage;
    const { from, durationInFrames } = calculateFrames(item.display, fps);

    const adjustedFrame = currentFrame - from;

    const zoomScale = calculateScale(
      adjustedFrame,
      durationInFrames,
      item.details.zoom
    );

    const mirrorX = item.details?.mirror?.x ? "scaleX(-1)" : "";
    const mirrorY = item.details?.mirror?.y ? "scaleY(-1)" : "";

    const { animationIn, animationOut } = getAnimations(
      animations!,
      item as IItem
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
          <Animated
            style={calculateContainerStyles(
              details,
              {},
              {
                overflow: "hidden",
                pointerEvents: "none",
                display: "flex",
                justifyContent: "center",
              }
            )}
            animationIn={animationIn!}
            animationOut={animationOut!}
            durationInFrames={durationInFrames}
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
                transform: `scale(${zoomScale}) ${mirrorX} ${mirrorY}`,
              }}
              data-id={item.id}
              src={item.details.src}
            />
          </Animated>
        </AbsoluteFill>
      </Sequence>
    );
  },
  video: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, currentFrame, width, height } = options;
    const { details, animations } = item as IVideo;
    const { from, durationInFrames } = calculateFrames(item.display, fps);
    const { animationIn, animationOut } = getAnimations(
      animations!,
      item as IItem
    );
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

    if (!trim) {
      return <></>;
    }
    const mirrorX = item.details?.mirror?.x ? "scaleX(-1)" : "";
    const mirrorY = item.details?.mirror?.y ? "scaleY(-1)" : "";

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
          width,
          height,
        }}
      >
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            // width: item.details.width,
            // height: item.details.height,
            top: -crop.y,
            left: -crop.x,
            width,
            height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated
            style={calculateContainerStyles(details, crop, {
              overflow: "hidden",
            })}
            animationIn={animationIn}
            animationOut={animationOut}
            durationInFrames={durationInFrames}
          >
            <OffthreadVideo
              startFrom={(trim.from / 1000) * fps}
              endAt={(trim.to / 1000) * fps}
              src={item.details.src}
              volume={(item.details.volume ?? 100) / 100}
              style={{
                pointerEvents: "none",
                opacity: (item.details.opacity ?? 100) / 100 || 1,
                transform: `scale(${zoomScale}) ${mirrorX} ${mirrorY}`,
                // width: item.details.width,
                // height: item.details.height,
                width,
                height,
                objectFit: "contain",
              }}
            />
          </Animated>
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

export const calculateScale = (
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

export const getEasingFunction = (easing?: ZoomType["ease"]) => {
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

const relativeTextPositions = (
  item: IText,
  canvasWidth: number,
  canvasHeight: number
) => {
  const left = Number(item.details.left);
  const top = Number(item.details.top);
  const width = item.details.width;
  const height = item.details.height;
  const fontSize = item.details.fontSize;

  const canvasSquare = canvasWidth * canvasHeight;
  const canvasSqrt = Math.round(Math.sqrt(canvasSquare) * 100) / 100;

  return {
    left: left * canvasWidth,
    top: top * canvasHeight,
    width: width * canvasWidth,
    height: height * canvasHeight,
    fontSize: fontSize
      ? Math.round((canvasSqrt / fontSize) * 100) / 100
      : undefined,
  };
};
