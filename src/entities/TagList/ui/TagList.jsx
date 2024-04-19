{
  /* <TagInput onChange={setTags} /> */
}
{
  /* <TagList tags={tags}> */
}
import "./TagList.scss";
import tagXicon from "/src/shared/asset/tagXicon.png";

export function TagList({ tags, onDelete }) {
  return (
    <div className="TagList">
      {tags &&
        tags.map((v, index) => (
          <div className="TagList__card" key={index}>
            <span>{v}</span>
            <button
              className="TagList__cancel"
              onClick={() => {
                onDelete(v);
              }}
            >
              <img src={tagXicon} />
            </button>
          </div>
        ))}
    </div>
  );
}
