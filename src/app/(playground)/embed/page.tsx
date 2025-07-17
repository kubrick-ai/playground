"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { useEmbedVideo } from "@/hooks/useKubrickAPI";

const embedFormSchema = z.object({
  video_url: z.string().url("Please enter a valid URL"),
});

type EmbedForm = z.infer<typeof embedFormSchema>;

const Embed = () => {
  const form = useForm<EmbedForm>({
    resolver: zodResolver(embedFormSchema),
    defaultValues: { video_url: "" },
  });

  const { submitVideo, isSubmitting, embedData, statusData, isPolling } =
    useEmbedVideo();

  const onSubmit = (values: EmbedForm) => {
    submitVideo(values.video_url);
    form.reset();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Playground - Embed</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-lg items-center gap-1"
        >
          <FormField
            control={form.control}
            name="video_url"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Paste video URL (e.g. from S3)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Embed"}
          </Button>
        </form>
      </Form>

      {/* Task Info */}
      {embedData && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Task Created</h2>
          <p className="text-sm text-gray-600">Task ID: {embedData.id}</p>
          <p className="text-sm text-gray-600">
            Video URL: {embedData.video_url}
          </p>
        </div>
      )}

      {/* Status Info */}
      {statusData && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Task Status</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium">Status:</span> {statusData.status}
              {isPolling && " (refreshing...)"}
            </p>
            {statusData.error && (
              <p className="text-red-500">
                <span className="font-medium">Error:</span> {statusData.error}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Embed;
