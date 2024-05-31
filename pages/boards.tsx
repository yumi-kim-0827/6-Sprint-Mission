import axios from "@/lib/axios";
import Image from "next/image";
import Badge from "@/assets/images/ui/best_badge.svg";
import Heart from "@/assets/images/icons/ic_heart.svg";
import Search from "@/assets/images/icons/ic_search.svg";
import Profile from "@/assets/images/icons/ic_profile.svg";
import Sort from "@/assets/images/icons/ic_sort.svg";
import { useEffect, useState } from "react";
import styles from "@/styles/boards.module.css";

interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export default function CommunityFeedPage() {
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);

  async function getBestArticle() {
    const response = await axios.get("articles/?pageSize=3&orderBy=like");
    const nextBestArticle = response.data.list ?? [];
    setBestArticles(nextBestArticle);
    console.log(nextBestArticle);
  }

  async function getAllArticle() {
    const response = await axios.get("articles");
    const nextAllArticle = response.data.list ?? [];
    setAllArticles(nextAllArticle);
    console.log(nextAllArticle);
  }

  useEffect(() => {
    getBestArticle();
    getAllArticle();
  }, []);
  return (
    <>
      <div>
        <h1 className={styles.bestArticle_header_title}>베스트 게시글</h1>
        <div className={styles.bestArticleList}>
          {bestArticles?.map((bestArticle: any) => (
            <div key={bestArticle.id} className={styles.bestArticle_wrapper}>
              <Image
                src={Badge}
                alt="베스트게시글 뱃지"
                className={styles.bestArticleBadge}
              />
              <div className={styles.bestArticle_content}>
                <div>
                  {bestArticle.title}
                  <Image src="" alt="게시글 이미지" width={72} height={72} />
                </div>

                <div className={styles.bestArticle_content_bottom}>
                  <div className={styles.userInfo}>
                    {bestArticle.writer.nickname}

                    <div className={styles.likeCount_wrapper}>
                      <Image src={Heart} alt="좋아요 아이콘" />
                      {bestArticle.likeCount}
                    </div>
                  </div>
                  <div>{bestArticle.createdAt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={styles.allArticle_header}>
          <h1 className={styles.allArticle_header_title}>게시글</h1>
          <button className={styles.allArticle_header_button}>글쓰기</button>
        </div>

        <div className={styles.allArticle_middle_wrapper}>
          <div className={styles.allArticle_input_wrapper}>
            <Image
              src={Search}
              alt="검색 아이콘"
              style={{ position: "absolute", top: 9, left: 16 }}
            />
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className={styles.allArticle_input}
            />
          </div>
          <button className={styles.allArticleSort_button}>
            최신순
            <Image src={Sort} alt="정렬 아이콘" />
          </button>
        </div>

        <div>
          {allArticles.map((allArticle) => (
            <div key={allArticle.id} className={styles.allArticle_wrapper}>
              <div className="">{allArticle.title}</div>
              <div className={styles.allArticle_content_bottom}>
                <div className={styles.allArticle_useInfo}>
                  <Image src={Profile} alt="게시자 아이콘" />
                  {allArticle.writer.nickname}
                  {allArticle.createdAt};
                </div>
                <div className={styles.likeCount_wrapper}>
                  <Image src={Heart} alt="좋아요 아이콘" />
                  {allArticle.likeCount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
