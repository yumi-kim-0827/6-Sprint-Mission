export const sortProductsByDate = (products) => {
  return [...products].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
};

export const sortProductsByLike = (products) => {
  return [...products].sort((a, b) => b.favoriteCount - a.favoriteCount);
};
