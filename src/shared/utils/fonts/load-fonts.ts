type FontDetails = {
  fontFamily: string;
  fontUrl: string;
};

type FontLoadResult = FontFace | Error;
export const loadFonts = (fonts: FontDetails[]): Promise<boolean> => {
  const fontPromises: Promise<FontLoadResult>[] = fonts.map(
    (font) => new FontFace(font.fontFamily, `url(${font.fontUrl})`).load()
    // .catch((error: unknown) => error),
  );

  return fontPromises.length === 0
    ? Promise.resolve(true)
    : new Promise((resolve, reject) => {
        Promise.all(fontPromises)
          .then((loadedFonts) => {
            loadedFonts.forEach((font) => {
              if (font instanceof FontFace && font.family) {
                document.fonts.add(font);
                resolve(true);
              }
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
};

// const findDefaultFont = (fonts: IFont[]): IFont => {
//   const regularFont = fonts.find((font) =>
//     font.fullName.toLowerCase().includes("regular")
//   );

//   return regularFont ? regularFont : fonts[0];
// };

// export const getCompactFontData = (fonts: IFont[]): ICompactFont[] => {
//   const compactFontsMap: { [key: string]: ICompactFont } = {};
//   // lodash groupby
//   const fontsGroupedByFamily = groupBy(fonts, (font) => font.family);

//   Object.keys(fontsGroupedByFamily).forEach((family) => {
//     const fontsInFamily = fontsGroupedByFamily[family];
//     const defaultFont = findDefaultFont(fontsInFamily);
//     const compactFont: ICompactFont = {
//       family: family,
//       styles: fontsInFamily,
//       default: defaultFont,
//     };
//     compactFontsMap[family] = compactFont;
//   });

//   return Object.values(compactFontsMap);
// };
