import "./TagList.scss";
import tagXicon from "/src/shared/asset/tagXicon.png";

// tags = {value : ~ , id: ~}
export function TagList({ tags, onDelete }) {
  return (
    <div className="TagList">
      {tags &&
        tags.map((v) => (
          <div className="TagList__card" key={v.id}>
            <span>{v.value}</span>
            <button
              className="TagList__cancel"
              onClick={() => {
                onDelete(v);
              }}
              type="button"
            >
              <img src={tagXicon} />
            </button>
          </div>
        ))}
    </div>
  );
}
