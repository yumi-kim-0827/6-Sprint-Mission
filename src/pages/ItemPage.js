import style from "../styles/ItemPage.module.css";
import classNames from "classnames/bind";
import Container from "../components/Container";
import Button from "../components/Button";
import CardList from "../components/CardList";
import Input from "../components/Input";

const cn = classNames.bind(style);

const ItemPage = () => {
  return (
    <Container className={cn("container")}>
      <section className={cn("section")}>
        <h2 className={cn("section-title")}>베스트 상품</h2>
        <CardList />
      </section>
      <section className={cn("section")}>
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
        <select>
          <option>최신순</option>
          <option>좋아요순</option>
        </select>
        <CardList />
      </section>
    </Container>
  );
};

export default ItemPage;
