{
  /* <ImageCard
  className="register__image"
  src={v}
  key={index}
  onClick={handleDelete}
/>; */
}
import xIcon from "/src/shared/asset/xicon.png";

export function ImageCard({ src, onClick }) {
  return (
    <>
      <img src={src} className="ImageCard__image" />
      <button onClick={onClick}>
        <img src={xIcon} />
      </button>
    </>
  );
}
