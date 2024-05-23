import { useNavigate } from "react-router-dom";
import ItemDetailSection from "./components/ItemDetailSection";
import CommentSection from "./components/Comment/CommentSection";
import BackIconUrl from "../../assets/icons/icon-back-page.svg";
import "./ItemDetailPage.scss";

function ItemDetailPage() {
  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };

  return (
    <div className="page-wrapper detail-page-wrapper">
      <ItemDetailSection />
      <CommentSection />
      <button onClick={goBackPage} className="btn-primary back-icon">
        목록으로 돌아가기
        <img src={BackIconUrl} alt="목록으로 돌아가기 아이콘" />
      </button>
    </div>
  );
}

export default ItemDetailPage;
