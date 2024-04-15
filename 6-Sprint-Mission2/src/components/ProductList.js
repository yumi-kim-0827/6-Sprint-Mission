// 천 원 단위로 쉼표를 표시
function formatPrice(price) {
  return price.toLocaleString();
}

function ProductListItem({ product }) {
  return (
    <div>
      <img src={product.images} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.rating}</p>
        <p>{formatPrice(product.price)}원</p>
      </div>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <ProductListItem product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
