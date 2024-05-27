import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemForSale from './ItemForSale';
import './style/ItemsForSale.css';
import SelectBox from './SelectBox';
import PageButton from './PageButton';
import { Item } from 'types/ItemResponse';

type ItemProps = {
  items: Item[];
};

export default function ItemsForSale({ items }: ItemProps) {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [title, setTitle] = useState('판매 중인 상품');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(items.slice(0, itemsToShow));

  const handleSort = (criteria: string) => {
    let sortedItems: Item[] = [];
    if (criteria === '최신순') {
      sortedItems = items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (criteria === '좋아요순') {
      sortedItems = items.sort((a, b) => b.favoriteCount - a.favoriteCount);
    }
    setFilteredItems(sortedItems);
  };

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let itemsToShow, title;

      if (width < 768) {
        itemsToShow = 4;
        title = '판매 중인 상품';
      } else if (width < 1199) {
        itemsToShow = 6;
        title = '판매 중인 상품';
      } else {
        itemsToShow = 10;
        title = '전체 상품';
      }
      setFilteredItems(items);
      setItemsToShow(itemsToShow);
      setTitle(title);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items]);

  return (
    <div className='items-for-sale'>
      <div className='search-bar'>
        <h2 className='search-bar__title'>{title}</h2>
        <input
          className='search-bar__input'
          type='text'
          placeholder='검색할 상품을 입력해주세요'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Link to='/additem'>
          <button className='search-bar__register'>상품 등록하기</button>
        </Link>
        <SelectBox handleSort={handleSort} />
      </div>
      <section className='items'>
        {filteredItems?.slice(0, itemsToShow).map(item => (
          <ItemForSale key={item.id} {...item} />
        ))}
      </section>
      <PageButton />
    </div>
  );
}
