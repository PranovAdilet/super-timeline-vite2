import { ITrack, ITrackItem } from "@/shared/types";

export const calculateDuration = (
  trackItems: Record<string, ITrackItem>
): number => {
  return Object.keys(trackItems).reduce((maxTime, itemKey) => {
    const {
      display: { to },
    } = trackItems[itemKey];
    return Math.max(maxTime, to);
  }, 0);
};

export const calculateTrim = (
  trim: { from?: number; to?: number } | null,
  context: { duration: number }
) => {
  if (!trim) {
    return {
      from: 0,
      to: context.duration,
    };
  }

  const { from, to } = trim;

  return {
    from: from ?? 0,
    to: to ?? context.duration,
  };
};

export const calculateDisplayRange = (
  display: { from: number; to: number } | undefined,
  options: { duration: number; trim?: { from: number; to: number } }
) => {
  const { duration, trim } = options;

  const defaultDuration = trim ? trim.to - trim.from : duration || 5000;

  const defaultRange = {
    from: 0,
    to: defaultDuration,
  };

  if (!display) {
    return defaultRange;
  }

  if (display.from !== undefined && display.from < 0) {
    console.error(
      "'from' must be a non-negative number. Returning default display."
    );
    return defaultRange;
  }

  if (display.from !== undefined && display.to === undefined) {
    return {
      from: display.from,
      to: display.from + defaultDuration,
    };
  }

  if (display.to !== undefined) {
    if (display.to < 0) {
      console.error(
        "'to' must be a non-negative number. Returning default display."
      );
      return defaultRange;
    }

    if (display.to < display.from) {
      console.error(
        "'to' must be greater than or equal to 'from'. Returning default display."
      );
      return defaultRange;
    }
  }

  return display;
};

export function filterAndCleanTracks(tracks: ITrack[], idsToRemove: string[]) {
  return tracks
    .map((track) => {
      // Фильтруем элементы внутри трека
      const updatedItems = track.items.filter(
        (item) => !idsToRemove.includes(item)
      );
      return { ...track, items: updatedItems };
    })
    .filter((track) => track.items.length > 0); // Возвращаем только треки с элементами
}
