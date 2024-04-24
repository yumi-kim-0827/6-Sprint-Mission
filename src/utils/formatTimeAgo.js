export default function formatTimeAgo(beforeTime) {
  const currentTime = new Date();
  const updatedAtTime = new Date(beforeTime).getTime();

  const timeDifference = currentTime - updatedAtTime;
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference === 0) return "방금 전";
  return `${hoursDifference}시간 전`;
}
