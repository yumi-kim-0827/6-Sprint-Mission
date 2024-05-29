import SelectOrderButton from "@/components/SelectOrderButton";
import PostElement from "./components/PostElement";
import styles from "./style.module.css";
import Image from "next/image";
import ic_search from "@/images/ic_search.svg";
import { FAVORITE, RECENT } from "@/constants/sortBy";
import { posts } from "@/constants/mock";
import { useState } from "react";

const SearchPost = () => {
  const [order, setOrder] = useState(RECENT);

  const handleChangeOrder = (order: string) => {
    setOrder(order);
  };

  return (
    <div className={styles.container}>
      <header>
        <h2 className={styles.title}>게시글</h2>
        <button className={styles.write_btn}>글쓰기</button>
      </header>
      <div className={styles.search}>
        <div className={styles.search_input}>
          <Image
            className={styles.ic_search}
            src={ic_search}
            alt="돋보기 아이콘"
            width={24}
            height={24}
          />
          <input name="search" placeholder="검색할 상품을 입력해주세요" />
        </div>

        <div className={styles.selectOrderBtn}>
          <SelectOrderButton
            handleSelectOption={handleChangeOrder}
            currentOrder={order}
          />
        </div>
      </div>
      <section className={styles.posts}>
        {posts.map((post) => {
          return <PostElement key={post.id} post={post} />;
        })}
      </section>
    </div>
  );
};

export default SearchPost;
