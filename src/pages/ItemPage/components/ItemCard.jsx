import React from "react";


function ItemCard({item}) {
    return(
        <div className="itemCard">
            <div className="itemImage">
                <img src={item.images} alt={item.name} />
            </div>
            <h2 className="itemName">{item.name} 팔아요</h2>
            <h1 className="price">{item.price}</h1>
            <div className="label">상품소개</div>
            <p className="description">{item.description}</p>
            <div className="label">상품태그</div>
            <ul>
                {item.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <p>{item.favoriteCount}</p>
        </div>
    );
}

export default ItemCard;