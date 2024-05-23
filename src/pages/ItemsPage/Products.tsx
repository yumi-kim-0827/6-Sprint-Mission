import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import favoriteIcon from "../../assets/favorite-icon.svg";

export interface ItemProps {
  id: number;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

function ProductListItem({
  item,
  imageStyle,
}: {
  item: ItemProps;
  imageStyle: string;
}) {
  const { id, images, name, price, favoriteCount } = item;
  const formatPriceWithCommas = (price: number) => {
    return price.toLocaleString("en-US");
  };
  return (
    <Link className="Link" to={`/items/${id}`}>
      <div className="ProductListItem ">
        <img className={imageStyle} src={images} alt={imageStyle} />
        <div>
          <p className="product-title">{name}</p>
          <p className="product-price">{formatPriceWithCommas(price)}원</p>
          <div className="favorite-count">
            <img
              className="favorite-icon"
              src={favoriteIcon}
              alt="favorite icon"
            />
            <p>{favoriteCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface ProductsProps {
  items: ItemProps[];
  type: "best" | "all";
}

function Products({ items, type }: ProductsProps) {
  const getItemStyle = (type: "best" | "all") => {
    switch (type) {
      case "best":
        return "bestItemStyle";
      case "all":
        return "allItemImageStyle";
      default:
        return "";
    }
  };
  return (
    <ul className={`ProductList product-card ${type}`}>
      {items.map((item) => {
        const imageStyle = getItemStyle(type);
        return (
          <li className="ProductListItem" key={item.id}>
            <ProductListItem item={item} imageStyle={imageStyle} />
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
