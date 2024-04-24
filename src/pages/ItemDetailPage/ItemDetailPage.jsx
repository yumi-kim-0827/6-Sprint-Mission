import ItemDetailSection from "./components/ItemDetailSection";
import CommentSection from "./components/Comment/CommentSection";

function ItemDetailPage() {
  return (
    <div className="page-wrapper">
      <ItemDetailSection />
      <CommentSection />
    </div>
  );
}

export default ItemDetailPage;
