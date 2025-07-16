"use client";

import { useState } from "react";
import VideoThumbnail from "@/components/VideoThumbnail";
import { Button } from "@/components/ui/button";

const THUMBNAILS_PER_PAGE = 12;

// This is just placeholder -- we would get this from the DB
const videos = [
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 200,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 123,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 156,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 90,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 14,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 20,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 74,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 60,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 20,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 20,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Saba+-+SIRENS+ft.+theMIND+(Official+Video).webm",
    startTime: 80,
  },
  {
    src: "https://domsvideos.s3.us-west-1.amazonaws.com/downloads/Smino+feat.+NOS+-+I+Deserve+(Official+Video).webm",
    startTime: 120,
  },
];

const Library = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(videos.length / THUMBNAILS_PER_PAGE);

  // Calculate start/end indices for current page
  const startIdx = (page - 1) * THUMBNAILS_PER_PAGE;
  const endIdx = startIdx + THUMBNAILS_PER_PAGE;

  // Slice videos for current page
  const currentVideos = videos.slice(startIdx, endIdx);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kubrick Playground - Library</h1>

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
    </div>
  );
};

export default Library;
