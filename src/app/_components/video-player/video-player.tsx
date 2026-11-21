"use client";

// next
import Image from "next/image";

// components

import Loading from "@/app/_components/loading/Loading";
import Button from "@/app/_components/button/Button";
import { Progress } from "@/app/_components/progress";

// typs
import { VideoProps } from "@/app/_components/video-player/video-player.types";

// utiliti fnc
import { secondsToHHMMSS } from "@/utils/time";

// custom-hook -use video
import useVideo from "@/hooks/useVideo";

const VideoPlayer = ({ src, className, poster }: VideoProps) => {
  const {
    currentTime,
    videoRef,
    duration,
    progress,
    isPlaying,
    isVideoWaited,
    isVideoLoaded,
    play,
    pause,
    fullScreen,
  } = useVideo(src);

  return (
    <div className="relative">
      {isVideoWaited && (
        <Loading
          className="absolute z-10 inset-0 m-auto"
          variant="neutral"
          size="large"
        />
      )}

      {/* video */}
      <video
        onClick={!isPlaying ? play : pause}
        className={`w-full ${isVideoWaited ? "blur-xs" : ""}`}
        ref={videoRef}
        src={src}
        poster={poster}
      />

      {/* menu */}
        <div
          className={`${
            !isVideoLoaded || isVideoWaited
              ? "animate-pulse opacity-40 pointer-events-none"
              : ""
          } h-14 bg-base-50 rounded-lg p-2 flex items-center mt-2 gap-5`}
          lang="en"
          dir="ltr"
        >
          <Image
            className="hidden lg:block relative top-[-0.15rem]"
            src="/images/logo-en-light.svg"
            width={100}
            height={20}
            alt=""
          />

          <Button
            size="tiny"
            variant={isPlaying ? undefined : "primary"}
            className="font-semibold tracking-widest min-w-28"
            onClick={!isPlaying ? play : pause}
          >
            {isVideoWaited ? "loading..." : !isPlaying ? "play" : "pause"}
          </Button>

          <Progress value={progress} variant="primary" />
          <div className="flex gap-1 font-semibold text-sm *:w-16">
            <span>{secondsToHHMMSS(currentTime)}</span> /
            <span>{secondsToHHMMSS(duration)}</span>
          </div>
          <Button
            size="tiny"
            className="hidden lg:inline-flex font-semibold tracking-widest w-44 whitespace-nowrap"
            onClick={fullScreen}
          >
            Full screen
          </Button>
        </div>
    
    </div>
  );
};
export default VideoPlayer;
