import { useState } from "react";
import PostElement from "./components/PostElement";
import styles from "./style.module.css";
import useSetNumOfItemsToShow from "@/hooks/useSetNumberOfItemsToShow";
import { bestPost } from "@/constants/mock";

const BestPost = () => {
  const [posts, setPost] = useState(bestPost);
  const numOfItemsToShow = useSetNumOfItemsToShow({
    desktop: 3,
    tablet: 2,
    mobile: 1,
  });
  const showedPost = posts.slice(0, numOfItemsToShow);
  return (
    <div className={styles.container}>
      <header className={styles.title}>베스트 게시글</header>
      <div className={styles.posts}>
        {showedPost.map((post) => {
          return <PostElement key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default BestPost;
