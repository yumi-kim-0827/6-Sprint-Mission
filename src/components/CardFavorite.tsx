import HeartIcon from "/public/images/ic_heart.svg";
import HeartActiveIcon from "/public/images/ic_heart-active.svg";

interface CardFavoritesProps {
  isFavorite: boolean;
  favoriteCount: number;
  onClick?: () => void;
  className?: string;
}

const CardFavorites = ({
  isFavorite = false,
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
      className={`flex cursor-pointer items-center gap-1 bg-transparent p-0 text-xs font-medium ${className}`}
      onClick={handleClick}
    >
      {isFavorite ? (
        <HeartActiveIcon width="16" height="16" viewBox="0 0 24 24" />
      ) : (
        <HeartIcon
          width="16"
          height="16"
          styles="color: var(--color-cool-gray-500)"
        />
      )}
      {favoriteCount}
    </button>
  );
};

export default CardFavorites;
