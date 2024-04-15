import React, { useState, useEffect } from 'react';
import ItemForSale from './ItemForSale';
import './style/ItemsForSale.css';
import SelectBox from './SelectBox';
import PageButton from './PageButton';

export default function ItemsForSale({ items }) {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [title, setTitle] = useState('판매 중인 상품');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items.slice(0, itemsToShow));

  const handleSort = criteria => {
    let sortedItems;
    if (criteria === '최신순') {
      sortedItems = [...items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (criteria === '좋아요순') {
      sortedItems = [...items].sort((a, b) => b.favoriteCount - a.favoriteCount);
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

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      const results = items.filter(
        item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
    }
  };

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
          onKeyDown={handleKeyPress}
        />
        <button className='search-bar__register'>상품 등록하기</button>
        <SelectBox className='select-box' items={items} handleSort={handleSort} />
      </div>
      <section className='items'>
        {filteredItems?.slice(0, itemsToShow).map(item => (
          <ItemForSale key={item.id} item={item} />
        ))}
      </section>
      <PageButton />
    </div>
  );
}
