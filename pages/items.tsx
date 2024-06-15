import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import getAllItems from "@/pages/services/GetAllItem";
import getBestItems from "@/pages/services/GetBestItem";
import Paginate from "@/components/Paginate";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { CgHeart } from "react-icons/cg";

type PriductItem = {
  id: number;
  name: string;
  price: number;
  images: string[];
  favoriteCount: number;
};

const Items = () => {
  const router = useRouter();
  const [bestItems, setBestItems] = useState<PriductItem[]>([]);
  const [allItems, setAllItems] = useState<PriductItem[]>([]);
  const [totalCount, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("recent");
  const [search, setSearch] = useState("");
  const menuData = [
    { href: "/items", menuName: "자유게시판" },
    { href: "/additem", menuName: "중고마켓" },
  ];

  const handleBestItems = async () => {
    try {
      const responses = await getBestItems();
      setBestItems(responses?.data.list);
      setTotal(responses?.data.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleBestItems();
  }, []);

  const handleAllItems = async () => {
    try {
      const responses = await getAllItems(currentPage, sort, search);
      setAllItems(responses?.data.list);
      console.log("아이템 불러오기!");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleAllItems();
  }, [currentPage, sort]);

  const onChangeSort = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const onChangeSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Head>
        <title>아이템</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuData={menuData} />
      <main className={styles.padding_content}>
        <section className={styles.best_items_area}>
          <div className={styles.sub_category_area}>
            <p className={styles.sub_category_text}>베스트 상품</p>
          </div>
          <div className={styles.items_list}>
            {bestItems.map((item) => {
              return (
                <div className={styles.best_item} key={item.id}>
                  <div className={styles.best_item_img}>
                    <img src={item.images[0]} alt="베스트상품" />
                  </div>
                  <div className={styles.best_item_info}>
                    <span>{item.name}</span>
                    <p>{item.price}원</p>
                    <em>{item.favoriteCount}</em>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.all_items_area}>
          <div className={styles.sub_category_area}>
            <p className={styles.sub_category_text}>전체 상품</p>
            <div className={styles.sub_category_util}>
              <input
                placeholder="검색할 상품을 입력해주세요"
                onChange={onChangeSearch}
              />
              <Button
                text={"검색하기"}
                className={"btn_style"}
                onClick={() => {
                  handleAllItems();
                  setCurrentPage(1);
                }}
              />
              <Button
                text={"상품 등록하기"}
                className={"btn_style"}
                onClick={() => router.push("/additem")}
              />
              <select onChange={onChangeSort}>
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>
          <div className={styles.items_list}>
            {allItems.map((item) => {
              return (
                <div className={styles.best_item} key={item.id}>
                  <div className={styles.best_item_img}>
                    <img src={item.images[0]} alt="베스트상품" />
                  </div>
                  <div className={styles.best_item_info}>
                    <span>{item.name}</span>
                    <p>{item.price}원</p>
                    <em>
                      <CgHeart />
                      {item.favoriteCount}
                    </em>
                  </div>
                </div>
              );
            })}
          </div>
          <Paginate
            totalCount={totalCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </main>
      ;
    </>
  );
};

export default Items;
