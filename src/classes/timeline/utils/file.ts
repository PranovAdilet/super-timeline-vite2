export const loadAudio = (audioUrl: string): Promise<any> =>
  new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration * 1e3;
      resolve({
        duration,
      });
    });
    audio.addEventListener("error", (i) => {
      reject(i);
    });
    audio.src = audioUrl;
    audio.crossOrigin = "anonymous";
    audio.load();
  });

export const loadImage = (imageUrl: string): Promise<any> =>
  new Promise((resolve, reject) => {
    const image = new Image();

    console.warn("Consider updating CDN config for CORS issues?");

    image.onload = () => {
      const width = image.width;
      const height = image.height;

      resolve({ width, height });
    };

    image.onerror = (error) => {
      reject(error);
    };

    image.crossOrigin = "anonymous";
    image.src = imageUrl;
  });

export const loadVideo = (videoSrc: any): Promise<any> =>
  new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration * 1e3;
      const width = video.videoWidth;
      const height = video.videoHeight;
      resolve({
        duration,
        width,
        height,
      });
    });
    video.addEventListener("error", (error) => {
      reject(error);
    });
    video.src = videoSrc;
    video.load();
  });
