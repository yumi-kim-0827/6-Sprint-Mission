export function getTimeAgo(updatedAt: string | number | Date) {
  const currentTime = new Date();
  const updateTime = new Date(updatedAt);

  const differenceInMillis = currentTime.getTime() - updateTime.getTime();
  const differenceInHours = differenceInMillis / (1000 * 60 * 60);

  if (differenceInHours < 1) {
    return "방금 전";
  } else if (differenceInHours < 24) {
    return `${Math.floor(differenceInHours)}시간 전`;
  } else {
    const days = Math.floor(differenceInHours / 24);
    return `${days}일 전`;
  }
}

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
