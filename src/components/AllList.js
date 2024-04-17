import "../styles/AllList.css";
import vetor from "../imgs/vector.svg";
import heart from "../imgs/heart.svg";

const AllList = ({ items }) => {
  return (
    <section>
      <div className="allList">
        <h1 className="allList_title">전체상품</h1>
        <div className="allList_tools">
          <div className="input_tool">
            <img src={vetor} />
            <input type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <button>상품 등록하기</button>
          <select className="select_tool">
            <option>최신순</option>
            <option>좋아요순</option>
          </select>
        </div>
      </div>
      <div className="allList_items">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <AllListItems item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const AllListItems = ({ item }) => {
  const { images, name, price, favoriteCount } = item;
  return (
    <>
      <img src={images} />
      <div className="all_item">
        <p className="all_item_title">{name}</p>
        <p className="all_item_price">{price}원</p>
        <div className="all_item_favorite">
          <img src={heart} />
          <p>{favoriteCount}</p>
        </div>
      </div>
    </>
  );
};

export default AllList;
