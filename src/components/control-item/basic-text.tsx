import { IText, ITrackItem, ScrollArea } from "@/shared";

interface ITextControlProps {
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
  // boxShadow: IBoxShadow;
}

const getStyleNameFromFontName = (fontName: string) => {
  const fontFamilyEnd = fontName.lastIndexOf("-");
  const styleName = fontName
    .substring(fontFamilyEnd + 1)
    .replace("Italic", " Italic");
  return styleName;
};

const BasicText = ({ trackItem }: { trackItem: ITrackItem & IText }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-sm font-medium">
        Text
      </div>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-2">
            {/* <FontFamily
              handleChangeFont={onChangeFontFamily}
              fontFamilyDisplay={properties.fontFamilyDisplay}
            />
            <div className="grid grid-cols-2 gap-2">
              <FontStyle
                selectedFont={selectedFont}
                handleChangeFontStyle={handleChangeFontStyle}
              />
              <FontSize
                value={properties.fontSize}
                onChange={onChangeFontSize}
              />
            </div>
            <FontColor
              value={properties.color}
              handleColorChange={handleColorChange}
            /> */}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* <Alignment
              value={properties.textAlign}
              onChange={onChangeTextAlign}
            />
            <TextDecoration
              value={properties.textDecoration}
              onChange={onChangeTextDecoration}
            /> */}
          </div>
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
