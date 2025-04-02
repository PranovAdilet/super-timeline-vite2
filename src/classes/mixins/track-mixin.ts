import { classRegistry, Rect } from "fabric";
import type {
  ITrack,
  ITrackItem,
  TrackSettings,
} from "@/shared/types/timeline";
import { HelperObject, TrackObject } from "@/classes/objects";
import { v4 as uuidv4 } from "uuid";
import { Timeline } from "../timeline/timeline";
import { TrackSettingsObject } from "../items/track-settings";
import { trackSettingsDetailsMap } from "../state/events/crud";

const Oe = {
    text: 32,
    element: 32,
    image: 40,
    video: 40,
    audio: 32,
    helper: 8,
    main: 40,
  },
  Bn = (n: string) => {
    switch (n) {
      case "text":
        return Oe.text;
      case "image":
        return Oe.image;
      case "video":
        return Oe.video;
      case "audio":
        return Oe.audio;
      case "helperTop":
        return 40;
      case "helperBottom":
        return 40;
      case "helperCenter":
        return 8;
      case "main":
        return Oe.main;
      default:
        return Oe.text;
    }
  };

export class TracksMixin {
  renderTrackSettings(this: Timeline, tracks: ITrack[]) {
    let top = 42;
    const newSettings: Record<string, TrackSettings> = {};

    const objectsToRemove = this.getObjects().filter(
      (item) => item.type === "tracksettings"
    );

    this.remove(...objectsToRemove);

    tracks.forEach((track, index) => {
      const rect = new TrackSettingsObject({
        width: 40,
        height: 42,
        left: -50,
        top: 42 + index * 50,
        id: track.id,
        trackId: track.id,
        items: [],
      });
      top += 50;
      this.add(rect);

      const trackSettingsDetails = trackSettingsDetailsMap[track.type];

      if (this.tracksSettings[track.id]) {
        const oldSettings = this.tracksSettings[track.id];

        newSettings[track.id] = {
          ...oldSettings,
          details: {
            trackType: track.type,
            ...trackSettingsDetails,
          },
          items: track.items,
        };
        return;
      }
      newSettings[track.id] = {
        ...track,
        id: track.id,
        type: "tracksettings",
        trackId: track.id,
        details: {
          trackType: track.type,
          ...trackSettingsDetails,
        },
      };
    });

    this.tracksSettings = { ...newSettings, ...this.tracksSettings };
    this.renderAll();
  }

  findOrCreateTrack(
    this: Timeline,
    trackItemData: ITrackItem,
    { trackId, trackIndex }: { trackId?: string; trackIndex?: number }
  ): string {
    const id = trackId;

    if (id) {
      const existingTrack = this.tracks.find((track) => track.id === id);
      if (existingTrack) {
        existingTrack.items.push(trackItemData.id);
        return id;
      }
    }

    const newTrack: any = {
      id: uuidv4(), // Генерация уникального ID
      items: [trackItemData.id],
      type: trackItemData.type,
      accepts: this.acceptsMap?.[trackItemData.type],
    };

    if (trackIndex !== undefined) {
      this.tracks.splice(trackIndex, 0, newTrack);
    } else {
      this.tracks.push(newTrack);
    }
    this.renderTracks();

    return newTrack.id;
  }

  // Метод для удаления всех треков и вспомогательных объектов
  removeTracks(this: Timeline): void {
    this.getObjects("Track", "Helper")?.forEach((obj) => this.remove(obj));
  }

  // Метод для отображения треков
  renderTracks(this: Timeline): void {
    this.updateTracksState();
    this.removeTracks();

    const trackWidth = this.width;
    const elements = this.tracks
      .flatMap((track) => [
        track,
        {
          id: `after-${track.id}`,
          type: "helper",
          items: [],
          accepts: [],
        },
      ])
      .slice(0, -1);

    let topPosition = 0;
    const HelperClass: any = classRegistry.getClass("Helper") || HelperObject;

    // Верхний вспомогательный объект
    const topHelper = new HelperClass({
      id: "helperLineTop",
      top: topPosition,
      selectable: false,
      evented: false,
      tScale: this.tScale,
      width: trackWidth,
      kind: "top",
      metadata: {},
    });

    topPosition += Bn("helperTop");
    this.insertAt(0, topHelper);

    // Рендеринг треков и вспомогательных объектов
    elements.forEach((element, order) => {
      if (element.type === "helper") {
        const helperHeight = Bn("helperCenter");
        const helper = new HelperClass({
          id: element.id,
          top: topPosition,
          tScale: this.tScale,
          width: trackWidth,
          height: helperHeight,
          metadata: { order: (order + 1) / 2 },
          kind: "center",
        });
        topPosition += helperHeight;
        this.insertAt(0, helper);
      } else {
        const TrackClass: any = classRegistry.getClass("Track") || TrackObject;
        const accepts =
          element.type === "image" || element.type === "video"
            ? ["image", "video"]
            : [element.type];
        const track = new TrackClass({
          id: element.id,
          top: topPosition,
          left: 0,
          fill: "#18181b",
          height: 42,
          width: trackWidth,
          tScale: this.tScale,
          accepts: accepts,
          // accepts: this.acceptsMap?.[element.type] || [],
          items: element.items,
        });
        topPosition += 42;
        this.insertAt(0, track);
      }
    });

    // Нижний вспомогательный объект
    const bottomHelper = new HelperClass({
      id: "helperLineBottom",
      top: topPosition,
      selectable: false,
      evented: false,
      tScale: this.tScale,
      width: trackWidth,
      kind: "bottom",
      metadata: {},
    });
    this.insertAt(0, bottomHelper);
    this.renderTrackSettings(this.tracks);
  }

  // Метод для обновления состояния треков
  updateTracksState(this: Timeline): void {
    const nonEmptyTracks = this.tracks.filter(
      (track) => track.items.length || track.type === "main"
    );
    const uniqueTracks = new Map<string, (typeof nonEmptyTracks)[0]>();
    nonEmptyTracks.forEach((track) => uniqueTracks.set(track.id, track));
    this.tracks = Array.from(uniqueTracks.values());
  }

  // Метод для обновления координат треков
  updateTrackCoords(this: Timeline): void {
    const width = this.bounding.width + this.spacing.right;
    this.getObjects("Track", "Helper").forEach((track: any) => {
      track.updateCoords(width);
      track.setCoords();
    });
  }
}
