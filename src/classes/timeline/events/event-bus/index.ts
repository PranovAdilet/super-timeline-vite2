import { Subject } from "rxjs";
import type { Dispatcher, DispatcherReturnType, EventBusData } from "./types";

const subject = new Subject<EventBusData>();

const dispatch: Dispatcher = (key, value) => {
  subject.next({ key, value });
};

const eventBus: DispatcherReturnType = {
  subject,
  dispatch,
};

export default eventBus;
