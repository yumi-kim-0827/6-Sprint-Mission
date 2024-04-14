import Button from "../Button";
import "../item/AllProductsSection.css";
import ProductCard from "./ProductCard";

function AllProductsSection({ products, setOrder, currentOrder, setSearch }) {
  const IMG_WIDTH = "220px";
  const IMG_HEIGHT = "220px";

  const onChangeOrder = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
  };

  function DropDown() {
    return (
      <select value={currentOrder} onChange={onChangeOrder}>
        <option value="최신순">최신순</option>
        <option value="좋아요순">좋아요순</option>
      </select>
    );
  }

  const onChangeSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  return (
    <div className="allProductsSection">
      <div className="productsToolbar">
        <h1>전체 상품</h1>
        <div className="tool-container">
          <input
            onChange={onChangeSearch}
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
