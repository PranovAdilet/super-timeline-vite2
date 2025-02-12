export const getTextHeight = (text: string, styles: any): number => {
  const div = document.createElement("div");

  Object.keys(styles).forEach((key) => {
    if (key !== "height") div.style[key as any] = styles[key];
  });

  document.body.appendChild(div);
  div.textContent = text;
  div.style.width = `${styles.width}px`;
  div.style.fontSize = `${styles.fontSize}px`;

  const computedHeight = getComputedStyle(div).height;
  document.body.removeChild(div);

  return parseFloat(computedHeight);
};
