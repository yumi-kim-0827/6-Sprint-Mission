import { Link } from "react-router-dom";
import BestItemSection from "../components/BestItemSection";
import AllItemSection from "../components/AllItemSection";

function UsedMarket() {
  return (
    <>
      <AllItemSection />
      <BestItemSection />
      <button>
        <Link to="/additem">상품 등록하기</Link>
      </button>
    </>
  );
}

export default UsedMarket;
