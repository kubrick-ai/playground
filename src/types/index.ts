import { z } from "zod";

export const EmbeddingScopeSchema = z.literal(["clip", "video"]);
export type EmbeddingScope = z.infer<typeof EmbeddingScopeSchema>;

export const EmbeddingModalitySchema = z.literal(["visual-text", "audio"]);
export type EmbeddingModality = z.infer<typeof EmbeddingModalitySchema>;

export const VideoSchema = z.object({
  id: z.number(),
  title: z.string().nullable().optional().default(undefined),
  url: z.string(),
  filename: z.string().nullable().optional(),
  duration: z.number().nullable().optional(),
  created_at: z.string(),
  updated_at: z.string(),
  height: z.number().nullable().optional(),
  width: z.number().nullable().optional(),
  modality: EmbeddingModalitySchema.optional(),
  scope: EmbeddingScopeSchema.optional(),
  start_time: z.number().optional(),
  end_time: z.number().optional(),
  similarity: z.number(),
});

export type Video = z.infer<typeof VideoSchema>;
