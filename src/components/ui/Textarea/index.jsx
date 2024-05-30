import styles from "./styles.module.css";

function Textarea({ className, content, onChange, placeholder, id }) {
  return (
    <textarea
      className={styles[className]}
      value={content}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      name={id}
    ></textarea>
  );
}

export default Textarea;
