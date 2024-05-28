import styles from '@/styles/Items/ProductList.module.css';

import ProductAll from './ProductAll';
import ProductBest from './ProductBest';

const ProductList = () => {
	return (
		<div className={styles.product_container}>
			<ProductBest />
			<ProductAll />
		</div>
	);
};

export default ProductList;
