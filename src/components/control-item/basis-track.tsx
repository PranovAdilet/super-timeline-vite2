import {
  DEFAULT_FONT,
  FONTS,
  getCompactFontData,
  ICompactFont,
  IFont,
  ItemType,
  ITrack,
  loadFonts,
  ScrollArea,
  ToggleGroup,
  ToggleGroupItem,
  TrackSettings,
} from "@/shared";
import { useEffect, useState } from "react";
import Opacity from "./common/opacity";
import {
  Alignment,
  BackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  FontStyle,
  getStyleNameFromFontName,
  ITextControlProps,
  TextDecoration,
} from "./basic-text";
import { EDIT_OBJECT, eventBus } from "@/classes";
import Blur from "./common/blur";
import Brightness from "./common/brightness";
import Zoom from "./common/zoom";
import { MirrorMedia } from "./common/mirror";
import Volume from "./common/volume";

const BasicTrack = ({ trackItem }: { trackItem: TrackSettings & ITrack }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Track {trackItem.details?.trackType}
      </div>
      <ScrollArea className="h-full">
        {trackItem.details?.trackType === "text" ? (
          <BasisTextLayout trackItem={trackItem} />
        ) : trackItem.details?.trackType === "image" ? (
          <BasisImageLayout trackItem={trackItem} />
        ) : trackItem.details?.trackType === "video" ? (
          <BasisVideoLayout trackItem={trackItem} />
        ) : trackItem.details?.trackType === "audio" ? (
          <BasisAudioLayout trackItem={trackItem} />
        ) : (
          <></>
        )}
      </ScrollArea>
    </div>
  );
};

export default BasicTrack;

type TrackItemProps = {
  details?: Record<string, any>;
  items: string[];
  id: string;
  trackId: string;
};

const BasisTextLayout = ({ trackItem }: { trackItem?: TrackItemProps }) => {
  const [properties, setProperties] = useState<Record<string, any>>({
    color: "#000000",
    colorDisplay: "#000000",
    fontSize: 120,
    fontSizeDisplay: "12px",
    fontFamily: "Open Sans",
    fontFamilyDisplay: "Open Sans",
    opacity: 100,
    opacityDisplay: "100%",
    textAlign: "left",
    textDecoration: "none",
    borderWidth: 0,
    borderColor: "#000000",
    boxShadow: {
      color: "#000000",
      x: 0,
      y: 0,
      blur: 0,
    },
  });
  useEffect(() => {
    const fontFamily =
      trackItem?.details?.fontFamily || DEFAULT_FONT.postScriptName;
    const currentFont = FONTS.find(
      (font) => font.postScriptName === fontFamily
    )!;
    const selectedFont = getCompactFontData(FONTS).find(
      (font) => font.family === currentFont?.family
    )!;

    if (!selectedFont) return;

    setSelectedFont({
      ...selectedFont,
      name: getStyleNameFromFontName(currentFont.postScriptName),
    });

    setProperties({ ...trackItem?.details });
  }, [trackItem]);

  const [selectedFont, setSelectedFont] = useState<ICompactFont>({
    family: "Open Sans",
    styles: [],
    default: DEFAULT_FONT,
    name: "Regular",
  });

  const handleChangeFont = async (font: ICompactFont) => {
    const fontName = font.default.postScriptName;
    const fontUrl = font.default.url;
    await loadFonts([
      {
        name: fontName,
        url: fontUrl,
      },
    ]);
    setSelectedFont({ ...font, name: getStyleNameFromFontName(fontName) });
    setProperties({
      ...properties,
      fontFamily: font.default.family,
      fontFamilyDisplay: font.default.family,
    });

    const payload = setValues(
      trackItem?.items,
      {
        fontFamily: fontName,
        fontUrl: fontUrl,
        fontFamilyDisplay: font.default.family,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
  };

  const handleChangeFontStyle = async (font: IFont) => {
    const fontName = font.postScriptName;
    const fontUrl = font.url;
    const styleName = getStyleNameFromFontName(fontName);
    await loadFonts([
      {
        name: fontName,
        url: fontUrl,
      },
    ]);
    setSelectedFont({ ...selectedFont, name: styleName });

    const payload = setValues(
      trackItem?.items,
      {
        fontFamily: fontName,
        fontUrl: fontUrl,
      },
      trackItem?.trackId
    );
    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
  };

  const handleChangeFontSize = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        fontSize: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        fontSize: v,
      } as ITextControlProps;
    });
  };

  const handleBackgroundChange = (backgroundColor: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        backgroundColor,
      } as ITextControlProps;
    });

    const payload = setValues(
      trackItem?.items,
      {
        backgroundColor,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
  };

  const handleColorChange = (color: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        color: color,
      } as ITextControlProps;
    });

    const payload = setValues(
      trackItem?.items,
      {
        color: color,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
  };

  const handleChangeTextAlign = (v: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        textAlign: v,
      } as ITextControlProps;
    });

    const payload = setValues(
      trackItem?.items,
      {
        textAlign: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
  };

  const handleChangeTextDecoration = (v: string) => {
    setProperties({
      ...properties,
      textDecoration: v,
    });

    const payload = setValues(
      trackItem?.items,
      {
        textDecoration: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
  };

  const handleChangeOpacity = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        opacity: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });

    setProperties((prev) => {
      return {
        ...prev,
        opacity: v,
      } as ITextControlProps;
    });
  };
  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="flex flex-col gap-2">
        <FontFamily
          handleChangeFont={handleChangeFont}
          fontFamilyDisplay={properties.fontFamilyDisplay}
        />
        <div className="grid grid-cols-2 gap-3">
          <FontStyle
            selectedFont={selectedFont}
            handleChangeFontStyle={handleChangeFontStyle}
          />
          <FontSize
            value={properties.fontSize}
            onChange={handleChangeFontSize}
          />
        </div>
        <FontColor
          value={properties.color}
          handleColorChange={handleColorChange}
        />
        <div className="grid grid-cols-2 gap-2">
          <Alignment
            value={properties.textAlign}
            onChange={handleChangeTextAlign}
          />
          <TextDecoration
            value={properties.textDecoration}
            onChange={handleChangeTextDecoration}
          />
        </div>
      </div>

      <Opacity
        onChange={(v: number) => handleChangeOpacity(v)}
        value={properties.opacity!}
      />
      <BackgroundColor
        value={properties.backgroundColor || "#ffffff"}
        handleBackgroundChange={handleBackgroundChange}
      />
    </div>
  );
};

const BasisImageLayout = ({ trackItem }: { trackItem?: TrackItemProps }) => {
  const [properties, setProperties] = useState<Record<string, any>>({
    brightness: 100,
    opacity: 100,
    blur: 0,
    zoom: { type: "none", ease: "linear" },
    mirror: {
      x: false,
      y: false,
    },
  });

  useEffect(() => {
    setProperties({ ...trackItem?.details });
  }, [trackItem]);

  const handleChangeOpacity = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        opacity: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          opacity: v,
        },
      };
    });
  };

  const onChangeBlur = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        blur: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          blur: v,
        },
      };
    });
  };
  const onChangeBrightness = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        brightness: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          brightness: v,
        },
      };
    });
  };

  const handleZoomTypeChange = (type: string) => {
    const zoom = {
      ...properties?.zoom,
      type,
    };
    const payload = setValues(
      trackItem?.items,
      {
        zoom,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        zoom,
      };
    });
  };

  const handleZoomEaseChange = (ease: string) => {
    const zoom = {
      ...properties.zoom,
      ease,
    };
    const payload = setValues(
      trackItem?.items,
      {
        zoom,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        zoom,
      };
    });
  };

  const handleMirrorChange = ({ x, y }: { x: boolean; y: boolean }) => {
    const payload = setValues(
      trackItem?.items,
      {
        mirror: {
          x,
          y,
        },
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        details: {
          ...prev.details,
          mirror: {
            x,
            y,
          },
        },
      };
    });
  };

  return (
    <div className="flex flex-col gap-2 px-4">
      <Opacity
        onChange={(v: number) => handleChangeOpacity(v)}
        value={properties.opacity!}
      />
      <Blur
        onChange={(v: number) => onChangeBlur(v)}
        value={properties.blur!}
      />
      <Brightness
        onChange={(v: number) => onChangeBrightness(v)}
        value={properties.brightness!}
      />

      <Zoom
        type={properties.zoom?.type ?? "none"}
        ease={properties.zoom?.ease ?? "in"}
        onTypeChange={handleZoomTypeChange}
        onEaseChange={handleZoomEaseChange}
      />
      <MirrorMedia
        onMirrorChange={handleMirrorChange}
        horizontal={properties.mirror?.x}
        vertical={properties.mirror?.y}
      />
    </div>
  );
};

const BasisVideoLayout = ({ trackItem }: { trackItem?: TrackItemProps }) => {
  const [properties, setProperties] = useState<Record<string, any>>({
    volume: 100,
    opacity: 100,
    zoom: { type: "none", ease: "linear" },
    mirror: {
      x: false,
      y: false,
    },
  });

  useEffect(() => {
    setProperties({ ...trackItem?.details });
  }, [trackItem?.id]);

  const handleChangeVolume = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        volume: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });

    setProperties((prev) => {
      return {
        ...prev,
        volume: v,
      };
    });
  };

  const handleChangeOpacity = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        opacity: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        opacity: v,
      };
    });
  };

  const handleZoomTypeChange = (type: string) => {
    const payload = setValues(
      trackItem?.items,
      {
        zoom: {
          ...properties.zoom,
          type,
        },
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        zoom: {
          ...properties.zoom,
          type,
        },
      };
    });
  };
  const handleZoomEaseChange = (ease: string) => {
    const payload = setValues(
      trackItem?.items,
      {
        zoom: {
          ...properties?.zoom,
          ease,
        },
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        zoom: {
          ...properties.zoom,
          ease,
        },
      };
    });
  };

  const handleMirrorChange = ({ x, y }: { x: boolean; y: boolean }) => {
    const payload = setValues(
      trackItem?.items,
      {
        mirror: {
          x,
          y,
        },
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });
    setProperties((prev) => {
      return {
        ...prev,
        mirror: {
          x,
          y,
        },
      };
    });
  };

  return (
    <div className="flex flex-col gap-2 px-4">
      <Volume
        onChange={(v: number) => handleChangeVolume(v)}
        value={properties.volume!}
      />

      <Opacity
        onChange={(v: number) => handleChangeOpacity(v)}
        value={properties.opacity!}
      />
      <Zoom
        type={properties.zoom?.type ?? "none"}
        ease={properties.zoom?.ease ?? "in"}
        onTypeChange={handleZoomTypeChange}
        onEaseChange={handleZoomEaseChange}
      />
      <MirrorMedia
        onMirrorChange={handleMirrorChange}
        horizontal={properties.mirror?.x}
        vertical={properties.mirror?.y}
      />
    </div>
  );
};

const BasisAudioLayout = ({ trackItem }: { trackItem?: TrackItemProps }) => {
  const [properties, setProperties] = useState<Record<string, any>>({
    volume: 100,
  });

  useEffect(() => {
    setProperties({
      ...trackItem?.details,
    });
  }, [trackItem]);

  const handleChangeVolume = (v: number) => {
    const payload = setValues(
      trackItem?.items,
      {
        volume: v,
      },
      trackItem?.trackId
    );

    eventBus.dispatch(EDIT_OBJECT, {
      payload,
    });

    setProperties((prev) => {
      return {
        ...prev,
        volume: v,
      };
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Audio
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <Volume
            onChange={handleChangeVolume}
            onValueCommitChange={handleChangeVolume}
            value={properties.volume!}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

const setValues = (
  items?: string[],
  details?: Record<string, any>,
  trackId?: string
) => {
  return items?.reduce<Record<string, any>>((acc, rec) => {
    acc[rec] = {
      trackId,
      details: { ...details },
    };
    return acc;
  }, {});
};

const AcceptsTrack = ({
  value,
  onChange,
}: {
  value: ItemType[];
  onChange: (v: ItemType[]) => void;
}) => {
  const [localValue, setLocalValue] = useState<ItemType[]>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    <ToggleGroup
      size="sm"
      value={localValue}
      className="grid grid-cols-4 gap-2 px-2"
      type="multiple"
      onValueChange={(v) => onChange(v as ItemType[])}
      variant={"secondary"}
    >
      <ToggleGroupItem
        size="sm"
        value="text"
        aria-label="Toggle text"
      >
        Text
      </ToggleGroupItem>
      <ToggleGroupItem
        value="image"
        aria-label="Toggle image"
      >
        Image
      </ToggleGroupItem>
      <ToggleGroupItem
        value="video"
        aria-label="Toggle video"
      >
        Video
      </ToggleGroupItem>
      <ToggleGroupItem
        value="audio"
        aria-label="Toggle audio"
      >
        Audio
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
