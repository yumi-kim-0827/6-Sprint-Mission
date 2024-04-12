import AllItem from "./AllItem";

import "../styles/AllItems.css";

function AllItems() {
  return (
    <>
      <h1 className="all-items-title">전체 상품</h1>
      <div>
        <AllItem />
      </div>
    </>
  );
}

export default AllItems;
