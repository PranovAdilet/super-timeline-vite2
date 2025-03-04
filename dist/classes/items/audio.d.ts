import { AudioObject as AudioBase } from "../objects/audio";
export declare class Audio extends AudioBase {
    static type: string;
    text: string;
    src: string;
    audioData: Float32Array | null;
    beat_positions: number[] | null;
    downbeats: number[] | null;
    segments: {
        start: number;
        end: number;
        label: string;
    }[] | null;
    constructor(props: any);
    _render(ctx: CanvasRenderingContext2D): void;
    drawTextIdentity(ctx: CanvasRenderingContext2D): Promise<void>;
    private loadAudioData;
    private drawWaveform;
    private alignBeatsToSegments;
}
//# sourceMappingURL=audio.d.ts.map