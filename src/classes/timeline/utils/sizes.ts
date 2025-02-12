export const defaultSizes: Record<string, number> = {
  video: 42,
  image: 42,
  audio: 42,
  text: 42,
  caption: 42,
  template: 42,
};

export const mergeSizes = (
  customSizes: Record<string, number> = {}
): Record<string, number> => {
  const merged = { ...defaultSizes, ...customSizes };

  return Object.fromEntries(
    Object.entries(merged).filter(([, value]) => typeof value === "number")
  );
};
