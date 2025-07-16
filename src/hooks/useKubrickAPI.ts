import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { VideoSchema, Video, EmbeddingSchema, Embedding } from "@/types";

// TODO: Move to config?
const API_BASE = "/api/proxy";

interface SearchParams {
  query_text?: string;
  query_media_type?: "image" | "video" | "audio";
  query_media_url?: string;
  query_media_file?: File;
  page_limit?: number;
  min_similarity?: number;
}

const search = async (params: SearchParams): Promise<Array<Embedding>> => {
  const formData = new FormData();
  if (params.query_text) {
    formData.append("query_text", params.query_text);
  }

  if (params.query_media_type) {
    formData.append("query_media_type", params.query_media_type);
    if (params.query_media_url) {
      formData.append("query_media_url", params.query_media_url);
    } else if (params.query_media_file) {
      formData.append("query_media_file", params.query_media_file);
    }
  }

  if (params.page_limit) {
    formData.append("page_limit", params.page_limit.toString());
  }
  if (params.min_similarity) {
    formData.append("min_similarity", params.min_similarity.toString());
  }

  const response = await axios.post(`${API_BASE}/search`, formData);
  console.log(response);
  const parsedVideos = EmbeddingSchema.array().parse(response.data.data);
  return parsedVideos;
};

export const useSearchVideos = (params: SearchParams) => {
  return useQuery<Array<Embedding>, Error>({
    queryKey: ["searchVideos", params], // Unique key for this query
    queryFn: () => search(params), // Your async function to fetch data
  });
};

// const getVideos = async (): Promise<Array<Video>> => {
//   const response = await axios.get(`${API_BASE}/`);
//   const parsedVideos = VideoSchema.array().parse(response.data);
//   return parsedVideos;
// };
//
// export const useGetVideos = () => {
//   return useQuery<Array<Video>, Error>({
//     queryKey: ["videos"], // Unique key for this query
//     queryFn: getVideos, // Your async function to fetch data
//   });
// };
//
// const createVideo = async () => {};
//
// export const useCreateVideo = () => {
//   const queryClient = useQueryClient();
//   return useMutation<string, Error, string>({
//     mutationFn: createVideo,
//     onSuccess: () => {
//       // Invalidate the 'videos' query to refetch the list of videos
//       queryClient.invalidateQueries({ queryKey: ["videos"] });
//     },
//   });
// };
