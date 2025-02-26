import { loadFonts } from "@/shared/utils";
import { loadAudio, loadImage, loadVideo } from "./file";
import { getTextHeight } from "./text";
import { calculatePosition } from "./calculate-position";
import { IAudio, IImage, IText, IVideo } from "@/shared/types";
import { calculateDisplayRange, calculateTrim } from "./timeline";

export const loadImageItem = async (
  payload: IImage,
  options: {
    origin?: number;
    size: {
      width: number;
      height: number;
    };
  }
): Promise<IImage> => {
  const details = payload.details;
  const dimensions: any = await loadImage(details.src);

  const position = calculatePosition(options, dimensions);

  return {
    id: payload.id,
    type: "image",
    name: "",
    display: {
      from: options.origin || 0,
      to: (options.origin || 5000) + 5e3,
    },
    details: {
      src: details.src || "",
      width: details.width || dimensions.width || 100,
      height: details.height || dimensions.height || 100,
      opacity: details.opacity ?? 100,
      transform: position.transform,
      border: details.border || "none",
      borderRadius: details.borderRadius || "0",
      boxShadow: details.boxShadow || "none",
      top: position.top || "0px",
      left: position.left || "0px",
    },
    metadata: payload.metadata || {},
  };
};

export const loadVideoItem = async (
  payload: IVideo,
  options: {
    origin?: number;
    size: {
      width: number;
      height: number;
    };
  }
): Promise<IVideo> => {
  const src = payload.details.src;
  const file = await loadVideo(src);

  const position = calculatePosition(options, file);

  const trim = calculateTrim(payload.trim, { duration: file.duration });

  const details = {
    width: payload.details.width || file.width || 100,
    height: payload.details.height || file.height || 100,
    duration: file.duration,
    src,
    volume: payload.details.volume ?? 100,
    top: payload.details.top || position.top || "0px",
    left: payload.details.left || position.left || "0px",
    text: payload.details.text,
    // Default volume
  };

  return {
    ...payload,
    trim,
    type: "video",
    details,
    display: calculateDisplayRange(payload?.display, {
      duration: file.duration,
      trim,
    }),
  };
};

export const loadAudioItem = async (payload: IAudio): Promise<IAudio> => {
  const details = payload.details;

  const duration = (await loadAudio(details.src)).duration;

  const from = payload?.display?.from ?? 0;
  return {
    id: payload.id,
    name: "",
    type: "audio",
    display: {
      from,
      to: from + duration,
    },
    trim: {
      from: 0,
      to: duration,
    },
    details: {
      src: details.src,
      duration: duration,
      volume: details.volume ?? 100,
      text: details.text,
      // Default volume
    },
    metadata: {
      ...payload.metadata,
    },
  };
};

const defaultTextDuration = 5000;

export const loadTextItem = async (
  payload: IText,
  options: {
    origin?: number;
    size: {
      width: number;
      height: number;
    };
  }
): Promise<IText> => {
  const textId = payload.id;

  await loadFonts([
    {
      fontFamily: payload.details.fontFamily ?? "",
      fontUrl: payload.details.fontUrl ?? "",
    },
  ]);

  const textStyle = {
    fontFamily: payload.details.fontFamily ?? "Arial",
    fontSize: payload.details.fontSize ?? "16px",
    fontWeight: payload.details.fontWeight ?? "normal",
    fontStyle: payload.details.fontStyle ?? "normal",
    textDecoration: payload.details.textDecoration ?? "none",
    textAlign: payload.details.textAlign ?? "left",
    lineHeight: payload.details.lineHeight ?? "normal",
    letterSpacing: payload.details.letterSpacing ?? "normal",
    wordSpacing: payload.details.wordSpacing ?? "normal",
    color: payload.details.color ?? "#ffffff",
    backgroundColor: payload.details.backgroundColor ?? "transparent",
    border: payload.details.border ?? "none",
    textShadow: payload.details.textShadow ?? "none",
    text: payload.details.text ?? "",
    opacity: payload.details.opacity ?? 100,
    width: payload.details.width ?? 300,
    wordWrap: payload.details.wordWrap ?? "normal",
    wordBreak: payload.details.wordBreak ?? "normal",
    WebkitTextStrokeColor: payload.details.WebkitTextStrokeColor ?? "#ffffff",
    WebkitTextStrokeWidth: payload.details.WebkitTextStrokeWidth ?? "0px",
    top: payload.details.top ?? "0px",
    left: payload.details.left ?? "0px",
  };

  const height = getTextHeight(payload.details.text ?? "", textStyle);

  const position = calculatePosition(options, {
    width: textStyle.width ?? 0,
    height,
  });

  return {
    id: textId,
    name: "",
    type: "text",
    display: {
      from: payload.display.from ?? 0,
      to: payload.display.to ?? defaultTextDuration,
    },
    details: {
      ...textStyle,
      height,
      top: position.top,
      left: position.left,
      fontUrl: payload.details.fontUrl,
      text: payload.details.text ?? "",
    },
    metadata: {},
  };
};
