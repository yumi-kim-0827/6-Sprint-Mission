import React from "react";
import styles from "@/styles/NotFound.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <div className={styles["not-found-wrapper"]}>
        <div className={styles["not-found-container"]}>
          <Image
            src="/images/NotFound/errorPanda.svg"
            width={150}
            height={200}
            alt="잘못된 페이지를 안내하는 판다 아이콘"
          />
          <div className={styles["not-found-container__bottom"]}>
            <p className={styles["not-found-text"]}>이런! 페이지 경로가 잘못된 것 같아요.</p>
            <Link className={styles["go-home-btn"]} href="/">
              홈으로 가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
