import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getTotalPosts, writing } from '../api/api';
import Post from './Post';
export const URL = `page=1&pageSize=5`;
const TotalPostsContainer = () => {
  const router = useRouter();
  const { orderBy } = router.query;

  const [posts, setPosts] = useState<writing[]>([]);
  const getPosts = async () => {
    if (orderBy) {
      try {
        const result = await getTotalPosts(`${URL}&orderBy=${orderBy}`);
        setPosts(result);
      } catch (error) {}
    }
  };
  useEffect(() => {
    getPosts();
  }, [orderBy]);
  return (
    <>
      {posts.map((element) => (
        <Post  key={element.id}
        image={element.image}
        content={element.title}
        likeCount={element.likeCount}
        nickName={element.writer.nickname}
        createdAt={element.createdAt} />
      ))}
    </>
  );
};

export default TotalPostsContainer;

