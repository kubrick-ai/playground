import { z } from "zod";

export const VideoSchema = z.object({
  id: z.string(),
  source: z.string(),
  filename: z.string().optional(),
  duration: z.number().optional(),
  video_title: z.string().optional(),
  fps: z.number().optional(),
  height: z.number(),
  width: z.number(),
});

export type Video = z.infer<typeof VideoSchema>;
