import { AudioObject as AudioBase } from "../objects/audio";

export class Audio extends AudioBase {
  static type = "Audio";
  text: string;
  src: string;
  audioData: Float32Array | null = null;
  beat_positions: number[] | null;
  downbeats: number[] | null;
  segments: { start: number; end: number; label: string }[] | null;

  constructor(props: any) {
    super(props);

    this.text = props.text ?? "Audio";
    this.fill = "#768F44";
    // this.fill = "#10B981";
    this.src = props.src ?? "";
    this.beat_positions = music.audio_metadata.beat_positions;
    this.downbeats = music.audio_metadata.downbeats;
    this.segments = music.audio_metadata.segments;

    // if (this.src) {
    //   this.loadAudioData();
    // }
  }

  public _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);

    this.drawTextIdentity(ctx);
    if (this.audioData) {
      this.drawWaveform(ctx);
    }

    this.updateSelected(ctx);
  }

  public async drawTextIdentity(ctx: CanvasRenderingContext2D) {
    const iconPath = new Path2D(
      "M8.24092 0C8.24092 2.51565 10.2795 4.55419 12.7951 4.55419C12.9677 4.55419 13.1331 4.62274 13.2552 4.74475C13.3772 4.86676 13.4457 5.03224 13.4457 5.20479C13.4457 5.37734 13.3772 5.54282 13.2552 5.66483C13.1331 5.78685 12.9677 5.85539 12.7951 5.85539C11.9218 5.85605 11.0594 5.66105 10.2713 5.28471C9.48319 4.90838 8.78942 4.36027 8.24092 3.68066V13.8794C8.24094 14.8271 7.91431 15.7458 7.31606 16.4808C6.71781 17.2157 5.88451 17.722 4.95657 17.9143C4.02863 18.1066 3.06276 17.9731 2.22172 17.5364C1.38067 17.0997 0.715856 16.3865 0.339286 15.5169C-0.0372842 14.6473 -0.10259 13.6744 0.154372 12.7622C0.411334 11.8501 0.974857 11.0544 1.74999 10.5092C2.52512 9.96403 3.46449 9.7027 4.40981 9.76924C5.35512 9.83579 6.24861 10.2261 6.93972 10.8745V0H8.24092ZM6.93972 13.8794C6.93972 13.1317 6.6427 12.4146 6.11398 11.8859C5.58527 11.3572 4.86818 11.0602 4.12046 11.0602C3.37275 11.0602 2.65566 11.3572 2.12694 11.8859C1.59823 12.4146 1.3012 13.1317 1.3012 13.8794C1.3012 14.6272 1.59823 15.3443 2.12694 15.873C2.65566 16.4017 3.37275 16.6987 4.12046 16.6987C4.86818 16.6987 5.58527 16.4017 6.11398 15.873C6.6427 15.3443 6.93972 14.6272 6.93972 13.8794Z"
    );

    ctx.save();
    ctx.translate(-this.width / 2, -this.height / 2);
    ctx.translate(0, 10);
    ctx.font = "600 12px 'Geist variable'";
    ctx.fillStyle = "#f4f4f5";
    ctx.textAlign = "left";
    ctx.clip();
    ctx.fillText(this.text, 36, 14);

    ctx.translate(10, 1);

    ctx.fillStyle = "#f4f4f5";

    ctx.fill(iconPath);
    ctx.restore();
  }

  private async loadAudioData() {
    try {
      const response = await fetch(this.src);

      const arrayBuffer = await response.arrayBuffer();
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const rawData = audioBuffer.getChannelData(0);
      console.log(arrayBuffer, audioBuffer, rawData);
      const samples = Math.floor(this.width / 2);

      const blockSize = Math.floor(rawData.length / samples);
      const data = new Float32Array(samples);

      for (let i = 0; i < samples; i++) {
        data[i] = rawData[i * blockSize];
      }

      this.audioData = data;
      this.canvas?.requestRenderAll();
    } catch (error) {
      console.error("Ошибка загрузки аудиофайла:", error);
    }
  }

  private drawWaveform(this: any, ctx: CanvasRenderingContext2D) {
    if (!this.audioData) return;

    const width = this.width;
    const height = this.height;
    const centerY = this.height / 9;

    ctx.save();
    ctx.translate(-this.width / 2, centerY);

    ctx.strokeStyle = "#f4f4f5";
    ctx.lineWidth = 1;
    ctx.beginPath();

    const duration = this.duration;

    this.audioData.forEach((value: number, index: number) => {
      const x = (index / (this.audioData!.length - 1)) * width;
      const y = duration < 1e4 ? value * 105 : value * 25;

      ctx.moveTo(x, 0);
      ctx.lineTo(x, y);
    });

    ctx.stroke();

    // 🎯 Рисуем downbeats (красные линии)
    // if (this.downbeats) {
    //   ctx.strokeStyle = "red";
    //   ctx.lineWidth = 2;

    //   this.downbeats.forEach((beat) => {
    //     const x = (beat / this.audioData!.length) * width;
    //     ctx.beginPath();
    //     ctx.moveTo(x, -height / 2);
    //     ctx.lineTo(x, height / 2);
    //     ctx.stroke();
    //   });
    // }

    // // 🟡 Рисуем beats (желтые маркеры)
    // if (this.beat_positions) {
    //   this.beat_positions.forEach((beat) => {
    //     const x = (beat / this.audioData!.length) * width;
    //     ctx.fillStyle = "yellow";
    //     ctx.fillRect(x, 0, 2, height);
    //   });
    // }

    ctx.restore();
  }

  private alignBeatsToSegments() {
    const segments = this.segments;
    const beat_positions = this.beat_positions;
    if (!beat_positions || !segments) return;

    this.beat_positions = beat_positions.map((beat) => {
      let closestSegment = segments.reduce((prev, curr) =>
        Math.abs(curr.start - beat) < Math.abs(prev.start - beat) ? curr : prev
      );

      return closestSegment.start;
    });
  }

  // private getBeatColor(beatIndex: number) {
  //   const beat_positions = this.beat_positions;
  //   if (!beat_positions) return "white";
  //   const segment = this.segments?.find(
  //     (s) =>
  //       s.start <= beat_positions[beatIndex] &&
  //       s.end >= beat_positions[beatIndex]
  //   );
  //   return segment && segment.loudness_max > -10 ? "yellow" : "white";
  // }
}

const music = {
  title: "Shippuuden",
  artist: "Takanashi Yasuharu",
  thumbnail_path: null,
  id: "50a7059c-6875-4ea2-a204-b8420533237f",
  file: {
    id: "ed066821-8972-4f63-a675-edbce459ea98",
    url: "https://superduper-acdagaa3e2h7chh0.z02.azurefd.net/uploaded/audio/2025/2/13/7/TECUHuELt9ZksDVivzsmHj.mpeg",
    thumbnail_url: null,
    type: "music",
    image_generation_id: null,
    image_generation: null,
    video_generation_id: null,
    video_generation: null,
    audio_generation_id: null,
    audio_generation: null,
    duration: 126.04081632653062,
    tasks: [
      {
        type: "musicbeats-metadata-flow",
        status: "completed",
        id: "896146af-3401-413b-8ff9-ed977b6ada84",
        file_id: "ed066821-8972-4f63-a675-edbce459ea98",
        project_id: null,
      },
    ],
  },
  thumbnail_url: null,
  audio_metadata: {
    duration: 126.04081632653062,
    bpm: 154,
    beats: [
      0.78, 1.18, 1.56, 1.95, 2.34, 2.73, 3.11, 3.5, 3.89, 4.27, 4.66, 5.04,
      5.43, 5.82, 6.21, 6.6, 6.98, 7.37, 7.76, 8.15, 8.54, 8.92, 9.31, 9.69,
      10.08, 10.47, 10.86, 11.24, 11.62, 12.02, 12.41, 12.79, 13.17, 13.55,
      13.94, 14.33, 14.71, 15.09, 15.48, 15.87, 16.26, 16.65, 17.05, 17.43,
      17.81, 18.21, 18.6, 18.99, 19.37, 19.76, 20.14, 20.53, 20.92, 21.32, 21.7,
      22.08, 22.47, 22.86, 23.24, 23.63, 24.02, 24.41, 24.79, 25.17, 25.56,
      25.95, 26.34, 26.73, 27.11, 27.5, 27.89, 28.27, 28.66, 29.05, 29.43,
      29.82, 30.21, 30.59, 30.98, 31.37, 31.76, 32.14, 32.53, 32.92, 33.3,
      33.69, 34.08, 34.47, 34.86, 35.24, 35.63, 36.02, 36.4, 36.79, 37.18,
      37.56, 37.95, 38.34, 38.73, 39.11, 39.49, 39.89, 40.28, 40.66, 41.05,
      41.44, 41.83, 42.21, 42.6, 42.99, 43.38, 43.76, 44.14, 44.53, 44.92,
      45.31, 45.69, 46.08, 46.47, 46.86, 47.24, 47.63, 48.02, 48.41, 48.8,
      49.17, 49.57, 49.95, 50.34, 50.73, 51.12, 51.5, 51.88, 52.28, 52.66,
      53.05, 53.44, 53.83, 54.21, 54.59, 54.97, 55.38, 55.77, 56.15, 56.54,
      56.93, 57.31, 57.69, 58.07, 58.46, 58.84, 59.23, 59.62, 60.01, 60.4,
      60.79, 61.18, 61.56, 61.95, 62.33, 62.72, 63.11, 63.5, 63.88, 64.28,
      64.66, 65.05, 65.44, 65.94, 66.4, 66.9, 67.38, 67.76, 68.16, 68.54, 68.93,
      69.31, 69.7, 70.09, 70.48, 70.86, 71.25, 71.63, 72.02, 72.41, 72.79,
      73.18, 73.57, 73.96, 74.34, 74.73, 75.12, 75.5, 75.89, 76.28, 76.67,
      77.05, 77.44, 77.83, 78.21, 78.6, 78.99, 79.38, 79.76, 80.15, 80.54,
      80.92, 81.31, 81.7, 82.09, 82.47, 82.86, 83.25, 83.63, 84.02, 84.41, 84.8,
      85.19, 85.57, 85.96, 86.34, 86.72, 87.12, 87.5, 87.89, 88.28, 88.67,
      89.05, 89.44, 89.83, 90.22, 90.6, 90.99, 91.38, 91.76, 92.15, 92.53,
      92.92, 93.32, 93.7, 94.09, 94.47, 94.86, 95.24, 95.64, 96.02, 96.41,
      96.79, 97.18, 97.57, 97.96, 98.34, 98.72, 99.12, 99.49, 99.89, 100.27,
      100.66, 101.06, 101.44, 101.82, 102.21, 102.59, 102.98, 103.37, 103.76,
      104.15, 104.53, 104.92, 105.3, 105.69, 106.09, 106.48, 106.86, 107.23,
      107.61, 108.01, 108.39, 108.78, 109.18, 109.56, 109.95, 110.34, 110.73,
      111.11, 111.5, 111.89, 112.27, 112.65, 113.04, 113.43, 113.82, 114.21,
      114.6, 114.97, 115.36, 115.75, 116.14, 116.52, 116.92, 117.31, 117.7,
      118.09, 118.47, 118.86, 119.26,
    ],
    downbeats: [
      1.18, 2.73, 4.27, 5.82, 7.37, 8.92, 10.47, 12.02, 13.55, 15.09, 16.65,
      18.21, 19.76, 21.32, 22.86, 24.41, 25.95, 27.5, 29.05, 30.59, 32.14,
      33.69, 35.24, 36.79, 38.34, 39.89, 41.44, 42.99, 44.53, 46.08, 47.63,
      49.17, 50.73, 52.28, 53.83, 55.38, 56.93, 58.46, 60.01, 61.56, 63.11,
      64.66, 66.4, 68.16, 69.7, 71.25, 72.79, 74.34, 75.89, 77.44, 78.99, 80.54,
      82.09, 83.63, 85.19, 86.72, 88.28, 89.83, 91.38, 92.92, 94.47, 96.02,
      97.57, 99.12, 100.66, 102.21, 103.76, 105.3, 106.86, 108.39, 109.95,
      111.5, 113.04, 114.6, 116.14, 117.7, 119.26,
    ],
    beat_positions: [
      4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
      1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
      2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2,
      3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3,
      4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
      1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
      2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2,
      3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3,
      4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,
      1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
      2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2,
      3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3,
      4, 1, 2, 3, 4, 1,
    ],
    segments: [
      { start: 0.0, end: 0.78, label: "start" },
      { start: 0.78, end: 21.32, label: "intro" },
      { start: 21.32, end: 51.87, label: "solo" },
      {
        start: 51.87,
        end: 66.98,
        label: "solo",
      },
      { start: 66.98, end: 97.17, label: "solo" },
      { start: 97.17, end: 119.25, label: "solo" },
      {
        start: 119.25,
        end: 126.05,
        label: "outro",
      },
    ],
  },
  duration: 126.04081632653062,
};
