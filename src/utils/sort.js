export const sortItemsByOrder = (items, order) =>
  items.sort((a, b) => b[order] - a[order]);
