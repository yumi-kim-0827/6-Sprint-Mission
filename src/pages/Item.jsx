import List from "../components/List";

function Item() {
  return (
    <div className="Item">
      <List title={"베스트 상품"} order={"favorite"} />
      <List title={"전체 상품"} order={"recent"} />
    </div>
  );
}

export default Item;
