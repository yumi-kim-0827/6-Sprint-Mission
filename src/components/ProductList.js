import styled, { css } from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';

const ProductListItemLi = styled.li`
  width: 100%;
`;

const ItemImgBox = styled.div`
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1;
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

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) =>
    props.className === 'bestProductList' &&
    css`
      grid-template-columns: repeat(4, 1fr);

      @media (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);

        /* 4개의 아이템 중 2개만 보이도록 설정 */
        li:nth-child(n + 3) {
          display: none;
        }
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);

        /* 4개의 아이템 중 3개만 보이도록 설정 */
        li:nth-child(n + 2) {
          display: none;
        }
      }
    `}
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

function ProductList({ items, className }) {
  return (
    <ProductListUl className={className}>
      {items.map((item) => {
        return (
          <ProductListItemLi key={item.id}>
            <ProductListItem item={item} />
          </ProductListItemLi>
        );
      })}
    </ProductListUl>
  );
}
export default ProductList;
