import useMediaQuery from "../hooks/useMediaQuery";

import List from "../components/List";

import "../css/Item.css";

/*
desktop : 1200~
tablet : 768~1200
phone : ~768
*/

const OrderNav = () => {
  return (
    <form className="OrderNav">
      <input type="text" placeholder="검색할 상품을 입력해주세요" />
      <button>상품 등록하기</button>
      <select>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </form>
  );
};

function Item() {
  // 미디어 쿼리
  const matchesDesktop = useMediaQuery("(min-width: 1200px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1199px)"
  );
  const matchesPhone = useMediaQuery("(max-width: 767px)");

  // 미디어 쿼리에 따른 그리드 변화 prop 할당
  const cols = {
    1: "col_one",
    2: "col_two",
    3: "col_three",
    4: "col_four",
    5: "col_five",
  };

  let limits = [0, 0];
  let cols_ = [cols[4], cols[5]];

  if (matchesDesktop) {
    cols_ = [cols[4], cols[5]];
    limits = [4, 10];
  } else if (matchesTablet) {
    cols_ = [cols[2], cols[3]];
    limits = [2, 6];
  } else if (matchesPhone) {
    cols_ = [cols[1], cols[2]];
    limits = [1, 4];
  }
  let [bestLimit, allLimit] = limits;
  let [bestCol, allColl] = cols_;

  return (
    <div className="Item">
      <section>
        <h2>베스트 상품</h2>
        <List order={"favorite"} limit={bestLimit} gridCol={bestCol} />
      </section>
      <section>
        <div className="title">
          <h2>전체 상품</h2>
          <OrderNav />
        </div>
        <List
          order={"recent"}
          limit={allLimit}
          gridCol={allColl}
          isPage={true}
        />
      </section>
    </div>
  );
}

export default Item;
