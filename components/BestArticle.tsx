import React from "react";
import styles from "@/styles/BestArticles.module.css";
import Image from "next/image";
import { Props } from "./Article";
import formatTime from "@/utils/formatTime";

const BestArticle = ({ createdAt, image, likeCount, title, writer }: Props) => {
  return (
    <>
      <article className={styles["article-item"]}>
        <div className={styles["article-best-medal-container"]}>
          <Image
            className={styles["article-best-medal"]}
            src="/images/Articles/best-article-medal.svg"
            alt="베스트 게시글 메달 아이콘"
            width={16}
            height={16}
            quality={100}
          ></Image>
          <span className={styles["article-best-text"]}>Best</span>
        </div>
        <div className={styles["article-item-top"]}>
          <p className={styles["article-item-top__title"]}>{title}</p>
          {image && (
            <Image
              className={styles["article-item-top__img"]}
              src={image}
              alt="게시글 이미지"
              width={72}
              height={72}
              quality={100}
            />
          )}
        </div>
        <div className={styles[image ? "article-item-bottom" : "article-item-bottom-no-img"]}>
          <div className={styles["article-item-bottom__left"]}>
            <span className={styles["article-item-bottom__name"]}>{writer.nickname}</span>
            {likeCount > 0 && (
              <>
                <Image
                  className={styles["article-item-bottom__like"]}
                  src="/images/Articles/likeIcon.svg"
                  alt="게시글 좋아요 아이콘"
                  width={16}
                  height={16}
                  quality={100}
                />
                <span className={styles["article-item-bottom__likeCount"]}>{likeCount}</span>
              </>
            )}
          </div>
          <div className={styles["article-item-bottom__right"]}>
            {" "}
            <span className={styles["article-item-bottom__createdAt"]}>{formatTime(createdAt)}</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default BestArticle;
