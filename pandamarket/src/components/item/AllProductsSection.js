import Button from "../Button";
import "../item/AllProductsSection.css";
import ProductCard from "./ProductCard";

function AllProductsSection({ products, setOrder, currentOrder }) {
  const IMG_WIDTH = "220px";
  const IMG_HEIGHT = "220px";

  const onHandleOrder = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
  };

  function DropDown() {
    return (
      <select value={currentOrder} onChange={onHandleOrder}>
        <option value="최신순">최신순</option>
        <option value="좋아요순">좋아요순</option>
      </select>
    );
  }

  return (
    <div className="allProductsSection">
      <div className="productsToolbar">
        <h1>전체 상품</h1>
        <div className="tool-container">
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            name="search"
          ></input>
          <Button>상품등록하기</Button>
          <DropDown />
        </div>
      </div>
      <div className="allProducts">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            imgWidth={IMG_WIDTH}
            imgHeight={IMG_HEIGHT}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProductsSection;
