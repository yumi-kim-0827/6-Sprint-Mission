import React from 'react';
import TopNavigation from '../../components/TopNavigation';
import BestItemList from '../../components/BestItemList';

const ItemsPage = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <BestItemList />
      </main>
    </>
  );
};

export default ItemsPage;
