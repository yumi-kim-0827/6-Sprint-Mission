import styles from '@/styles/boards/AllArticles.module.css';

import ic_search from '@/assets/images/items/ic_search.svg';

import { useEffect, useState } from 'react';
import { getBoards } from '@/api/boards.api';

import AllSection from './AllSection';
import Link from 'next/link';
import Dropdown from '@/components/common/Dropdown';
import Image from 'next/image';

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
	page?: number;
	pageSize?: number;
	search?: string;
}

const AllArticles: React.FC = () => {
	const [order, setOrder] = useState<string>('recent');
	const [search, setSearch] = useState<string>('');
	const [boards, setBoards] = useState<BoardType[]>([]);

	const handleLoad = async (query: GetBoardsQuery) => {
		const { list }: GetBoardsResponse = await getBoards(query);
		setBoards(list || []);
	};

	useEffect(() => {
		handleLoad({ orderBy: order, search: search });
	}, [order, search]);

	const handleChange = (value: string) => {
		setOrder(value);
	};

	const handleSearch = (value: string) => {
		setSearch(value);
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
				<div className={styles.all_search_icon}>
					<Image src={ic_search} alt='검색 아이콘' fill />
				</div>
				<input
					className={styles.all_articles_input}
					maxLength={50}
					type='text'
					onChange={(e) => handleSearch(e.target.value)}
					placeholder='검색할 상품을 입력해주세요'
				/>
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
