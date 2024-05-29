import BestPost from "@/components/bestPost";
import Posts from "@/components/posts";
import SearchInput from "@/components/search";
import styles from "@/styles/Board.module.css";
import LinkButton from "@/utils/Button";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Dropdown from "@/components/dropdown";

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

export default function Board() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<List[]>([]);
  const [order, setOrder] = useState<"recent" | "like">("recent");

  async function getPosts() {
    const res = await axios.get("/articles");
    const posts = res.data.list ?? [];
    setPosts(posts);
  }

  const handleSortOrderChange = (selectedOrder: "recent" | "like"): void => {
    setOrder(selectedOrder);
  };

  const sortData = (data: List[], order: "recent" | "like"): List[] => {
    if (order === "recent") {
      return data
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } else if (order === "like") {
      return data.slice().sort((a, b) => b.likeCount - a.likeCount);
    } else {
      return data;
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const sortedPosts = sortData(posts, order);
    setPosts(sortedPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  const filteredData = posts.filter((item) =>
    item.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
      <div className={styles.BoardContainer}>
        <div className={styles.bestContainer}>
          <span className={styles.bestTopText}>베스트 게시글</span>
          <div className={styles.bestPosts}>
            <BestPost />
          </div>
        </div>
        <div className={styles.posts}>
          <div className={styles.postsTop}>
            <span className={styles.bestTopText}>게시글</span>
            <LinkButton href="/">글쓰기</LinkButton>
          </div>
          <div className={styles.postsMiddle}>
            <SearchInput value={searchTerm} onChange={handleSearchChange} />
            <Dropdown onChange={handleSortOrderChange} />
          </div>
          <div className={styles.postsContainer}>
            {filteredData.map((post) => (
              <Posts key={post.id} posts={post} />
            ))}
          </div>
        </div>
      </div>
  );
}
