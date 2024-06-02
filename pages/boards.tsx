import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import DropdownMenu from "@/components/DropdownMenu";
import BestArticleBoards from "@/components/BestArticleBoards";
import ArticleBoards from "@/components/ArticleBoards";
import styles from "@/styles/boards.module.css";

//export async function getServerSideProps() {}

export default function Boards() {
  return (
    <>
      <Head>
        <title>판다마켓-자유게시판</title>
      </Head>
      <div className={styles.container}>
        <BestArticleBoards />
        <ArticleBoards />
      </div>
    </>
  );
}
