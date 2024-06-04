import BestArticleComponent from './best-article-component';
import { useEffect, useState } from 'react';
import { getBestArticles, ListProps } from '@/lib/getArticles';
import Link from 'next/link';

const PAGE_NUM = 1;
const ORDERBY = 'like';

function getPageSize() {
  const width = window.innerWidth;
  if (typeof window === 'undefined') {
    return 3;
  }
  if (width < 768) return 1;
  else if (width < 1199) return 2;
  else return 3;
}

export default function BestArticles() {
  const [bestArticles, setBestArticles] = useState<ListProps[]>([]);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    const fetchBestArticles = async () => {
      try {
        const data = await getBestArticles(PAGE_NUM, pageSize, ORDERBY);
        setBestArticles(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchBestArticles();
  }, [pageSize]);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
