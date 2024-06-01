import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getBestPosts } from '../api/api';
import BestPosts from './BestPosts';
import { writing } from '../api/api';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
const URL = 'page=1&pageSize=3&orderBy=like';
const BestPostsContainer = () => {
  const route = useRouter();
  const [bestPosts, setBestPost] = useState<writing[]>([]);

  const getPosts = async () => {
    try {
      const posts = await getBestPosts(URL);
      setBestPost(posts);
    } catch (error) {
      const err = error as AxiosError;
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return <BestPosts posts={bestPosts} />;
};

export default BestPostsContainer;

