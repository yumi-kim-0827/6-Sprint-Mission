import styled from "styled-components";
import HeartIcon from "@/public/images/ic_heart.svg";
import HeartActiveIcon from "@/public/images/ic_heart-active.svg";

interface CardFavoritesProps {
  isFavorite: boolean;
  favoriteCount: number;
  onClick?: () => void;
  className?: string;
}

const CardFavorites = ({
  isFavorite,
  favoriteCount,
  onClick,
  className,
}: CardFavoritesProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledFavorite className={className} onClick={handleClick}>
      {isFavorite ? (
        <HeartActiveIcon width="16" height="16" viewBox="0 0 24 24" />
      ) : (
        <HeartIcon width="16" height="16" viewBox="0 0 24 24" />
      )}
      {favoriteCount}
    </StyledFavorite>
  );
};

const StyledFavorite = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;

  svg {
    cursor: pointer;
  }
`;

export default CardFavorites;
