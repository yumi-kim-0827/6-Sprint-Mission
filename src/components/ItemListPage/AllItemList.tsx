import Item from "constants/Item";
import heartIcon from "../assets/heart-icon.svg";
import "../styles/AllItemList.css";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent } from "react";

interface AllItemProps {
  item: Item;
  className?: string;
}

function AllItem({ item, className = "" }: AllItemProps) {
  const { price, favoriteCount, images, name } = item;
  const classNames = `item-img-container${className}`;
  return (
    <>
      <img src={images[0]} alt={name} className="item-img" />
      <div className="item-contents">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">{price}</p>
        <div className="favorite-container">
          <img src={heartIcon} />
          <p className="item-favorite">{favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

interface Props {
  items: Item[];
  handleSortedChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function AllItemList({
  items,
  handleSortedChange,
  className,
  handleSearchSubmit,
}: Props) {
  return (
    <section className="all-item-list">
      <div className="all-item-header">
        <h2 className="category-title">전체 상품</h2>
        <div className="all-item-header-filter">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              name="search"
              className="all-item-header-search"
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
          <Link to="/addItem" className="item-register-btn">
            상품 등록하기
          </Link>
          <select className="select-box" onChange={handleSortedChange}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="all-item-grid">
        {items.map((item) => {
          return (
            <Link
              to={`/items/${item.id}`}
              key={item.id}
              className="item-container"
            >
              <div key={item.id} className="item-container">
                <AllItem item={item} className={className} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export { AllItemList, AllItem };
