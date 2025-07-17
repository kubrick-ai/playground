"use client";

import { useState } from "react";
import { useSearchVideos } from "@/hooks/useKubrickAPI";
import VideoList from "@/components/VideoList";
import { SearchParams } from "@/types";
import SearchForm from "@/components/SearchForm";

const Search = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { data: results, isLoading, error } = useSearchVideos(searchParams);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Playground - Search</h1>
      <SearchForm
        setSearchParams={setSearchParams}
        isOptionsOpen={isOptionsOpen}
        setIsOptionsOpen={setIsOptionsOpen}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {results && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Results ({results.length})
          </h2>
          <VideoList videos={results} />
        </div>
      )}
    </div>
  );
};

export default Search;
