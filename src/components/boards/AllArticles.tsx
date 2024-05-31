import styles from '@/styles/boards/AllArticles.module.css';

import { useEffect, useState } from 'react';
import { getBoards } from '@/api/boards.api';

import AllSection from './AllSection';
import Link from 'next/link';
import Dropdown from '@/components/common/DropDown';

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

const AllArticles = () => {
	const [order, setOrder] = useState<string>('recent');
	const [boards, setBoards] = useState<BoardType[]>([]);

	const handleLoad = async (orderQuery: string) => {
		const { list }: GetBoardsResponse = await getBoards({
			orderBy: orderQuery,
		});
		setBoards(list || []);
	};

	useEffect(() => {
		handleLoad(order);
	}, [order]);

	const handleChange = (value: string) => {
		setOrder(value);
	};

	return (
		<section className={styles.all_articles_wrap}>
			<div className={styles.all_articles_title_wrap}>
				<span className={styles.all_articles_title}>게시글</span>
				<Link className={styles.all_articles_title_btn} href=''>
					글쓰기
				</Link>
			</div>
			<div className={styles.all_articles_sort_wrap}>
				<input className={styles.all_articles_input} type='text' />

				<Dropdown
					className={styles.all_articles_dropdown}
					name='order'
					value={order}
					onChange={(name, value) => setOrder(value)}
					options={[
						{ label: '최신순', value: 'recent' },
						{ label: '좋아요순', value: 'like' },
					]}
				/>
			</div>
			<div className={styles.all_articles_main}>
				{boards.map((board) => (
					<AllSection key={board.id} board={board} />
				))}
			</div>
		</section>
	);
};

export default AllArticles;
