import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchForm.module.css";

interface SearchFromProps {
  initialValue?: string;
}

export default function SearchForm({ initialValue = "" }: SearchFromProps) {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`/articles?q=${value}`);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        placeholder="검색할 상품을 입력해주세요."
        onChange={handleChange}
      />
    </form>
  );
}
