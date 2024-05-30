import "./favoriteitem.css";
import { useState, useEffect } from "react";
import productsData from "./products.json";
import heart from "../../../assets/item/ic_heart.svg";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  favoriteCount: number;
  images: string[];
}

export default function FavoriteItem() {
  const [bestProducts, setBestProducts] = useState<Product[]>([]);

  useEffect(() => {
    const sortedProducts = productsData.sort(
      (a, b) => b.favoriteCount - a.favoriteCount
    );

    const topFourProducts = sortedProducts.slice(0, 4);
    setBestProducts(topFourProducts);
  }, []);

  return (
    <div className="bestitems-container">
      <h2 className="bestitems-writter">베스트 상품</h2>
      <div className="bestitem">
        {bestProducts.map((product: Product) => (
          <div key={product.id} className="bestitem-container">
            <div>
              {product.images.map((image) => (
                <img
                  className="bestitem-image"
                  key={image}
                  src={image}
                  alt="상품 이미지"
                />
              ))}
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}원</p>
            <p>
              <img src={heart} alt="하트 아이콘" />
              {product.favoriteCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
