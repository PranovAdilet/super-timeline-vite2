"use client";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Textbox, FabricImage, Pattern } from "fabric";
import {
  AlignGuidelines,
  CenteringGuidelines,
} from "@superduperai/fabric-guideline-plugin";
import { FONTS, loadFonts } from "@/shared/utils/fonts";

type Props = {
  className?: string;
  onReady?: (canvas: Canvas) => void;
  initialObjects?: any[];
  readonly?: boolean;
  width?: number;
  height?: number;
};

export const FabricCanvas: FC<Props> = ({
  className,
  onReady,
  readonly,
  initialObjects,
  width: initialWidth,
  height: initialHeight,
}) => {
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  const alignGuidelines = useRef<AlignGuidelines | null>(null);

  const centeringGuidelines = useRef<CenteringGuidelines | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const loadObjects = async (canvas: Canvas) => {
    if (!initialObjects) return;

    const objectsFonts: string[] = [];
    canvas.remove(...canvas.getObjects());

    const canvasWidth = canvas.getWidth();
    const canvasHeight = canvas.getHeight();
    const canvasSquare = canvasWidth * canvasHeight;
    const canvasSqrt = Math.round(Math.sqrt(canvasSquare) * 100) / 100;

    const canvasObjects = initialObjects.map((object) => {
      const { text, type, left, top, width, height, fontSize, ...objectData } =
        object;

      const finded = canvas.getObjects();
      console.log(finded, initialObjects);
      // if (finded) return;

      if (object.fontFamily && !objectsFonts.includes(object.fontFamily)) {
        objectsFonts.push(object.fontFamily);
      }

      const relativeData = {
        left: left * canvasWidth,
        top: top * canvasHeight,
        width: width * canvasWidth,
        height: height * canvasHeight,
        fontSize: fontSize
          ? Math.round((canvasSqrt / fontSize) * 100) / 100
          : undefined,
      };

      if (type === "Textbox") {
        const textbox = new Textbox(object.text, {
          ...objectData,
          ...relativeData,
          startTime: 7,
          endTime: 12,
        });
        textbox.setControlsVisibility({ mt: false, mb: false });
        return textbox;
      } else {
      }

      if (type === "Image") {
        const rect = new Rect({
          left: relativeData.left,
          top: relativeData.top,
          width: relativeData.width,
          height: relativeData.height,
          fill: "white",
          stroke: "black",
        });

        const imgElement = new Image();
        imgElement.onload = () => {
          rect.set({
            fill: new Pattern({
              source: imgElement,
              repeat: "no-repeat",
            }),
          });

          canvas.add(rect);
          canvas.renderAll();
        };

        imgElement.src = object.src;

        return rect;
      }

      if (type === "Video") {
        const videoElement = document.createElement("video");
        const videoSource = document.createElement("source");

        videoSource.src = object.src;
        videoElement.appendChild(videoSource);

        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;

        videoElement.width = relativeData.width;
        videoElement.height = relativeData.height;

        const canvasContainer = document.getElementById("container");

        if (canvasContainer) {
          videoElement.style.position = "absolute";
          videoElement.style.left = `${relativeData.left}px`;
          videoElement.style.top = `${relativeData.top}px`;

          canvasContainer.appendChild(videoElement);
        } else {
          console.error("Canvas container not found!");
        }

        const rect = new Rect({
          left: relativeData.left,
          top: relativeData.top,
          width: relativeData.width,
          height: relativeData.height,
          fill: "white",
          stroke: "black",
        });

        return rect;
      }

      throw new Error(`Unsupported object type: ${object.type}`);
    });

    const fontsData = objectsFonts.map((objectFont) => {
      const defaultFont = FONTS.find(
        (font) =>
          font.family === objectFont || font.postScriptName === objectFont
      );
      return {
        name: defaultFont?.fullName ?? "",
        url: defaultFont?.url ?? "",
      };
    });

    await loadFonts(fontsData);
    canvas.add(...canvasObjects);
  };

  const setCurrentDimensions = (canvas: Canvas) => {
    const oldWidth = canvas.getWidth();
    const oldHeight = canvas.getHeight();

    canvas.setDimensions({
      width: containerRef.current?.clientWidth ?? 0,
      height: containerRef.current?.clientHeight ?? 0,
    });

    const scaleX = canvas.getWidth() / oldWidth;
    const scaleY = canvas.getHeight() / oldHeight;

    canvas.getObjects().forEach((object: any) => {
      object.set({
        width: object.width * scaleX,
        height: object.height * scaleY,
        left: object.left * scaleX,
        top: object.top * scaleY,
        fontSize: object.fontSize ? object.fontSize * scaleX : undefined,
      });
    });

    canvas.renderAll();
  };
  useEffect(() => {
    if (!canvas || !initialObjects || canvas.getActiveObject()) return;
    loadObjects(canvas);
  }, [initialObjects, canvas]);

  useEffect(() => {
    if (!canvas) return;

    setGuidelines(canvas);

    if (onReady) {
      onReady(canvas);
    }
  }, [canvas]);

  const setGuidelines = (canvas: Canvas) => {
    alignGuidelines.current = new AlignGuidelines({
      canvas: canvas,
      aligningOptions: {
        lineColor: "#32D10A",
        lineMargin: 8,
      },
    });

    alignGuidelines.current.init();

    centeringGuidelines.current = new CenteringGuidelines({
      canvas: canvas,
      color: "#32D10A",
      verticalOffset: 8,
      horizontalOffset: 8,
    });

    centeringGuidelines.current.init();
  };

  useEffect(() => {
    const width = containerRef.current?.clientWidth ?? initialWidth ?? 0;
    const height = containerRef.current?.clientHeight ?? initialHeight ?? 0;

    const fabricCanvas = new Canvas(canvasRef.current ?? undefined, {
      width,
      height,
    });

    const observeTarget = containerRef.current;

    if (!observeTarget) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      if (width !== 0 && height !== 0) {
        setCurrentDimensions(fabricCanvas);
        setCanvas(fabricCanvas);
      }
    });

    resizeObserver.observe(observeTarget);

    return () => {
      resizeObserver.unobserve(observeTarget);
      resizeObserver.disconnect();
      fabricCanvas.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        pointerEvents: readonly ? "none" : undefined,
        width: initialWidth ? `${initialWidth}px` : undefined,
        height: initialHeight ? `${initialHeight}px` : undefined,
      }}
      id="container"
    >
      <canvas
        ref={canvasRef}
        id="canvas"
      />
    </div>
  );
};
