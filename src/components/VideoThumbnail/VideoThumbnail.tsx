"use client";

import * as MediaPlayer from "@/components/ui/media-player";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface VideoThumbnailProps {
  src: string;
  startTime?: number;
  width?: number;
  height?: number;
}

const VideoThumbnail = ({
  src,
  startTime = 0,
  width = 300,
  height = 200,
}: VideoThumbnailProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = startTime;
  }, [startTime]);

  return (
    <Card
      style={{ width, height }}
      className="relative overflow-hidden rounded-xl shadow-sm"
    >
      <CardContent className="p-0 w-full h-full">
        <MediaPlayer.Root autoHide={false} className="w-full h-full">
          <MediaPlayer.Video
            ref={videoRef}
            className="w-full h-full object-cover rounded-md"
            // muted
            // autoPlay
          >
            <source src={src} type="video/mp4" />
          </MediaPlayer.Video>

          <MediaPlayer.Loading />
          <MediaPlayer.Error />
          <MediaPlayer.VolumeIndicator />

          <MediaPlayer.Controls className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/60 to-transparent flex flex-col gap-1">
            <MediaPlayer.ControlsOverlay />

            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <MediaPlayer.Play className="text-white w-6 h-6" />
                <MediaPlayer.Time />
              </div>
              <div className="flex items-center gap-2">
                <MediaPlayer.Volume />
                <MediaPlayer.Fullscreen />
              </div>
            </div>

            <MediaPlayer.Seek />
          </MediaPlayer.Controls>
        </MediaPlayer.Root>
      </CardContent>
    </Card>
  );
};

export default VideoThumbnail;
