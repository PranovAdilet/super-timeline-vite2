// import { removeItemsFromTrack } from "@/shared/utils";
// import {
//   ACTIVE_CLONE,
//   ACTIVE_DELETE,
//   ACTIVE_SPLIT,
//   ADD_AUDIO,
//   ADD_IMAGE,
//   ADD_TEXT,
//   ADD_VIDEO,
// } from "../constants-events";
// import { EventBusData } from "../event-bus/types";
// import { Timeline } from "../../timeline";
// import {
//   loadAudioItem,
//   loadAudioObject,
//   loadImageItem,
//   loadImageObject,
//   loadTextItem,
//   loadTextObject,
//   loadVideoItem,
//   loadVideoObject,
// } from "../../utils";

// export function handleActiveItemsEvents(
//   this: Timeline,
//   obj: EventBusData
// ): boolean | undefined {
//   if (obj.key === ACTIVE_DELETE) {
//     const activeItems = this.getActiveObjects();

//     if (!activeItems.length) return false;

//     const activeIds = activeItems.map((item: any) => item.id);
//     const updatedTracks = removeItemsFromTrack(this.tracks, activeIds);

//     const updatedTrackItemsMap: any = {};

//     Object.keys(this.trackItemsMap).forEach((id) => {
//       if (!activeIds.includes(id)) {
//         updatedTrackItemsMap[id] = this.trackItemsMap[id];
//       }
//     });

//     const updatedTrackItemIds = this.trackItemIds.filter(
//       (id) => !activeIds.includes(id)
//     );

//     this.tracks = updatedTracks;
//     this.trackItemsMap = updatedTrackItemsMap;
//     this.trackItemIds = updatedTrackItemIds;

//     this.discardActiveObject();
//     this.remove(...activeItems);
//     this.renderTracks();
//     this.alignItemsToTrack();
//     this.updateTransitions();
//     this.requestRenderAll();
//     this.updateState();
//   }

//   if (obj.key === ACTIVE_CLONE) {
//     this.cloneActiveTrackItem();
//   }

//   if (obj.key === ACTIVE_SPLIT) {
//     const time = obj.value?.options?.time;
//     this.splitActiveTrackItem({ time });
//   }
// }

// export async function handleAddRemoveEvents(
//   this: Timeline,
//   event: EventBusData,
//   options?: {
//     trackId?: string;
//   }
// ) {
//   let result;

//   const payload: any = event.value?.payload;
//   let data;

//   if (event.key === ADD_VIDEO) {
//     data = await loadVideoItem(payload);
//     result = loadVideoObject(data, { tScale: this.tScale });
//   }

//   if (event.key === ADD_IMAGE) {
//     data = await loadImageItem(payload, {
//       size: { width: 1080, height: 1080 },
//     });
//     result = loadImageObject(data, { tScale: this.tScale });
//   }

//   if (event.key === ADD_AUDIO) {
//     data = await loadAudioItem(payload);

//     result = loadAudioObject(data, { tScale: this.tScale });
//   }
//   if (event.key === ADD_TEXT) {
//     // data = await loadTextItem(payload, {
//     //   size: { width: 1080, height: 1080 },
//     // });
//     // result = loadTextObject(data, { tScale: this.tScale });
//   }
//   if (result && data) {
//     this.add(result);
//     this.findOrCreateTrack(data, {
//       trackId: options?.trackId ?? 0,
//     });

//     this.trackItemsMap[data.id] = data;

//     this.trackItemIds.push(data.id);
//     this.renderTracks();

//     this.alignItemsToTrack();

//     this.updateState();
//   }
// }
