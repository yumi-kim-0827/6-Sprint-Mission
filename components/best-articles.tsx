import BestArticleComponent from './best-article-component';
import { useEffect, useState } from 'react';
import { getArticles } from '@/lib/getArticles';

interface ArticlesListProps {
  totalCount?: number;
  list: ArticleProps[];
}
interface ArticleProps {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}
interface Writer {
  nickname: string;
  id: number;
}

const PAGE_NUM = 1;
const PAGE_SIZE = 3;
const ORDERBY = 'like';

export default function BestArticles() {
  const [bestArticles, setBestArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const fetchBestArticles = async () => {
      try {
        const data = await getArticles(PAGE_NUM, PAGE_SIZE, ORDERBY);
        setBestArticles(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchBestArticles();
  }, []);

  return (
    <div className='flex gap-6 md:gap-4'>
      {bestArticles.map(article => (
        <BestArticleComponent key={article.id} {...article} />
      ))}
    </div>
  );
}
