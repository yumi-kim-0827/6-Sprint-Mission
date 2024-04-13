import favoriteIcon from "../../assets/favoriteIcon.png";
function ProductCard({ product, imgwidth, imgheight }) {
  const url = product.images[0];
  const alt = product.name;
  return (
    <div className="productInfoCard">
      <img src={url} alt={`${alt}이미지`} width={imgwidth} height={imgheight} />
      <h2>{product.name}</h2>
      <p>{`${product.price}원`}</p>
      <div className="favorite-container">
        <img src={favoriteIcon} alt="favoriteIcon" />
        <p className="favoriteCount">{product.favoriteCount}</p>
      </div>
    </div>
  );
}

export default ProductCard;
