import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>스타일 적용하기</h2>;
      <SearchForm />
      <ul>
        <li>
          <Link href="/item/1"> 1아이템</Link>
          <Link href="/item/2"> 2 아이템</Link>
          <Link href="/item/3">3 아이템</Link>
          <Link href="/item/4">4 아이템</Link>
          <Link href="/item/5">5 아이템</Link>
        </li>
      </ul>
    </>
  );
}
