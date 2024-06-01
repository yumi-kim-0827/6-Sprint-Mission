import TitleText from '@/components/TitleText';
import { useState } from 'react';
import style from './style.module.scss';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import DropDown from '@/components/DropDown';
import { SortType } from '@/constants/sortOption';
import BestPostListContainer from '@/components/BestPostListContainer';
import BoardPostListContainer from '@/components/BoardPostListContainer';

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
        <BestPostListContainer />
      </section>
      <section>
        <div className={style.board_top}>
          <TitleText title="게시물" />
          <Button>글쓰기</Button>
        </div>
        <div className={style.board_mid}>
          <SearchBar handleSearchItem={handleSearchItem} />
          <DropDown
            options={[{ label: 'recent' }, { label: 'like' }]}
            handleClickItem={handleClickItem}
          />
        </div>
        <BoardPostListContainer orderBy={order} keyword={keyword} />
      </section>
    </main>
  );
};

export default Boards;
