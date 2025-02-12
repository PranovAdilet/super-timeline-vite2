import { TrackObject as TrackBase } from "../objects/track";

export class Track extends TrackBase {
  static type = "Track";

  constructor(props: any) {
    super(props);
    this.fill = "#18181b";
  }

  public _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);
    const textPath = new Path2D(
      "M14.4444 13.3263H11.0667C12.5384 12.3991 13.6259 10.9716 14.1289 9.30644C14.632 7.64131 14.5169 5.85051 13.8048 4.26348C13.0927 2.67645 11.8314 1.39993 10.2531 0.668736C8.67478 -0.0624548 6.8855 -0.199136 5.21442 0.283835C3.54334 0.766806 2.10285 1.83695 1.15794 3.2974C0.213035 4.75785 -0.172743 6.51038 0.0715766 8.23261C0.315896 9.95484 1.17388 11.5309 2.4877 12.671C3.80151 13.811 5.4828 14.4383 7.22227 14.4374H14.4444C14.5918 14.4374 14.7331 14.3789 14.8373 14.2747C14.9415 14.1705 15 14.0292 15 13.8819C15 13.7345 14.9415 13.5932 14.8373 13.489C14.7331 13.3848 14.5918 13.3263 14.4444 13.3263ZM1.1112 7.21523C1.1112 6.00658 1.46961 4.82506 2.14111 3.8201C2.8126 2.81514 3.76702 2.03187 4.88367 1.56934C6.00032 1.10681 7.22905 0.985789 8.41449 1.22159C9.59992 1.45738 10.6888 2.03941 11.5435 2.89405C12.3981 3.7487 12.9801 4.83759 13.2159 6.02302C13.4517 7.20845 13.3307 8.43719 12.8682 9.55384C12.4056 10.6705 11.6224 11.6249 10.6174 12.2964C9.61244 12.9679 8.43093 13.3263 7.22227 13.3263C5.60208 13.3245 4.04878 12.68 2.90313 11.5344C1.75748 10.3887 1.11304 8.83542 1.1112 7.21523ZM7.22227 5.54858C7.55191 5.54858 7.87414 5.45083 8.14822 5.2677C8.4223 5.08456 8.63592 4.82426 8.76206 4.51972C8.88821 4.21518 8.92121 3.88007 8.85691 3.55677C8.7926 3.23347 8.63386 2.9365 8.40078 2.70342C8.16769 2.47033 7.87072 2.3116 7.54742 2.24729C7.22412 2.18298 6.88901 2.21599 6.58447 2.34213C6.27993 2.46828 6.01964 2.6819 5.8365 2.95598C5.65337 3.23006 5.55562 3.55229 5.55562 3.88192C5.55562 4.32395 5.73121 4.74787 6.04377 5.06043C6.35633 5.37298 6.78025 5.54858 7.22227 5.54858ZM7.22227 3.32637C7.33215 3.32637 7.43956 3.35895 7.53092 3.42C7.62228 3.48104 7.69349 3.56781 7.73554 3.66932C7.77759 3.77084 7.78859 3.88254 7.76715 3.9903C7.74572 4.09807 7.6928 4.19706 7.61511 4.27476C7.53741 4.35245 7.43842 4.40536 7.33066 4.4268C7.22289 4.44824 7.11119 4.43723 7.00967 4.39519C6.90816 4.35314 6.82139 4.28193 6.76035 4.19057C6.69931 4.09921 6.66672 3.9918 6.66672 3.88192C6.66672 3.73458 6.72525 3.59327 6.82944 3.48909C6.93363 3.3849 7.07493 3.32637 7.22227 3.32637ZM8.88893 10.5485C8.88893 10.2189 8.79118 9.89668 8.60805 9.6226C8.42491 9.34852 8.16462 9.1349 7.86008 9.00875C7.55553 8.88261 7.22043 8.8496 6.89713 8.91391C6.57383 8.97822 6.27686 9.13695 6.04377 9.37004C5.81069 9.60313 5.65195 9.9001 5.58764 10.2234C5.52334 10.5467 5.55634 10.8818 5.68249 11.1863C5.80863 11.4909 6.02225 11.7512 6.29633 11.9343C6.57041 12.1175 6.89264 12.2152 7.22227 12.2152C7.6643 12.2152 8.08822 12.0396 8.40078 11.727C8.71334 11.4145 8.88893 10.9906 8.88893 10.5485ZM6.66672 10.5485C6.66672 10.4387 6.69931 10.3313 6.76035 10.2399C6.82139 10.1485 6.90816 10.0773 7.00967 10.0353C7.11119 9.99323 7.22289 9.98223 7.33066 10.0037C7.43842 10.0251 7.53741 10.078 7.61511 10.1557C7.6928 10.2334 7.74572 10.3324 7.76715 10.4402C7.78859 10.5479 7.77759 10.6596 7.73554 10.7611C7.69349 10.8627 7.62228 10.9494 7.53092 11.0105C7.43956 11.0715 7.33215 11.1041 7.22227 11.1041C7.07493 11.1041 6.93363 11.0456 6.82944 10.9414C6.72525 10.8372 6.66672 10.6959 6.66672 10.5485ZM10.5556 8.88189C10.8852 8.88189 11.2074 8.78414 11.4815 8.60101C11.7556 8.41787 11.9692 8.15758 12.0954 7.85303C12.2215 7.54849 12.2545 7.21338 12.1902 6.89008C12.1259 6.56678 11.9672 6.26982 11.7341 6.03673C11.501 5.80364 11.204 5.64491 10.8807 5.5806C10.5574 5.51629 10.2223 5.5493 9.91778 5.67544C9.61324 5.80159 9.35295 6.01521 9.16981 6.28929C8.98668 6.56337 8.88893 6.8856 8.88893 7.21523C8.88893 7.65726 9.06452 8.08118 9.37708 8.39374C9.68964 8.70629 10.1136 8.88189 10.5556 8.88189ZM10.5556 6.65968C10.6655 6.65968 10.7729 6.69226 10.8642 6.75331C10.9556 6.81435 11.0268 6.90112 11.0688 7.00263C11.1109 7.10415 11.1219 7.21585 11.1005 7.32362C11.079 7.43138 11.0261 7.53037 10.9484 7.60807C10.8707 7.68576 10.7717 7.73867 10.664 7.76011C10.5562 7.78155 10.4445 7.77054 10.343 7.7285C10.2415 7.68645 10.1547 7.61524 10.0937 7.52388C10.0326 7.43252 10 7.32511 10 7.21523C10 7.06789 10.0586 6.92658 10.1628 6.8224C10.2669 6.71821 10.4082 6.65968 10.5556 6.65968ZM3.88896 5.54858C3.55933 5.54858 3.2371 5.64633 2.96302 5.82946C2.68894 6.01259 2.47532 6.27289 2.34918 6.57743C2.22303 6.88197 2.19002 7.21708 2.25433 7.54038C2.31864 7.86368 2.47737 8.16065 2.71046 8.39374C2.94355 8.62682 3.24052 8.78556 3.56382 8.84986C3.88711 8.91417 4.22222 8.88117 4.52677 8.75502C4.83131 8.62888 5.0916 8.41526 5.27474 8.14118C5.45787 7.8671 5.55562 7.54487 5.55562 7.21523C5.55562 6.77321 5.38003 6.34929 5.06747 6.03673C4.75491 5.72417 4.33099 5.54858 3.88896 5.54858ZM3.88896 7.77078C3.77909 7.77078 3.67168 7.7382 3.58032 7.67716C3.48896 7.61611 3.41775 7.52935 3.3757 7.42783C3.33365 7.32632 3.32265 7.21462 3.34409 7.10685C3.36552 6.99908 3.41843 6.90009 3.49613 6.8224C3.57382 6.7447 3.67281 6.69179 3.78058 6.67036C3.88835 6.64892 4.00005 6.65992 4.10156 6.70197C4.20308 6.74402 4.28984 6.81522 4.35089 6.90658C4.41193 6.99794 4.44452 7.10535 4.44452 7.21523C4.44452 7.36257 4.38598 7.50388 4.2818 7.60807C4.17761 7.71225 4.03631 7.77078 3.88896 7.77078Z"
    );
    if (
      !this.items.length
      // && this.magnetic
    ) {
      ctx.save();
      ctx.translate(-this.width / 2, -this.height / 2);
      ctx.translate(0, 12);
      ctx.font = "600 12px 'Geist variable'";
      ctx.fillStyle = "#A0A4A2";
      ctx.textAlign = "left";
      ctx.clip();
      ctx.fillText("Drag and drop media here", 32, 12);

      ctx.translate(8, 1);

      ctx.fillStyle = "#A0A4A2";
      ctx.fill(textPath);
      ctx.restore();
    }
  }
}
