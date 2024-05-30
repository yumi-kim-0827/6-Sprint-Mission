import HeartIcon from "/public/images/ic_heart.svg";
import HeartActiveIcon from "/public/images/ic_heart-active.svg";

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
  className = "",
}: CardFavoritesProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`flex items-center gap-1 p-0 bg-transparent font-medium text-xs cursor-pointer ${className}`}
      onClick={handleClick}>
      {isFavorite ? (
        <HeartActiveIcon width="16" height="16" viewBox="0 0 24 24" />
      ) : (
        <HeartIcon width="16" height="16" viewBox="0 0 24 24" />
      )}
      {favoriteCount}
    </button>
  );
};

export default CardFavorites;
