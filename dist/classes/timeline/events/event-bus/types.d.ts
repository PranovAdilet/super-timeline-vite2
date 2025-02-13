import type { Subject } from "rxjs";
export type EventBusData = {
    key: string;
    value?: {
        payload: any;
        options?: any;
    };
};
export type Dispatcher = (key: string, value?: {
    payload: any;
    options?: any;
}) => void;
export type DispatcherReturnType = {
    subject: Subject<EventBusData>;
    dispatch: Dispatcher;
};
//# sourceMappingURL=types.d.ts.map