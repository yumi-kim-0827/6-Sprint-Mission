import iconSearch from '@/assets/images/items/ic_search.svg';

import styles from '@/styles/Items/ProductAll.module.css';

import React, { useState, useEffect } from 'react';

import Product from './Product';
import { getProducts } from '@/api/product.api';
import Dropdown from '@/components/products/Dropdown';

import Link from 'next/link';
import Image from 'next/image';

interface ProductType {
	id: string;
	images: string;
	name: string;
	price: number;
	favoriteCount: number;
}

interface GetProductsResponse {
	list: ProductType[];
}

const ProductAll: React.FC = () => {
	const [order, setOrder] = useState<string>('recent');
	const [products, setProducts] = useState<ProductType[]>([]);

	const handleLoad = async (orderQuery: string) => {
		const { list }: GetProductsResponse = await getProducts({
			orderBy: orderQuery,
		});
		setProducts(list || []);
	};

	useEffect(() => {
		handleLoad(order);
	}, [order]);

	const handleChange = (value: string) => {
		setOrder(value);
	};

	return (
		<>
			<div className={styles.all_top_warp}>
				<span className={styles.all_title}>전체 상품</span>

				<div className={styles.all_search_wrap}>
					<Image className={styles.all_search_icon} src={iconSearch} alt='icon_search' />
					<input className={styles.all_search} placeholder='검색할 상품을 입력해주세요' />
				</div>

				<Link href='/addItem' className={`${styles.all_add_item} blue`}>
					상품 등록하기
				</Link>

				<div className={styles.all_sort_wrap}>
					<Dropdown
						options={[
							{ label: '최신순', value: 'recent' },
							{ label: '좋아요순', value: 'favorite' },
						]}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className={styles.all_content}>
				{/* <Desktop> */}
				{products.slice(0, 12).map((product) => (
					<Product product={product} isAllSection={true} key={product.id} />
				))}
				{/* </Desktop> */}

				{/* <Tablet>
          {products.slice(0, 6).map((product) => (
            <Product product={product} isAllSection={true} key={product.id} />
          ))}
        </Tablet>

        <Mobile>
          {products.slice(0, 4).map((product) => (
            <Product product={product} isAllSection={true} key={product.id} />
          ))}
        </Mobile> */}
			</div>
		</>
	);
};

export default ProductAll;
