export const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat().format(price);
  return `${newPrice}원`;
};
