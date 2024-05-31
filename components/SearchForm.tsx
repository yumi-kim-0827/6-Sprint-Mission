import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm({ keyword = "", onChangeKeyword }) {
  const [value, setValue] = useState(keyword);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChangeKeyword(value);
    if (!value) {
      router.push("/board");
      return;
    }
    router.push(`board?keyword=${value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="keyword" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
