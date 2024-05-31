export const sliceText = (text: string, maxLength: number): string => {
  const result =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  return result;
};

