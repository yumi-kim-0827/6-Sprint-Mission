export function getTimeAgo(updatedAt) {
  const currentTime = new Date();
  const updateTime = new Date(updatedAt);

  const differenceInMillis = currentTime - updateTime;
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
