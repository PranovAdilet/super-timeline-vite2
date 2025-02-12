type Position = {
  top: string;
  left: string;
  transform: string;
};

export const calculatePosition = (
  options: {
    origin?: number;
    size: {
      width: number;
      height: number;
    };
  },
  element: { width: number; height: number }
): Position => {
  const containerCenter = {
      x: options.size.width / 2,
      y: options.size.height / 2,
    },
    elementCenter = {
      x: element.width / 2,
      y: element.height / 2,
    },
    offsetX = containerCenter.x - elementCenter.x,
    offsetY = containerCenter.y - elementCenter.y,
    scaleFactor = Math.min(
      options.size.width / element.width,
      options.size.height / element.height
    );

  return {
    top: `${offsetY}px`,
    left: `${offsetX}px`,
    transform: `scale(${scaleFactor})`,
  };
};
