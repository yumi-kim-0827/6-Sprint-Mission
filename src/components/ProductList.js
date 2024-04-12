import { styled } from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';

const ProductListItemLi = styled.li`
  width: 100%;
`;

const ItemImgBox = styled.div`
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  height: 221px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 375px) {
    height: 168px;
  }
`;
const ItemName = styled.h3`
  font-size: 0.85rem;
  font-weight: 500;
`;

const ItemPrice = styled.p`
  font-weight: 700;
  margin: 6px 0;
`;
const ItemFavorites = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
`;

const ProductListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function ProductListItem({ item }) {
  const { images, name, price, favoriteCount } = item;

  return (
    <>
      <ItemImgBox>
        <img src={images} alt={name} />
      </ItemImgBox>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price.toLocaleString()}원</ItemPrice>
      <ItemFavorites>
        <FaRegHeart /> {favoriteCount}
      </ItemFavorites>
    </>
  );
}

function ProductList({ items }) {
  return (
    <ProductListUl>
      {items.map((item) => {
        return (
          <ProductListItemLi key={items.id}>
            <ProductListItem item={item} />
          </ProductListItemLi>
        );
      })}
    </ProductListUl>
  );
}
export default ProductList;
