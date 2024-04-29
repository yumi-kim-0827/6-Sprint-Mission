import React from 'react';

function ProductDetails({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Favorite Count: {product.favoriteCount}</p>
        <p>Tags: {product.tags.join(', ')}</p>
      </div>

    </div>
    
  );
}
export default ProductDetails;