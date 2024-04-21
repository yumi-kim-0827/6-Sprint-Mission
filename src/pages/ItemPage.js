import style from "../styles/ItemPage.module.css";
import classNames from "classnames/bind";
import Container from "../components/Container";
import Button from "../components/Button";
import CardList from "../components/CardList";
import Input from "../components/Input";
import { useState } from "react";

const cn = classNames.bind(style);

const ItemPage = () => {
  const [order, setOrder] = useState();

  // TODO
  function handleOrderClick() {
    setOrder();
  }

  return (
    <Container className={cn("container")}>
      <section className={cn("section")}>
        <h2 className={cn("section-title")}>베스트 상품</h2>
        <CardList />
      </section>
      <section className={cn("section")}>
        <h2 className={cn("section-title")}>전체 상품</h2>
        <div className={cn("section-menu")}>
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
          {/* TODO */}
          <div className={cn("select-order")}>
            <button className={cn("select-btn")}>최신순</button>
            <ul className={cn("order-list")}>
              <li className={cn("order-item")}>
                <button type="button" onClick={handleOrderClick}>
                  최신순
                </button>
              </li>
              <li className={cn("order-item")}>
                <button type="button" onClick={handleOrderClick}>
                  좋아요순
                </button>
              </li>
            </ul>
          </div>
        </div>
        <CardList />
      </section>
    </Container>
  );
};

export default ItemPage;
