export const sortItemsByOrder = (items, order: string) =>
  items.sort((a, b) => b[order] - a[order]);
