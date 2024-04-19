{
  /* <ImageCard
  className="register__image"
  src={v}
  key={index}
  onClick={handleDelete}
/>; */
}
import xIcon from "/src/shared/asset/xicon.png";

import "./ImageCard.scss";

export function ImageCard({ src, onClick, className }) {
  return (
    <>
      <div className={`${className}`}>
        <img src={src} className={`${className} ImageCard__image`} />
        <button
          onClick={() => {
            onClick(src);
          }}
          className="ImageCard__cancel"
        >
          <img src={xIcon} />
        </button>
      </div>
    </>
  );
}
