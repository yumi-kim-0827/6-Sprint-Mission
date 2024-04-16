const panda_market_backend_api ="https://panda-market-api.vercel.app/"

const  get_products = async() =>{
    console.log("get data");
    const response = await fetch(panda_market_backend_api+"products");
    if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다');
      }
    const products = await response.json();
    console.log(products);
    return products;

}

export {get_products}