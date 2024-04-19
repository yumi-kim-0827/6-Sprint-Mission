import React from 'react'
import favoriteButton from '../assets/ic_favorite.png'

function ProductCard({ item }) {
  return (
    <div>
      <img src={item.images[0]} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.price.toLocaleString()}원</p>
        <div>
          <img src={favoriteButton} alt='favoriteButton' />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  )
}

export default ProductCard