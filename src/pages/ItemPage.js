import style from "../styles/ItemPage.module.css";
import classNames from "classnames/bind";
import Container from "../components/Container";
import Button from "../components/Button";
import CardList from "../components/CardList";
import mock from "../mock.json";
import Input from "../components/Input";
import { useState } from "react";
import { getProducts } from "../api";

const cn = classNames.bind(style);

const ItemPage = () => {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [isActive, setActive] = useState(false);

  const sortedProds = mock.list.sort((a, b) => b[order] - a[order]);
  const bestProds = mock.list.sort((a, b) => b.favoriteCount - a.favoriteCount);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoadClick = async () => {
    const { items } = await getProducts();
    setItems(items);
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Container className={cn("container")}>
      <section className={cn("section")}>
        <h2 className={cn("section-title")}>베스트 상품</h2>
        <CardList products={bestProds} />
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
        <CardList products={sortedProds} />
      </section>
    </Container>
  );
};

export default ItemPage;
