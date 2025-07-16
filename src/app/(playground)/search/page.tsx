"use client";

import { useState } from "react";
import { useSearchVideos } from "@/hooks/useKubrickAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const searchFormSchema = z.object({
  query_text: z.string().min(1, "Search query is required"),
});

const Search = () => {
  const [searchParams, setSearchParams] = useState<{ query_text?: string }>({});
  const { data: embeddings, isLoading, error } = useSearchVideos(searchParams);

  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query_text: "",
    },
  });

  const onSubmit = (values: z.infer<typeof searchFormSchema>) => {
    setSearchParams({ query_text: values.query_text });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Playground - Search</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-sm items-center gap-1"
        >
          <FormField
            control={form.control}
            name="query_text"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Enter search query..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {embeddings && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Results ({embeddings.length})
          </h2>
          <div className="space-y-4">
            {embeddings.map((embedding) => (
              <div
                key={embedding.id}
                className="border border-gray-200 rounded p-4"
              >
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">ID:</span> {embedding.id}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Source:</span>{" "}
                  {embedding.source}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Time:</span>{" "}
                  {embedding.start_time}s - {embedding.end_time}s
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Scope:</span> {embedding.scope}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Modality:</span>{" "}
                  {embedding.modality}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
