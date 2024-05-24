import instance from "./axios";

export async function getProducts(order = "createdAt") {
  try {
    const response = await instance.get('/products/',{
    params: {order},
  });
  const products = response.data;
  return products;
  } catch (e) {
    console.log(e);
  }
};