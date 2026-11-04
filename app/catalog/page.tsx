"use client";

import { fetchCampers } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function CatalogPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers"],
    queryFn: ({ pageParam }) => fetchCampers({}, pageParam, 4),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
  return (
    <main>
      <h1>catalog</h1>
    </main>
  );
}
