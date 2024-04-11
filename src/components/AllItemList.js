import heartIcon from "../assets/heart-icon.svg";

function AllItem({ item }) {
  const { price, favoriteCount, images, name } = item;
  return (
    <>
      <img src={images[0]} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <div>
          <img src={heartIcon} />
          <p>{favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

function AllItemList({ items, handleSortedChange }) {
  return (
    <section className="all-item-list">
      <h2 className="category-title">전체 상품</h2>
      <form>
        <input type="search" name="search" />
      </form>
      <a href="/">상품 등록하기</a>
      <select onChange={handleSortedChange}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <AllItem item={item} />
          </div>
        );
      })}
    </section>
  );
}
export { AllItemList, AllItem };
