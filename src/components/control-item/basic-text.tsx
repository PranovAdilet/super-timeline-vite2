import { EDIT_OBJECT, eventBus } from "@/classes";
import {
  Button,
  ColorPicker,
  DEFAULT_FONT,
  FONTS,
  getCompactFontData,
  IBoxShadow,
  ICompactFont,
  IFont,
  Input,
  IText,
  ITrackItem,
  loadFonts,
  Popover,
  ScrollArea,
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ChevronDown,
  Strikethrough,
  Underline,
} from "lucide-react";
import { useEffect, useState } from "react";
import Opacity from "./common/opacity";
import { Label } from "@radix-ui/themes/dist/cjs/components/context-menu";

export interface ITextControlProps {
  color: string;
  colorDisplay: string;
  fontSize: number;
  fontSizeDisplay: string;
  fontFamily: string;
  fontFamilyDisplay: string;
  opacityDisplay: string;
  textAlign: string;
  textDecoration: string;
  borderWidth: number;
  borderColor: string;
  opacity: number;
  boxShadow: IBoxShadow;
  backgroundColor?: string;
}

export const getStyleNameFromFontName = (fontName: string) => {
  const fontFamilyEnd = fontName.lastIndexOf("-");
  const styleName = fontName
    .substring(fontFamilyEnd + 1)
    .replace("Italic", " Italic");
  return styleName;
};

const BasicText = ({ trackItem }: { trackItem: ITrackItem & IText }) => {
  const [properties, setProperties] = useState<ITextControlProps>({
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
    backgroundColor: "#00000090",
  });
  const [selectedFont, setSelectedFont] = useState<ICompactFont>({
    family: "Open Sans",
    styles: [],
    default: DEFAULT_FONT,
    name: "Regular",
  });

  useEffect(() => {
    const fontFamily =
      trackItem.details?.fontFamily || DEFAULT_FONT.postScriptName;
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
    // if (trackItem.details.opacityDisplay == undefined) {
    //   trackItem.details.opa = "100";
    // }
    // if (trackItem.details.fontSizeDisplay == undefined) {
    //   trackItem.details.fontSizeDisplay = "62";
    // }
    setProperties({
      color: trackItem.details.color || "#ffffff",
      colorDisplay: trackItem.details.color || "#ffffff",
      fontSize: trackItem.details.fontSize || 62,
      fontSizeDisplay: (trackItem.details.fontSize || 62) + "px",
      fontFamily: selectedFont?.family || "Open Sans",
      fontFamilyDisplay: selectedFont?.family || "Open Sans",
      opacity: trackItem.details.opacity || 100,
      opacityDisplay: (trackItem.details.opacity?.toString() || "100") + "%",
      textAlign: trackItem.details.textAlign || "left",
      textDecoration: trackItem.details.textDecoration || "none",
      borderWidth: trackItem.details.borderWidth || 0,
      borderColor: trackItem.details.borderColor || "#000000",
      boxShadow: trackItem.details.boxShadow || {
        color: "#000000",
        x: 0,
        y: 0,
        blur: 0,
      },
      backgroundColor: trackItem.details.backgroundColor || "#00000090",
    });
  }, [trackItem.id]);

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

    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            fontFamily: fontName,
            fontUrl: fontUrl,
          },
        },
      },
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
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            fontFamily: fontName,
            fontUrl: fontUrl,
          },
        },
      },
    });
  };

  const handleChangeFontSize = (v: number) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            fontSize: v,
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        fontSize: v,
      } as ITextControlProps;
    });
  };

  const handleColorChange = (color: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        color,
      } as ITextControlProps;
    });

    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            color,
          },
        },
      },
    });
  };

  const handleBackgroundChange = (backgroundColor: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        backgroundColor,
      } as ITextControlProps;
    });

    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            backgroundColor,
          },
        },
      },
    });
  };

  const handleChangeTextAlign = (v: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        textAlign: v,
      } as ITextControlProps;
    });
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            textAlign: v,
          },
        },
      },
    });
  };

  const handleChangeTextDecoration = (v: string) => {
    setProperties({
      ...properties,
      textDecoration: v,
    });

    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            textDecoration: v,
          },
        },
      },
    });
  };

  const handleChangeOpacity = (v: number) => {
    eventBus.dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          details: {
            opacity: v,
          },
        },
      },
    });
    setProperties((prev) => {
      return {
        ...prev,
        opacity: v,
      } as ITextControlProps;
    }); // Update local state
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Text
      </div>
      <ScrollArea className="h-full">
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

          {/* <FontCase id={trackItem.id} />
          <Outline
            label="Font stroke"
            onChageBorderWidth={(v: number) => onChangeBorderWidth(v)}
            onChangeBorderColor={(v: string) => onChangeBorderColor(v)}
            valueBorderWidth={properties.borderWidth as number}
            valueBorderColor={properties.borderColor as string}
          />
          <Shadow
            label="Font shadow"
            onChange={(v: IBoxShadow) => onChangeBoxShadow(v)}
            value={properties.boxShadow!}
          />
          <Opacity
            onChange={(v: number) => handleChangeOpacity(v)}
            value={properties.opacity!}
          /> */}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BasicText;

export const FontFamily = ({
  handleChangeFont,
  fontFamilyDisplay,
}: {
  handleChangeFont: (font: ICompactFont) => void;
  fontFamilyDisplay: string;
}) => {
  const compactFonts = getCompactFontData(FONTS);

  return (
    <Popover
      trigger={
        <Button
          className="flex w-full items-center justify-between text-sm"
          variant="secondary"
        >
          <div className="w-full text-left">
            <p className="truncate">{fontFamilyDisplay}</p>
          </div>
          <ChevronDown
            className="text-muted-foreground"
            size={14}
          />
        </Button>
      }
    >
      <ScrollArea
        className=" h-[250px] w-full py-2"
        style={{ minHeight: "auto" }}
      >
        {compactFonts.map((font, index) => (
          <div
            onClick={() => handleChangeFont(font)}
            className="cursor-pointer px-2 py-1 hover:bg-zinc-800/50"
            key={index}
          >
            <img
              style={{
                filter: "invert(100%)",
              }}
              src={font.default.preview}
              alt={font.family}
            />
          </div>
        ))}
      </ScrollArea>
    </Popover>
  );
};

export const FontSize = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) => {
  const [localValue, setLocalValue] = useState<string | number>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    if (localValue !== "") {
      onChange(Number(localValue)); // Propagate as a number
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (localValue !== "") {
        onChange(Number(localValue)); // Propagate as a number
      }
    }
  };

  return (
    <div className="relative">
      <Input
        variant="secondary"
        className="h-9"
        value={localValue}
        onChange={(e) => {
          const newValue = e.target.value;

          // Allow empty string or validate as a number
          if (
            newValue === "" ||
            (!isNaN(Number(newValue)) && Number(newValue) >= 0)
          ) {
            setLocalValue(newValue); // Update local state
          }
        }}
        onBlur={handleBlur} // Trigger onBlur event
        onKeyDown={handleKeyDown} // Trigger onKeyDown event
      />
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-sm text-muted-foreground">
        px
      </div>
    </div>
  );
};

export const FontStyle = ({
  selectedFont,
  handleChangeFontStyle,
}: {
  selectedFont: ICompactFont;
  handleChangeFontStyle: (font: IFont) => void;
}) => {
  return (
    <Popover
      trigger={
        <Button
          className="flex w-full items-center justify-between text-sm max-h-full"
          variant="secondary"
        >
          <div className="w-full overflow-hidden text-left">
            <p className="truncate"> {selectedFont.name}</p>
          </div>
          <ChevronDown
            className="text-muted-foreground"
            size={14}
          />
        </Button>
      }
    >
      {selectedFont.styles.map((style, index) => {
        const fontFamilyEnd = style.postScriptName.lastIndexOf("-");
        const styleName = style.postScriptName
          .substring(fontFamilyEnd + 1)
          .replace("Italic", " Italic");
        return (
          <div
            className="flex min-h-auto h-6 cursor-pointer items-center px-2 py-3.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
            key={index}
            onClick={() => handleChangeFontStyle(style)}
            style={{ minHeight: "auto" }}
          >
            {styleName}
          </div>
        );
      })}
    </Popover>
  );
};

export const FontColor = ({
  value,
  handleColorChange,
}: {
  value: string;
  handleColorChange: (color: string) => void;
}) => {
  const [localValue, setLocalValue] = useState<string>(value);
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    <div className="flex gap-2">
      <Popover
        trigger={
          <div
            style={{ background: localValue || "#ffffff" }}
            className="h-9 w-9 flex-none cursor-pointer rounded-md border border-border"
          ></div>
        }
      >
        <ColorPicker
          color={localValue}
          onChange={(v: string) => {
            setLocalValue(v);
            handleColorChange(v);
          }}
        />
      </Popover>
      <div className="relative">
        <Input
          variant="secondary"
          className="h-9"
          value={localValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setLocalValue(newValue); // Update local state
            // Only propagate if it's not empty
            if (newValue !== "") {
              handleColorChange(newValue); // Propagate the value
            }
          }}
        />
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-sm text-muted-foreground">
          hex
        </div>
      </div>
    </div>
  );
};

export const BackgroundColor = ({
  value,
  handleBackgroundChange,
}: {
  value: string;
  handleBackgroundChange: (color: string) => void;
}) => {
  const [localValue, setLocalValue] = useState<string>(value);
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    // <div className="flex gap-2">
    //
    // </div>
    <div className="flex flex-col gap-2 pb-4">
      <Label className="font-sans text-xs font-semibold text-muted-foreground">
        Background
      </Label>
      <div className="flex gap-2">
        <Popover
          trigger={
            <div
              style={{ background: localValue || "#ffffff" }}
              className="h-9 w-9 flex-none cursor-pointer rounded-md border border-border"
            ></div>
          }
        >
          <ColorPicker
            color={localValue}
            onChange={(v: string) => {
              setLocalValue(v);
              handleBackgroundChange(v);
            }}
          />
        </Popover>
        <div className="relative">
          <Input
            variant="secondary"
            className="h-9"
            value={localValue}
            onChange={(e) => {
              const newValue = e.target.value;
              setLocalValue(newValue); // Update local state
              // Only propagate if it's not empty
              if (newValue !== "") {
                handleBackgroundChange(newValue); // Propagate the value
              }
            }}
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-sm text-muted-foreground">
            hex
          </div>
        </div>
      </div>
    </div>
  );
};

export const TextDecoration = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  const [localValue, setLocalValue] = useState<string>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  return (
    <ToggleGroup
      value={localValue.split(" ")}
      size="sm"
      className="grid grid-cols-3"
      type="multiple"
      onValueChange={(v) => onChange(v.filter((v) => v !== "none").join(" "))}
      variant={"secondary"}
    >
      <ToggleGroupItem
        size="sm"
        value="underline"
        aria-label="Toggle left"
      >
        <Underline size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="line-through"
        aria-label="Toggle italic"
      >
        <Strikethrough size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="overline"
        aria-label="Toggle strikethrough"
      >
        <div>
          <svg
            width={18}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.59996 1.75977C5.43022 1.75977 5.26744 1.82719 5.14741 1.94722C5.02739 2.06724 4.95996 2.23003 4.95996 2.39977C4.95996 2.5695 5.02739 2.73229 5.14741 2.85231C5.26744 2.97234 5.43022 3.03977 5.59996 3.03977H18.4C18.5697 3.03977 18.7325 2.97234 18.8525 2.85231C18.9725 2.73229 19.04 2.5695 19.04 2.39977C19.04 2.23003 18.9725 2.06724 18.8525 1.94722C18.7325 1.82719 18.5697 1.75977 18.4 1.75977H5.59996ZM7.99996 6.79977C7.99996 6.58759 7.91568 6.38411 7.76565 6.23408C7.61562 6.08405 7.41213 5.99977 7.19996 5.99977C6.98779 5.99977 6.7843 6.08405 6.63428 6.23408C6.48425 6.38411 6.39996 6.58759 6.39996 6.79977V15.2798C6.39996 16.765 6.98996 18.1894 8.04016 19.2396C9.09037 20.2898 10.5147 20.8798 12 20.8798C13.4852 20.8798 14.9096 20.2898 15.9598 19.2396C17.01 18.1894 17.6 16.765 17.6 15.2798V6.79977C17.6 6.58759 17.5157 6.38411 17.3656 6.23408C17.2156 6.08405 17.0121 5.99977 16.8 5.99977C16.5878 5.99977 16.3843 6.08405 16.2343 6.23408C16.0842 6.38411 16 6.58759 16 6.79977V15.2798C16 16.3406 15.5785 17.358 14.8284 18.1082C14.0782 18.8583 13.0608 19.2798 12 19.2798C10.9391 19.2798 9.92168 18.8583 9.17153 18.1082C8.42139 17.358 7.99996 16.3406 7.99996 15.2798V6.79977Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export const Alignment = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  const [localValue, setLocalValue] = useState<string>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <ToggleGroup
      value={localValue}
      size="sm"
      className="grid grid-cols-3"
      type="single"
      onValueChange={(v) => {
        onChange(v);
        setLocalValue(v);
      }}
      variant={"secondary"}
    >
      <ToggleGroupItem
        size="sm"
        value="left"
        aria-label="Toggle left"
      >
        <AlignLeft size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="center"
        aria-label="Toggle italic"
      >
        <AlignCenter size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="right"
        aria-label="Toggle strikethrough"
      >
        <AlignRight size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
