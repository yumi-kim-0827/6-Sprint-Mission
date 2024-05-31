import styles from '@/styles/boards/BestArticles.module.css';

import BestSection from './BestSection';

import { getBoards } from '@/api/boards.api';
import { useEffect, useState } from 'react';

interface WriterType {
	id: number;
	nickname: string;
}

interface BoardType {
	id: number;
	content: string;
	image: string;
	likeCount: number;
	createdAt: string;
	updatedAt: string;
	writer: WriterType;
}

interface GetBoardsResponse {
	list: BoardType[];
}

interface GetBoardsQuery {
	orderBy: string;
	page: number;
	pageSize: number;
}

const BestArticles: React.FC = () => {
	const [boards, setBoards] = useState<BoardType[]>([]);

	const handleLoad = async (query: GetBoardsQuery) => {
		const { list }: GetBoardsResponse = await getBoards(query);
		setBoards(list || []);
	};

	useEffect(() => {
		handleLoad({ orderBy: 'like', page: 1, pageSize: 3 });
	}, []);

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
