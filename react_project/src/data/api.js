export async function getProducts(order = 'recent', page = 1) {
  try {
    let query = `orderBy = ${order}`;
    if (order !== 'recent' && order !== 'favorite') {
      query = `keywords = ${order}`;
    }
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&${query}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(`${error} : error`);
  }
}

export async function getBestProduct() {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/?orderBy=favorite`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(`${error} : error`);
  }
}
