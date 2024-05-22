export const diffTime = (updatedAt) => {
  const updateTime = new Date(updatedAt);
  const nowTime = new Date();
  const diffHour = (nowTime - updateTime) / (60 * 60 * 1000);
  if (diffHour < 24) {
    return `${Math.ceil(diffHour)}시간 전`;
  } else {
    return `${Math.ceil(diffHour / 24)}일 전`;
  }
};
