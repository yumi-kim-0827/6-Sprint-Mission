const formatTime = (updatedAt) => {
  const now = new Date();
  const updated = new Date(updatedAt);
  const diff = now - updated;

  const diffInSeconds = Math.floor(diff / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    // 24시간을 넘으면 날짜 표시
    return `${updated.getFullYear()}-${
      updated.getMonth() + 1
    }-${updated.getDate()}`;
  } else if (diffInHours > 0) {
    // 1시간 이상 ~ 24시간 이내이면 시간 표시
    return `${diffInHours}시간 전`;
  } else if (diffInMinutes > 0) {
    // 1분 이상 ~ 1시간 이내이면 분 표시
    return `${diffInMinutes}분 전`;
  } else {
    // 1분 이내이면 방금 전 표시
    return "방금 전";
  }
};

export default formatTime;
