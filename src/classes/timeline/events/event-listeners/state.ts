import { ITrack } from "@/shared";
import { calculateDuration } from "../../utils";

let activeIdsSubscription: any;
let historySubscription: any;
let addRemoveItemsSubscription: any;
let updateTrackItemSubscription: any;
let durationSubscipition: any;

export const addSubscribeStateEvents = (timeline: any) => {
  const { state } = timeline;

  // Подписка на изменения активных ID
  activeIdsSubscription = state.subscribeToActiveIds(({ activeIds }: any) => {
    if (activeIds.length === 1) {
      const trackItem = activeIds[0];
      const { trackItemIds, trackItemsMap } = state.getState();
      trackItemIds.forEach((id: number) => {
        trackItemsMap[id].type;
      });
      timeline.selectTrackItemByIds([trackItem]);
    } else {
      timeline.selectTrackItemByIds(activeIds);
    }
  });

  // updateTrackItemSubscription = state.subscribeToUpdateTrackItem(() => {
  //   // Ваш код для обработки обновлений Track Item (не реализован)
  // });

  // durationSubscipition = state.subscribeToDuration((state) => {
  //   console.log(state);
  // });

  historySubscription = state.subscribeToHistory((history: any) => {
    const { tracks, trackItemsMap, trackItemIds, trackItemDetailsMap } =
      history;
    timeline.tracks = tracks;
    timeline.trackItemsMap = trackItemsMap;
    timeline.trackItemIds = trackItemIds;
    timeline.trackItemDetailsMap = trackItemDetailsMap;
    timeline.renderTracks();
    timeline.updateTrackItemsToHistory();
    timeline.alignItemsToTrack();
    timeline.calcBounding();
    timeline.updateTransitions();
    timeline.duration = calculateDuration(timeline.trackItemsMap);
  });

  addRemoveItemsSubscription = state.subscribeToAddOrRemoveItems(() => {
    const trackItems = timeline.getTrackItems().map((item: any) => item.id);
    const {
      trackItemIds,
      trackItemsMap,
      trackItemDetailsMap,
      tracksSettings,
      tracks,
    } = state.getState();
    const removedItems: any = [];

    const trackIds = new Set(tracks.map((track) => track.id));

    Object.keys(tracksSettings).forEach((id) => {
      if (!trackIds.has(id)) {
        removedItems.push(id);
      }
    });

    // if (tracksSettings && Object.keys(tracksSettings).length > 0) {
    //   const remainingTracksSettings: any = Object.fromEntries(
    //     Object.entries(tracksSettings)?.filter(([id]) =>
    //       tracks.find((track: ITrack) => track.id === id)
    //     )
    //   );
    //   const removedId = Object.keys(remainingTracksSettings).filter((key) => {
    //     return Object.keys(tracksSettings).find((item) => item !== key);
    //   });

    //   // removedItems.push(removedId)
    //   // Object.keys(remainingTracksSettings).forEach((item: any) => {
    //   //   removedItems.push(item);
    //   // });
    // }

    trackItems.forEach((id: any) => {
      if (!trackItemIds.includes(id)) {
        removedItems.push(id);
      }
    });

    // Удаление элементов
    timeline.deleteTrackItemById(removedItems);

    // Обновление данных
    timeline.tracks = state.getState().tracks;
    timeline.trackItemsMap = trackItemsMap;
    timeline.trackItemDetailsMap = trackItemDetailsMap;

    trackItemIds.forEach((id: number) => {
      if (!trackItems.includes(id)) {
        const updatedItem = {
          ...trackItemsMap[id],
          details: {
            ...trackItemDetailsMap[id].details,
          },
        };

        timeline.addTrackItem(updatedItem);
        timeline.renderTrackSettings(timeline.tracks);
      }
    });

    timeline.renderTracks();
    timeline.alignItemsToTrack();

    // Обновление координат для track items
    trackItemIds.forEach((id: any) => {
      timeline.updateTrackItemCoords(id);
    });

    timeline.updateTransitions();
    timeline.updateTrackCoords();
  });
};

export const removeSubscribeStateEvents = (timeline: any) => {
  activeIdsSubscription.unsubscribe();
  // updateTrackItemSubscription.unsubscribe();
  historySubscription.unsubscribe();
  addRemoveItemsSubscription.unsubscribe();
  // durationSubscipition.unsubscribe();
};
