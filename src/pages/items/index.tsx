import ProductList from '@/components/products/ProductList';
import ProductFooter from '@/components/products/ProductFooter';
import Header from '@/components/navigation/Header';

const Items = () => {
	return (
		<>
			<Header />
			<main className='items_container'>
				<ProductList />
			</main>
			<ProductFooter />
		</>
	);
};

export default Items;
