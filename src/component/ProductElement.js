import React from 'react';


const ProductElement = ({product}) => {
    return (
        <div>
            {product.images}
            {product.name}
            {product.price}
            {product.favoriteCount}
        </div>
    );
};

export default ProductElement;