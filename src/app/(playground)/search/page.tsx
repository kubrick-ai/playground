"use client";

import { useState } from "react";
import { useSearchVideos } from "@/hooks/useKubrickAPI";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useState<{ query_text?: string }>({});
  const { data: embeddings, isLoading, error } = useSearchVideos(searchParams);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchParams({ query_text: searchQuery });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Playground - Search</h1>

      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query..."
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-md mr-2"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

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
