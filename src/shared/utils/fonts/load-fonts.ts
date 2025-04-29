import { ICompactFont, IFont } from "@/shared/types";
import { groupBy } from "lodash-es";

export const loadFonts = (fonts: { name: string; url: string }[]) => {
  const promisesList = fonts.map((font) => {
    return new FontFace(font.name, `url(${font.url})`)
      .load()
      .catch((err) => err);
  });
  return new Promise((resolve, reject) => {
    Promise.all(promisesList)
      .then((res) => {
        res.forEach((uniqueFont) => {
          if (uniqueFont && uniqueFont.family) {
            document.fonts.add(uniqueFont);
            resolve(true);
          }
        });
      })
      .catch((err) => reject(err));
  });
};

const findDefaultFont = (fonts: IFont[]): IFont => {
  const regularFont = fonts.find((font) =>
    font.fullName.toLowerCase().includes("regular")
  );

  return regularFont ? regularFont : fonts[0];
};

export const getCompactFontData = (fonts: IFont[]): ICompactFont[] => {
  const compactFontsMap: { [key: string]: ICompactFont } = {};
  // lodash groupby
  const fontsGroupedByFamily = groupBy(fonts, (font) => font.family);

  Object.keys(fontsGroupedByFamily).forEach((family) => {
    const fontsInFamily = fontsGroupedByFamily[family];
    const defaultFont = findDefaultFont(fontsInFamily);
    const compactFont: ICompactFont = {
      family: family,
      styles: fontsInFamily,
      default: defaultFont,
    };
    compactFontsMap[family] = compactFont;
  });

  return Object.values(compactFontsMap);
};

export async function ensureFontLoaded(fontFamily: string, fontUrl: string) {
  // Проверяем, не загружен ли уже шрифт
  if (document.fonts.check(`1em ${fontFamily}`)) return;

  const font = new FontFace(fontFamily, `url('${fontUrl}') format('woff2')`);
  await font.load();
  (document as any).fonts.add(font);
  // Ждём, пока шрифт станет доступен
  await (document as any).fonts.ready;
}
