import List from "../components/List";
import "../css/Item.css";
import useMediaQuery from "../hooks/useMediaQuery";

/*
desktop : 1200~
tablet : 768~1200
phone : ~768
*/

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
    console.log("tablet");
    cols_ = [cols[2], cols[3]];
    limits = [2, 6];
  } else if (matchesPhone) {
    console.log("phone");
    cols_ = [cols[1], cols[2]];
    limits = [1, 4];
  }
  let [bestLimit, allLimit] = limits;
  let [bestCol, allColl] = cols_;

  return (
    <div className="Item">
      <List
        title={"베스트 상품"}
        order={"favorite"}
        limit={bestLimit}
        gridCol={bestCol}
        isOrderChange={false}
      />
      <List
        title={"전체 상품"}
        order={"recent"}
        limit={allLimit}
        gridCol={allColl}
        isOrderChange={true}
      />
    </div>
  );
}

export default Item;
