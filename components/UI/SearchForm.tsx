// import { ChangeEvent, FormEvent, useState } from "react";
// import styles from "./SearchForm.module.css";

// export default function SearchForm({ initialValue = "" }) {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // if (!value) {
//     //   return;
//     // }
//   };

//   return (
//     <form className={styles.searchForm} onSubmit={handleSubmit}>
//       <input
//         className={styles.searchInput}
//         name="q"
//         value={value}
//         placeholder="찾고 싶은 옷을 검색해보세요."
//         onChange={handleChange}
//       />
//       <button className={styles.searchButton}>검색</button>
//     </form>
//   );
// }
