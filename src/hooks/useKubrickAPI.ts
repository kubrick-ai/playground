import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { VideoSchema, Video } from "@/types";

// TODO: Move to config?
const API_BASE = "http://localhost:5003/";

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
