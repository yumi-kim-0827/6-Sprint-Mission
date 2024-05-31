// CSS
import styles from '@/styles/Items/Comments.module.css';

import React, { useEffect, useState } from 'react';
import { getComment } from '@/api/product.api';
import Comment from './Comment';

interface CommentType {
	id: string;
	content: string;
	updatedAt: string;
	writer: {
		image: string;
		nickname: string;
	};
}

interface CommentsProps {
	productId: string | string[] | undefined;
}

const Comments: React.FC<CommentsProps> = ({ productId }) => {
	const [comments, setComments] = useState<CommentType[]>([]);

	const handleLoad = async (itemId: string | string[]) => {
		const { list } = await getComment(itemId);
		setComments(list);
	};

	useEffect(() => {
		if (productId == undefined) return;

		handleLoad(productId);
	}, [productId]);

	return (
		<>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</>
	);
};

export default Comments;
