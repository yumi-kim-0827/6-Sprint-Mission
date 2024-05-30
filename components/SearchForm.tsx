import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ initvalue = "" }) {
  const [value, setValue] = useState(initvalue);
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
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
