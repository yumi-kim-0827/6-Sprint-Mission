import Image from 'next/image';
import Link from 'next/link';
import ArticleComponent from './article-component';
import ic_search from '../public/images/ic_search.png';
import SelectBox from './select-box';
import { getArticles, ListProps } from '@/lib/getArticles';
import { ChangeEvent, useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';

const PAGE_NUM = 1;
const PAGE_SIZE = 10;

interface Props {
  articlesServer: ListProps[];
}

export default function Articles({ articlesServer }: Props) {
  const [orderBy, setOrderby] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState<ListProps[]>(articlesServer);
  const debouncedValue = useDebounce(keyword, 300);

  const handleOrderClick = async (sortType: string): Promise<void> => {
    setOrderby(sortType);
    try {
      const sortData = await getArticles(PAGE_NUM, PAGE_SIZE, sortType, keyword);
      setArticles(sortData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const sortData = await getArticles(PAGE_NUM, PAGE_SIZE, orderBy, debouncedValue);
        setArticles(sortData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [debouncedValue, orderBy]);

  return (
    <div>
      <div className='relative flex justify-between gap-2 mb-6'>
        <Image src={ic_search} width={24} alt='돋보기' className='absolute z-10 top-2 left-3' />
        <input
          value={keyword}
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
