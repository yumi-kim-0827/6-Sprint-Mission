import Image from "next/image";
import Link from "next/link";

import { PostsProps } from "@/types";
import timeString from "@/utils/timeString";

import styles from "@/styles/posts.module.css";
import heartImg from "@/public/icon/ic_heart.svg";
import user_icon from "@/public/icon/user_icon.svg";



export default function Posts({ posts }: PostsProps) {
  return (
    <Link href={`/boards/${posts.id}`}>
      <div key={posts.id} className={styles.postContainer}>
        <div className={styles.postsTop}>
          <span className={styles.postsTitle}>{posts.title}</span>
          {posts.image && (
            <Image width={72} height={72} alt="이미지" src={posts.image} />
          )}
        </div>
        <div className={styles.postsBottom}>
          <div className={styles.BestInfoFirst}>
            <Image width={24} height={24} alt="프로필사진" src={user_icon} />
            <span className={styles.Writer}>{posts.writer.nickname}</span>
            <span className={styles.times}>{timeString(posts.createdAt)}</span>
          </div>
          <div>
            <div className={styles.BestInfoHeart}>
              <Image width={16} height={16} alt="하트" src={heartImg} />
              <span className={styles.LikeCount}>{posts.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
