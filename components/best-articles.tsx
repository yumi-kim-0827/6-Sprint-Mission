import BestArticleComponent from './best-article-component';
import { useEffect, useState } from 'react';
import { getBestArticles, ListProps } from '@/lib/getArticles';
import Link from 'next/link';

const PAGE_NUM = 1;
const PAGE_SIZE = 3;
const ORDERBY = 'like';

export default function BestArticles() {
  const [bestArticles, setBestArticles] = useState<ListProps[]>([]);

  useEffect(() => {
    const fetchBestArticles = async () => {
      try {
        const data = await getBestArticles(PAGE_NUM, PAGE_SIZE, ORDERBY);
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
        <Link key={article.id} href={`/boards/${article.id}`}>
          <BestArticleComponent {...article} />
        </Link>
      ))}
    </div>
  );
}
