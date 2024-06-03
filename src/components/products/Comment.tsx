import styles from '@/styles/Items/Comments.module.css';
import Image from 'next/image';

import { useEffect, useState } from 'react';

interface CommentProps {
	comment: {
		content: string;
		updatedAt: string;
		writer: {
			image: string;
			nickname: string;
		};
	};
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
	const [time, setTime] = useState<string>('');

	const getDateDiff = (date: string) => {
		const lastUpdated = new Date(date);
		const today = new Date();

		const diffDate = today.getTime() - lastUpdated.getTime();

		const hour = Math.floor(Math.abs(diffDate / (1000 * 60 * 60)));
		const min = Math.floor(Math.abs(diffDate / (1000 * 60)));
		const sec = Math.floor(Math.abs(diffDate / 1000));

		if (hour >= 24) setTime(`${Math.floor(hour / 24)}일 전`);
		else if (hour >= 0) setTime(`${hour}시간 전`);
		else if (min >= 0) setTime(`${min}분 전`);
		else if (sec >= 0) setTime(`${sec}초 전`);
		else if (hour >= 24) setTime(`${Math.abs(hour / 24)}일 전`);
		else console.log(`${hour}시 ${min}분 ${sec}초`);
	};

	useEffect(() => {
		getDateDiff(comment.updatedAt);
	}, [comment.updatedAt]);

	return (
		<div className={styles.comment_wrap}>
			<span className={styles.comment}>{comment.content}</span>

			<div className={styles.comment_writer}>
				<div className={styles.comment_writer_img}>
					<Image src={comment.writer.image} alt='아바타' fill />
				</div>

				<div className={styles.comment_writer_main}>
					<span className={styles.comment_writer_nickname}>{comment.writer.nickname}</span>
					<span className={styles.comment_updated_time}>{time}</span>
				</div>
			</div>
		</div>
	);
};

export default Comment;
