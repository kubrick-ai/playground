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

export const EmbeddingScopeSchema = z.literal(["clip", "video"]);
export type EmbeddingScope = z.infer<typeof EmbeddingScopeSchema>;

export const EmbeddingModalitySchema = z.literal(["visual-text", "audio"]);
export type EmbeddingModality = z.infer<typeof EmbeddingModalitySchema>;

export const EmbeddingSchema = z.object({
  id: z.number(),
  // video_id: z.string(),
  source: z.string(),
  start_time: z.number(),
  end_time: z.number(),
  scope: EmbeddingScopeSchema,
  modality: EmbeddingModalitySchema,
});

export type Embedding = z.infer<typeof EmbeddingSchema>;
