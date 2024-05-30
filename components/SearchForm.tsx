import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm({ initvalue = "" }) {
  const [value, setValue] = useState(initvalue);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`market?q=${value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
