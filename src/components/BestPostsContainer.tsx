import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getBestPosts } from '../api/api';
import BestPosts from './BestPosts';
import { Post } from '../api/api';
const URL = 'page=1&pageSize=3&orderBy=like';
const BestPostsContainer = () => {
  const [bestPosts, setBestPost] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const posts = await getBestPosts(URL);
      setBestPost(posts);
    } catch (error) {}
  };
  useEffect(() => {
    getPosts();
  }, []);
  return <BestPosts posts={bestPosts} />;
};

export default BestPostsContainer;

