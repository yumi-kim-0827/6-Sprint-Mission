import React from 'react';
import Header from '../../components/Header/Header';
import ItemCard from './components/TestItemCard';

function MarketPage() {
  return (
    <>
      <Header />
      <main className="Market-container">
        <div>
          <h1>베스트 상품</h1>
          <ItemCard />
        </div>
        <div>
          <div>
            <h2>전체 상품</h2>

          </div>
          <div>

          </div>

        </div>
      </main>
    </>
  );
}

export default MarketPage;