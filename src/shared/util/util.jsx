export const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat().format(price);
  return `${newPrice}원`;
};

export const getTimeDiffer = (date) => {
  const getTimeDiffer = Math.floor((Date.now() - new Date(date)) / 1000 / 3600);
  return Math.floor(getTimeDiffer / 24) !== 0
    ? Math.floor(getTimeDiffer / 24) + "일 전"
    : Math.floor(getTimeDiffer) + "시간 전";
};
