import { ITrackItem, ITransition } from "@/shared";
import { JSX } from "react";
interface IAnimation {
    idObject: string;
    type: string;
}
interface SequenceItemOptions {
    handleTextChange?: (id: string, text: string) => void;
    fps: number;
    animations?: IAnimation[];
    editableTextId?: string | null;
    containTransition?: ITransition;
    currentFrame: number;
}
export declare const TransitionSequenceItem: Record<string, (item: ITrackItem, options: SequenceItemOptions) => JSX.Element>;
export {};
//# sourceMappingURL=index.d.ts.map