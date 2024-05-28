import { useEffect, useState } from "react";
import styles from "@/styles/posts.module.css";
import Image from "next/image";
import heartImg from "@/public/icon/ic_heart.svg";
import timeString from "@/utils/timeString";
import user_icon from "@/public/icon/user_icon.svg";

interface List {
  id: number;
  title: string;
  content: string;
  image: null | string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}
interface Writer {
  id: number;
  nickname: string;
}

interface PostsProps {
  posts: List[];
}

export default function Posts({ posts }: PostsProps) {
  // const [itemPerScroll, setItemPerScroll] = useState() // 스크롤하면 더생기는거? 무한스크롤? 은 나중에 해야되면 하고 일단 그냥 모든데이터 다 보여주는걸로

  return (
    <>
      {posts.map((item) => (
        <>
          <div key={item.id} className={styles.postContainer}>
            <div className={styles.postsTop}>
              <span className={styles.postsTitle}>{item.title}</span>
              {item.image && (
                <Image width={72} height={72} alt="이미지" src={item.image} />
              )}
            </div>
            <div className={styles.postsBottom}>
              <div className={styles.BestInfoFirst}>
                <Image
                  width={24}
                  height={24}
                  alt="프로필사진"
                  src={user_icon}
                />
                <span>{item.writer.nickname}</span>
                <span>{timeString(item.createdAt)}</span>
              </div>
              <div>
                <div className={styles.BestInfoHeart}>
                  <Image width={16} height={16} alt="하트" src={heartImg} />
                  <span>{item.likeCount}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
