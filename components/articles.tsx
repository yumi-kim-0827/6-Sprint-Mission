import Image from 'next/image';
import Link from 'next/link';
import ArticleComponent from './article-component';
import ic_search from '../public/images/ic_search.png';
import SelectBox from './select-box';
import { getArticles, ListProps } from '@/lib/getArticles';
import { ChangeEvent, useState, useEffect } from 'react';

const PAGE_NUM = 1;
const PAGE_SIZE = 10;

export default function Articles() {
  const [orderby, setOrderby] = useState('like');
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState<ListProps[]>([]);

  const handleOrderClick = (sortType: string): void => {
    setOrderby(sortType);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles(PAGE_NUM, PAGE_SIZE, orderby, keyword);
        setArticles(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchArticles();
  }, [orderby, keyword]);

  return (
    <div>
      <div className='relative flex justify-between gap-2 mb-6'>
        <Image src={ic_search} width={24} alt='돋보기' className='absolute z-10 top-2 left-3' />
        <input
          onChange={handleChange}
          type='text'
          placeholder='검색할 상품을 입력해주세요'
          className='placeholder-cool-gray400 w-[293px] h-[42px] pl-9 bg-cool-gray100 rounded-xl md:w-[560px] lg:w-[1054px] relative left-[1px] focus:border'
        />
        <SelectBox handleOrder={handleOrderClick} />
      </div>
      <div className='flex flex-col gap-6'>
        {articles.map(article => (
          <Link key={article.id} href={`/boards/${article.id}`}>
            <ArticleComponent {...article} />
          </Link>
        ))}
      </div>
    </div>
  );
}
