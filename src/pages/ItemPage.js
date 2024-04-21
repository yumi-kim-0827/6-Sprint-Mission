import { useEffect, useState } from "react";
import { getProducts } from "../api";
import style from "../styles/ItemPage.module.css";
import classNames from "classnames/bind";
import Container from "../components/Container";
import Button from "../components/Button";
import CardList from "../components/CardList";
import Input from "../components/Input";

const cn = classNames.bind(style);
const PAGE_LIMIT = {
  BEST: 4,
  ALL: 10,
};
const ORDER_STANDARD = {
  NEWEST: "recent",
  BEST: "favorite",
};

const ItemPage = () => {
  const [order, setOrder] = useState(ORDER_STANDARD.NEWEST);
  const [prods, setProds] = useState([]);
  const [bestProds, setBestProds] = useState([]);
  const [isActive, setActive] = useState(false);

  const handleNewestClick = () => setOrder(ORDER_STANDARD.NEWEST);
  const handleBestClick = () => setOrder(ORDER_STANDARD.BEST);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLoad = async (queryObj) => {
    const prods = await getProducts(queryObj);
    setProds(prods);
  };

  const handleBestLoad = async (queryObj) => {
    const prods = await getProducts(queryObj);
    setBestProds(prods);
  };

  useEffect(() => {
    handleBestLoad({
      page: 1,
      pageSize: PAGE_LIMIT.BEST,
      orderBy: ORDER_STANDARD.BEST,
    });
    handleLoad({
      page: 1,
      pageSize: PAGE_LIMIT.ALL,
      orderBy: order,
    });
  }, [order]);

  return (
    <Container className={cn("container")}>
      <section className={cn("section")}>
        <h2 className={cn("section-title")}>베스트 상품</h2>
        <CardList isBest={true} products={bestProds} />
      </section>
      <section className={cn("section")}>
        <div className={cn("section-menu")}>
          <h2 className={cn("section-title")}>전체 상품</h2>
          <Input
            iconClass={"search-icon"}
            inputClass={"search-input"}
            type={"text"}
            name={"search"}
            placeholder={"검색할 상품을 입력해주세요"}
          />
          <Button
            isLink={true}
            text="상품 등록하기"
            isActive="on"
            href="/additem"
          />
          <div className={cn("select-order")}>
            <button onClick={handleToggle} className={cn("select-btn")}>
              최신순
            </button>
            <ul className={cn("order-list", isActive ? "on" : "")}>
              <li className={cn("order-item")}>
                <button type="button" onClick={handleNewestClick}>
                  최신순
                </button>
              </li>
              <li className={cn("order-item")}>
                <button type="button" onClick={handleBestClick}>
                  좋아요순
                </button>
              </li>
            </ul>
          </div>
        </div>
        <CardList products={prods} />
      </section>
    </Container>
  );
};

export default ItemPage;
