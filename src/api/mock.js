import mock from './mock.json';

const { products } = mock;

function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({ name }) => name.toLowerCase().include(lowered));
}

export function getProductsDetails(keyword) {
  if (!keyword) return products;
  return filterByKeyword(products, keyword);
}

export function getProductById(productId) {
  return products.find((product) => product.name === productId);
}
