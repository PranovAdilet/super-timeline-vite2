import { useEffect } from "react";

import useStore from "@/shared/store/store";
import eventBus from "./event-bus";
import { filter } from "rxjs";
import {
  PLAYER_PREFIX,
  LAYER_PREFIX,
  LAYER_SELECTION,
  PLAYER_PAUSE,
  PLAYER_PLAY,
  PLAYER_SEEK,
  PLAYER_SEEK_BY,
  PLAYER_TOGGLE_PLAY,
  STATE_CHANGED,
  STATE_PREFIX,
} from "./constants-events";

const useTimelineEvents = () => {
  const { playerRef, fps, timeline, setState } = useStore();

  useEffect(() => {
    const playerEvents = eventBus.subject.pipe(
      filter(({ key }) => key.startsWith(PLAYER_PREFIX))
    );

    const playerEventsSubscription = playerEvents.subscribe((obj) => {
      if (obj.key === PLAYER_SEEK) {
        const { time } = obj.value?.payload;
        playerRef?.current?.seekTo((time / 1000) * fps);
      } else if (obj.key === PLAYER_PLAY) {
        playerRef?.current?.play();
      } else if (obj.key === PLAYER_PAUSE) {
        playerRef?.current?.pause();
      } else if (obj.key === PLAYER_TOGGLE_PLAY) {
        if (playerRef?.current?.isPlaying()) {
          playerRef.current.pause();
        } else {
          playerRef?.current?.play();
        }
      } else if (obj.key === PLAYER_SEEK_BY) {
        const { frames } = obj.value?.payload;
        playerRef?.current?.seekTo(
          Math.round(playerRef.current.getCurrentFrame()) + frames
        );
      }
    });

    return () => {
      playerEventsSubscription.unsubscribe();
    };
  }, [playerRef, fps]);

  //   handle track and track item events - updates
  // useEffect(() => {
  //   const stateEvents = eventBus.subject.pipe(
  //     filter(({ key }) => key.startsWith(STATE_PREFIX))
  //   );

  //   const trackAndTrackItemsSubscription = stateEvents.subscribe((obj) => {
  //     if (obj.key === STATE_CHANGED) {
  //       setState(obj.value?.payload);
  //     }
  //   });
  //   return () => {
  //     trackAndTrackItemsSubscription.unsubscribe();
  //   };
  // }, [timeline]);

  // handle selection events
  useEffect(() => {
    const selectionEvents = eventBus.subject.pipe(
      filter(({ key }) => key.startsWith(LAYER_PREFIX))
    );

    const selectionSubscription = selectionEvents.subscribe((obj) => {
      if (obj.key === LAYER_SELECTION) {
        setState({
          activeIds: obj.value?.payload.activeIds,
        });
      }
    });
    return () => {
      selectionSubscription.unsubscribe();
    };
  }, [timeline]);
};

export default useTimelineEvents;
