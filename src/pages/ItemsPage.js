import Nav from "../components/Nav";
import BestItemList from "../components/BestItemList";
import AllItemList from "../components/AllItemList";

function ItemsPage({ device }) {
  return (
    <>
      <Nav />
      <main>
        <section id="best-items">
          <h1 className="section-title">베스트 상품</h1>
          <BestItemList device={device} />
        </section>
        <section id="all-items">
          <h1 className="section-title">판매 중인 상품</h1>
          <AllItemList device={device} />
        </section>
      </main>
    </>
  );
}

export default ItemsPage;
