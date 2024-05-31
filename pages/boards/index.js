import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import ArticleList from '@/components/ArticleList';

export default function BoardPage() {
  const [articles, setArticles] = useState();

  async function getArticles() {
    const res = await axios.get('/articles');
    const nextArticles = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <section>
        <h2>베스트 게시글</h2>
      </section>
      <section>
        <h2>게시글</h2>
        <ArticleList articles={articles} />
      </section>
    </>
  );
}
