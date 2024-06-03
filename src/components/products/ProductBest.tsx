import styles from '@/styles/Items/ProductBest.module.css';

import { useState, useEffect } from 'react';
import { getProducts } from '@/api/product.api';
import Product from './Product';

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

interface GetProductsQuery {
	orderBy: string;
	page: number;
	pageSize: number;
}

const ProductBest: React.FC = () => {
	const [products, setProducts] = useState<ProductType[]>([]);

	const handleLoad = async (query: GetProductsQuery) => {
		const { list }: GetProductsResponse = await getProducts(query);
		setProducts(list);
	};

	useEffect(() => {
		handleLoad({ orderBy: 'favorite', page: 1, pageSize: 4 });
	}, []);

	return (
		<>
			<span className={styles.best_title}>베스트 상품</span>
			<div className={styles.best_content}>
				{products.map((product) => (
					<Product product={product} isAllSection={false} key={product.id} />
				))}
			</div>
		</>
	);
};

export default ProductBest;
