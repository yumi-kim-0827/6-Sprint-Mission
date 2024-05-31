import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/search.module.scss";
export default function Search() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.productInput}
          name="value"
          value={value}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleChange}
        />
      </form>
    </>
  );
}
