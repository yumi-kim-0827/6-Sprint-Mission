import { PLACEHOLDER } from "../../utils/placeholder";
import styles from "./TagInput.module.css";
import addItemStyles from "./AddItem.module.css";

const TagInput = ({ tags, setTags }) => {
  const handleTagDeleteClick = targetTagValue => {
    const newTags = tags.filter(tag => tag !== targetTagValue);
    setTags(newTags);
  };

  const handleTagChange = e => {
    const isEnter = e.key === "Enter";
    const isNotEmpty = e.target.value.trim() !== "";

    if (isEnter && isNotEmpty) {
      const newTag = e.target.value.trim();

      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.target.value = "";
    }
  };

  return (
    <>
      <div>
        <p className={addItemStyles.titleForms}>태그</p>
        <input
          maxLength={30}
          placeholder={PLACEHOLDER.tags}
          onKeyUp={handleTagChange}
        />
      </div>
      <div className={styles.containerTags}>
        {tags.map(tag => (
          <div className={styles.tag} key={tag}>
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
