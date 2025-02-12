import {
  ImageObject,
  VideoObject,
  TextObject,
  AudioObject,
} from "@/classes/objects";
import { IAudio, IImage, IText, IVideo } from "@/shared/types";
import { timeMsToUnits } from "@/shared/utils";
import { classRegistry } from "fabric";

export const loadAudioObject = (
  item: IAudio,
  options: {
    tScale: number;
  }
) => {
  const display = item.display;
  const startTime = timeMsToUnits(display.from, options.tScale);
  const width = timeMsToUnits(display.to - display.from, options.tScale);

  const AudioClass: any = classRegistry.getClass("Audio") || AudioObject;
  return new AudioClass({
    width,
    height: 42,
    top: 10,
    left: startTime,
    id: item.id,
    display: display,
    text: item.details.text,
    trim: item.trim || {
      from: 0,
      to: item.details.duration,
    },
    duration: item.details.duration,
    src: item.details.src,
    tScale: options.tScale,
  });
};

export const loadImageObject = (
  item: IImage,
  options: {
    tScale: number;
  }
) => {
  const left = timeMsToUnits(item.display.from, options.tScale);
  const width = timeMsToUnits(item.details.duration || 5e3, options.tScale);
  const ImageClass: any = classRegistry.getClass("Image") || ImageObject;
  return new ImageClass({
    width,
    height: 42,
    id: item.id,
    src: item.details.src,
    tScale: options.tScale,
    top: 10,
    left,
    display: item.display,
  });
};

export const loadVideoObject = (
  item: IVideo,
  options: {
    tScale: number;
  }
): VideoObject => {
  const startTime = timeMsToUnits(item.trim.from, options.tScale);
  const width = timeMsToUnits(item.trim.to - item.trim.from, options.tScale);

  const VideoClass: any = classRegistry.getClass("Video") || VideoObject;

  return new VideoClass({
    width: width,
    height: 42,
    id: item.id,
    tScale: options.tScale,
    fill: "#333333",
    top: 10,
    left: startTime,
    display: item.trim,
    trim: item.trim,
    text: item.details.text,
  });
};

export const loadTextObject = (
  item: IText,
  options: {
    tScale: number;
  }
): TextObject => {
  const display = item.display;
  const startTime = timeMsToUnits(display.from, options.tScale);
  const width = timeMsToUnits(display.to - display.from, options.tScale);
  const TextClass: any = classRegistry.getClass("Text") || TextObject;

  return new TextClass({
    width: width,
    height: 42,
    id: item.id,
    display: display,
    top: 10,
    left: startTime,
    text: item.details.text,
    tScale: options.tScale,
  });
};
