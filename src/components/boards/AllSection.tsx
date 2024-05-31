import ic_profile from '@/assets/images/icon/ic_profile.svg';
import ic_heart from '@/assets/images/icon/ic_heart.svg';

import styles from '@/styles/boards/AllArticles.module.css';

import Image from 'next/image';
import React from 'react';

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

interface AllSectionProps {
	board: BoardType;
}

const AllSection: React.FC<AllSectionProps> = ({ board }) => {
	const createdAt = new Date(board.createdAt).toLocaleDateString();
	const content = board.content.length > 200 ? board.content.slice(0, 200) + '...' : board.content;
	const likeCount = board.likeCount > 9999 ? '9999+' : board.likeCount;

	return (
		<div className={styles.all_section_wrap}>
			<div className={styles.all_section_main}>
				<span className={styles.all_section_content}>{content}</span>

				{board.image && (
					<div className={styles.all_section_border}>
						<div className={styles.all_section_image}>
							<Image src={board.image} alt={board.writer.nickname} fill style={{ objectFit: 'cover' }} />
						</div>
					</div>
				)}
			</div>

			<div className={styles.all_section_user}>
				<div className={styles.all_section_user_data}>
					<div className={styles.all_section_user_img}>
						<Image src={ic_profile} alt='유저 아이콘' fill />
					</div>
					<span className={styles.all_section_nickname}>{board.writer.nickname}</span>

					<span className={styles.all_section_createdAt}>{createdAt}</span>
				</div>

				<div className={styles.all_section_like_wrap}>
					<div className={styles.all_section_like_ic}>
						<Image src={ic_heart} alt='좋아요 아이콘' fill />
					</div>
					<span className={styles.all_section_like}>{likeCount}</span>
				</div>
			</div>
		</div>
	);
};

export default AllSection;
