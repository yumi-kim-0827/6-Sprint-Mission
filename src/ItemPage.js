import React from 'react';
import Header from "./component/Header";
import BestProducts from './component/BestProducts';
import Products from './component/Products';
import "./css/itemPage.css"

const ItemPage = () => {
    return (
        <>
         <Header pageName="중고마켓"/>
         <main>
            <div className='main-content'>
                <BestProducts/>
                <Products/>
            </div>
         </main>
        </>
    );
};

export default ItemPage;