import BestItems from "./BestItems";
import AllItems from "./AllItems";
import "../styles/Main.css";
// api.js를 Data라는 이름으로 임포트
import { getItems } from "../api/api";

function Main() {
  return (
    <div className="main">
      <BestItems /> {/* 여기다가 Data 전달 */}
      <AllItems /> {/* 여기다가 Data 전달 */}
    </div>
  );
}

export default Main;
