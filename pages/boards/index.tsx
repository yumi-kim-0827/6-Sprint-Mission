import TitleText from '@/components/TitleText';
import { useState } from 'react';
import style from './style.module.scss';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import DropDown from '@/components/DropDown';
import { SortType } from '@/constants/sortOption';
import BestPostContainer from '@/components/BestPostContainer';

const Boards = () => {
  const [order, setOrder] = useState<SortType>('recent');
  const [keyword, setKeyword] = useState('');

  const handleClickItem = (sort: SortType) => {
    setOrder(sort);
  };

  const handleSearchItem = (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <main>
      <section>
        <TitleText title="베스트 게시물" />
        <BestPostContainer />
      </section>
      <section>
        <div className={style.board_top}>
          <TitleText title="게시물" />
          <Button>글쓰기</Button>
        </div>
        <div>
          <SearchBar handleSearchItem={handleSearchItem} />
          <DropDown
            options={[{ label: 'recent' }, { label: 'like' }]}
            handleClickItem={handleClickItem}
          />
        </div>
      </section>
    </main>
  );
};

export default Boards;
