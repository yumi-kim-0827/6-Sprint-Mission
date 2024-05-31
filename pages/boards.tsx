import { useEffect, useState } from "react";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import BestArticlesList from "@/components/BestArticles/BestArticlesList";
import ArticleList from "@/components/Articles/AllArticlesList";
import { Article } from "@/types/article";
import DropdownMenu from "@/components/DropdownMenu";

export default function Boards() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [bestPosts, setBestPosts] = useState<Article[]>([]);
  const [sortOption, setSortOption] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/articles");
        const allPosts: Article[] = response.data.list;

        const bestPosts = allPosts
          .slice()
          .sort((a, b) => parseInt(b.likeCount) - parseInt(a.likeCount))
          .slice(0, 3);
        setBestPosts(bestPosts);
        setPosts(allPosts);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleSortSelection = (value: string) => {
    setSortOption(value);
  };

  const filteredPosts = posts
    .filter((post) => post.title.includes(searchQuery))
    .sort((a, b) => {
      if (sortOption === "latest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (sortOption === "likes") {
        return parseInt(b.likeCount) - parseInt(a.likeCount);
      }
      return 0;
    });

  return (
    <div>
      <h2>베스트 게시글</h2>
      <BestArticlesList bestArticlesList={bestPosts} />
      <SearchForm />
      <DropdownMenu onSortSelection={handleSortSelection} />

      <h2>게시글</h2>
      <ArticleList articleList={filteredPosts} />
    </div>
  );
}
