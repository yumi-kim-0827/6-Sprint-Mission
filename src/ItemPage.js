import React from 'react';
import Header from "./component/Header";
import BestProducts from './component/BestProducts';
import Products from './component/Products';

const ItemPage = () => {
    return (
        <>
         <Header pageName="중고마켓"/>
         <main>
            <BestProducts/>
            <Products/>
         </main>
        </>
    );
};

export default ItemPage;