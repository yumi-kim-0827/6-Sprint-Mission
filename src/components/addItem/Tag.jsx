import "../../styles/additem/Tag.css";
import ICON_CANCEL from "../../assets/icon_cancel.svg";

const Tag = ({ value, onDelete }) => {
  return (
    <div className="Tag">
      {value}
      <button
        onClick={(e) => {
          onDelete(value);
        }}
      >
        <img src={ICON_CANCEL} alt="태그 삭제 버튼" />
      </button>
    </div>
  );
};

export default Tag;
