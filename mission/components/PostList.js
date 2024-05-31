import styles from "@/styles/postList.module.scss";
import Image from "next/image";

function extractDate(postedTime) {
  const dateRegex = /\d{4}-\d{2}-\d{2}/;
  const dateMatch = postedTime.match(dateRegex);
  return dateMatch ? dateMatch[0] : "";
}

export default function PostList({ posts }) {
  return (
    <>
      <div className={styles.postListContainer}>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.post}>
              <p className={styles.postTitle}>{post.title}</p>
              <div className={styles.postInfo}>
                <Image src="/user-profile-img.png" width={24} height={24} />
                <p className={styles.writer}>{post.writer.nickname}</p>
                <p className={styles.createdAt}>
                  {extractDate(post.createdAt)}
                </p>
                <div className={styles.like}>
                  <Image src="/heart-icon.png" width={24} height={24} />
                  <p className={styles.likeCount}>{post.likeCount}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
