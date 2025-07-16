"use client";

import VideoList from "@/components/VideoList";

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
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kubrick Playground - Library</h1>

      <VideoList videos={videos} />
    </div>
  );
};

export default Library;
