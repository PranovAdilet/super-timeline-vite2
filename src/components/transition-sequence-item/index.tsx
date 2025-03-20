import { AbsoluteFill, Audio, Img, OffthreadVideo } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { IAudio, IImage, ITrackItem, ITransition, IVideo } from "@/shared";
import { calculateFrames, calculateScale } from "..";
import { JSX } from "react";

const REMOTION_SAFE_FRAME = 5;

interface IAnimation {
  idObject: string;
  type: string;
}

interface SequenceItemOptions {
  handleTextChange?: (id: string, text: string) => void;
  fps: number;
  animations?: IAnimation[];
  editableTextId?: string | null;
  containTransition?: ITransition;
  currentFrame: number;
}

export const TransitionSequenceItem: Record<
  string,
  (item: ITrackItem, options: SequenceItemOptions) => JSX.Element
> = {
  text: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { durationInFrames } = calculateFrames(item.display, fps);

    return (
      <TransitionSeries.Sequence
        key={item.id}
        durationInFrames={durationInFrames + REMOTION_SAFE_FRAME}
        style={{
          position: "absolute",
          width: item.details.width ?? 300,
          height: item.details.height ?? 400,
          transform: item.details.transform ?? "none",
          fontSize: item.details.fontSize || "16px",
          textAlign: item.details.textAlign || "left",
          top: item.details.top ?? 300,
          left: item.details.left ?? 600,
          color: item.details.color || "#000000",
          backgroundColor: item.details.backgroundColor || "transparent",
          border: item.details.border ?? "none",
          opacity: item.details.opacity ?? 100 / 100,
          fontFamily: item.details.fontFamily || "Arial",
          textDecoration: item.details.textDecoration || "none",
          fontWeight: item.details.fontWeight || "normal",
          lineHeight: item.details.lineHeight || "normal",
          letterSpacing: item.details.letterSpacing || "normal",
          wordSpacing: item.details.wordSpacing || "normal",
          wordWrap: item.details.wordWrap || "normal",
          wordBreak: item.details.wordBreak || "normal",
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
      </TransitionSeries.Sequence>
    );
  },
  image: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, containTransition, currentFrame } = options;
    const { details } = item as IImage;
    const { durationInFrames, from } = calculateFrames(item.display, fps);

    const adjustedFrame = currentFrame - from;

    const zoomScale = calculateScale(
      adjustedFrame,
      durationInFrames,
      item.details.zoom
    );

    const mirrorX = item.details?.mirror?.x ? "scaleX(-1)" : "";
    const mirrorY = item.details?.mirror?.y ? "scaleY(-1)" : "";

    let extraTimeTransition = 0;
    if (containTransition && containTransition.type !== "none") {
      const { durationInFrames } = calculateFrames(
        { from: 0, to: containTransition.duration },
        fps
      );
      extraTimeTransition = durationInFrames;
    } else if (containTransition && containTransition.type === "none") {
      extraTimeTransition = 2;
    }

    return (
      <TransitionSeries.Sequence
        key={item.id}
        durationInFrames={
          durationInFrames + REMOTION_SAFE_FRAME + extraTimeTransition / 2
        }
        style={{
          opacity: (item.details.opacity ?? 100) / 100 || 1,
          border: item.details.border ?? "none",
          borderRadius: item.details.borderRadius ?? "0",
          boxShadow: item.details.boxShadow ?? "none",
          filter:
            `brightness(${item.details.brightness ?? 100}%) blur(${
              item.details.blur ?? 0
            }px)` || "none",
        }}
      >
        <AbsoluteFill
          data-track-item="transition-element"
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
              transform: `scale(${zoomScale}) ${mirrorX} ${mirrorY}`,
            }}
            src={details.src}
          />
        </AbsoluteFill>
      </TransitionSeries.Sequence>
    );
  },
  video: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps, containTransition, currentFrame } = options;
    const { details } = item as IVideo;
    const { durationInFrames, from } = calculateFrames(
      {
        from: item.display.from,
        to: item.display.to,
      },
      fps
    );
    const crop = details.crop || {
      x: 0,
      y: 0,
      width: details.width,
      height: details.height,
    };

    let extraTimeTransition = 0;
    if (containTransition && containTransition.type !== "none") {
      const { durationInFrames } = calculateFrames(
        { from: 0, to: containTransition.duration },
        fps
      );
      extraTimeTransition = durationInFrames;
    } else if (containTransition && containTransition.type === "none") {
      extraTimeTransition = 2;
    }

    const adjustedFrame = currentFrame - from;

    const zoomScale = calculateScale(
      adjustedFrame,
      durationInFrames,
      item.details.zoom
    );

    const mirrorX = item.details?.mirror?.x ? "scaleX(-1)" : "";
    const mirrorY = item.details?.mirror?.y ? "scaleY(-1)" : "";

    return (
      <TransitionSeries.Sequence
        key={item.id}
        durationInFrames={
          durationInFrames + REMOTION_SAFE_FRAME + extraTimeTransition / 2
        }
        style={{
          transform: item.details.transform ?? "none",
          opacity: (item.details.opacity ?? 100) / 100 || 1,
          border: item.details.border ?? "none",
          borderRadius: item.details.borderRadius ?? "0",
          boxShadow: item.details.boxShadow ?? "none",
          overflow: "hidden",
        }}
      >
        <AbsoluteFill
          data-track-item="transition-element"
          style={{
            pointerEvents: "none",

            top: -crop.y,
            left: -crop.x,
          }}
          className="size-full"
        >
          <OffthreadVideo
            startFrom={(item.trim?.from! / 1000) * fps}
            endAt={(item.trim?.to! / 1000) * fps + REMOTION_SAFE_FRAME}
            src={details.src}
            volume={details.volume || 0 / 100}
            style={{
              pointerEvents: "none",
              opacity: (item.details.opacity ?? 100) / 100 || 1,
              transform: `scale(${zoomScale}) ${mirrorX} ${mirrorY}`,
            }}
            className="size-full"
          />
        </AbsoluteFill>
      </TransitionSeries.Sequence>
    );
  },
  audio: (item: ITrackItem, options: SequenceItemOptions) => {
    const { fps } = options;
    const { details } = item as IAudio;
    const { durationInFrames } = calculateFrames(item.display, fps);
    const trim = item.trim!;
    return (
      <TransitionSeries.Sequence
        key={item.id}
        durationInFrames={durationInFrames + REMOTION_SAFE_FRAME}
        style={{
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <AbsoluteFill>
          <Audio
            startFrom={(trim.from / 1000) * fps}
            endAt={(trim.to / 1000) * fps + REMOTION_SAFE_FRAME}
            src={details.src}
            volume={(details.volume || 0) / 100}
          />
        </AbsoluteFill>
      </TransitionSeries.Sequence>
    );
  },
};
