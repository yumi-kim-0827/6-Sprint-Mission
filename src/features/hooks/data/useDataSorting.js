import React from "react";

export function useDataSorting(data, order) {
  const sortByCreatedAt = (a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt);
  const sortByFavoriteCount = (a, b) => b.favoriteCount - a.favoriteCount;

  return order === "최신순"
    ? data.sort(sortByCreatedAt).slice()
    : data.sort(sortByFavoriteCount).slice();
}
