import { useEffect, useState } from 'react';
import { getBoards, BoardType, GetBoardsResponse, GetBoardsQuery } from '@/api/boards.api';
import useDeviceSize from '@/hooks/useDeviceSize';
import BestSection from './BestSection';
import styles from '@/styles/boards/BestArticles.module.css';

interface BestArticlesProps {
	initialBoards: BoardType[];
}

// 베스트 게시글 컴포넌트
const BestArticles: React.FC<BestArticlesProps> = ({ initialBoards }) => {
	const [boards, setBoards] = useState<BoardType[]>(initialBoards);
	const deviceSize = useDeviceSize();

	const [isLoading, setIsLoading] = useState(true);

	/**
	 * 페이지 사이즈 반환 함수
	 * @returns {(1 | 2 | 3)}
	 */
	const pageSize = () => {
		if (deviceSize === 'mobile') {
			return 1;
		} else if (deviceSize === 'tablet') {
			return 2;
		} else {
			return 3;
		}
	};

	const handleLoad = async () => {
		const { list }: GetBoardsResponse = await getBoards({ orderBy: 'like', page: 1, pageSize: pageSize() });
		setBoards(list || []);
	};

	useEffect(() => {
		// 처음 렌더링 시에는 실행하지 않음
		if (isLoading) {
			setIsLoading(false);
			return;
		}

		handleLoad();
	}, [deviceSize]);

	return (
		<section className={styles.best_articles_main}>
			<span className={styles.best_articles_title}>베스트 게시글</span>
			<div className={styles.best_articles_wrap}>
				{boards.map((board) => (
					<BestSection key={board.id} board={board} />
				))}
			</div>
		</section>
	);
};

export default BestArticles;
