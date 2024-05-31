import { useState, useEffect } from 'react';
import axios from '@/src/libs/axios';
import ArticleList from '@/src/components/ArticleList';
import SearchForm from '@/src/components/SearchForm';
import DropDownMenu from '@/src/components/DropDownMenu';
import { Article, SortBy } from '@/src/types/type';

export default function BoardPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchedArticles, setSearchedArticles] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>('recent');

  async function getArticles() {
    const res = await axios.get('/articles');
    const nextArticles = res.data.list;
    setArticles(nextArticles);
    setSearchedArticles(nextArticles);
  }

  async function getSortedArticles() {
    const res = await axios.get(`/articles?orderBy=${sortBy}`);
    const nextSrotedArticles = res.data.list;
    setSearchedArticles(nextSrotedArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    if (sortBy === 'recent' || sortBy === 'like') {
      getSortedArticles();
    }
  }, [sortBy]);

  const handleSearch = (keyword: string) => {
    const searched = articles.filter((article) => article.title.includes(keyword));
    setSearchedArticles(searched);
  };

  const handleSortOptionClick = (sortOption: SortBy) => {
    setSortBy(sortOption);
  };

  return (
    <>
      <section>
        <h2>베스트 게시글</h2>
      </section>
      <section>
        <h2>게시글</h2>
        <SearchForm onSearch={handleSearch} />
        <DropDownMenu onSortOption={handleSortOptionClick} />
        <ArticleList articles={searchedArticles} />
      </section>
    </>
  );
}
