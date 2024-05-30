import styles from "./styles.module.css";

function ProductTag({ tags, className }) {
  return (
    <div className={styles[className]}>
      {tags.map((tag) => {
        return (
          <div className={styles.tag} key={tag}>
            #{tag}
          </div>
        );
      })}
    </div>
  );
}

export default ProductTag;
