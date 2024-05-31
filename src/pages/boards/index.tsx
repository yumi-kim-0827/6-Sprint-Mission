import Articles from '@/components/boards/AllArticles';
import BestArticles from '@/components/boards/BestArticles';
import HeaderSpace from '@/components/common/HeaderSpace';
import Header from '@/components/navigation/Header';

const boardsPage = () => {
	return (
		<main>
			<Header />
			<HeaderSpace />
			<BestArticles />
			<Articles />
		</main>
	);
};

export default boardsPage;
