import { PLACEHOLDER } from "../../utils/placeholder";
import styles from "./AddItem.module.css";

const TagInput = ({ tags, setTags }) => {
  const handleTagDeleteClick = tagToDelete => {
    const newTags = tags.filter(tag => tag !== tagToDelete);
    setTags(newTags);
  };

  const handleTagChange = e => {
    const isEnter = e.key === "Enter";
    const isNotEmpty = e.target.value.trim() !== "";

    if (isEnter && isNotEmpty) {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  return (
    <>
      <div>
        <p className={styles.titleForms}>태그</p>
        <input placeholder={PLACEHOLDER.tags} onKeyUp={handleTagChange} />
      </div>
      <div className={styles.containerTags}>
        {tags.map((tag, i) => (
          <div className={styles.tag} key={`${tag}-${i}`}>
            <span>{tag}</span>
            <button
              className={styles.btnClose}
              type="button"
              onClick={() => {
                handleTagDeleteClick(tag);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TagInput;
