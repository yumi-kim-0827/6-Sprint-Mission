import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../../../services/getProducts";

const PAGE_SIZE = 4;

function BestProduct() {
    const [bestProducts, setBestProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts({ limit: PAGE_SIZE, sort: 'likes' });
                console.log(data); 

                if (Array.isArray(data)) {
                    setBestProducts(data);
                } else {
                    setBestProducts(data.products || []);
                }
            } catch (error) {
                console.error("상품을 불러오는 중 오류발생", error);
            }
        };

        fetchProducts();
    }); 
    
    return (
        <div className="bestItemsContainer">
            <h1 className="sectionTitle">베스트 상품</h1>

            <div className="bestItemsCardSection">
                {bestProducts.map((product) => (
                    <ItemCard product={product} key={`best-item-${product.id}`} />
                ))}
            </div>
        </div>
    );
}

export default BestProduct;
