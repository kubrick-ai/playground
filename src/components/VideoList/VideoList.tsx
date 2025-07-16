"use client";

import VideoThumbnail from "@/components/VideoThumbnail";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VideoItem {
  src: string;
  startTime: number;
}

interface VideoListProps {
  videos: VideoItem[];
  searchQuery?: string;
  filteredVideos?: VideoItem[];
}

const THUMBNAILS_PER_PAGE = 12;

const VideoList = ({ videos }: VideoListProps) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(videos.length / THUMBNAILS_PER_PAGE);

  // Calculate start/end indices for current page
  const startIdx = (page - 1) * THUMBNAILS_PER_PAGE;
  const endIdx = startIdx + THUMBNAILS_PER_PAGE;

  // Slice videos for current page
  const currentVideos = videos.slice(startIdx, endIdx);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-start">
        {currentVideos.map(({ src, startTime }, idx) => (
          <VideoThumbnail key={idx} src={src} startTime={startTime} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </Button>

        <span>
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default VideoList;
