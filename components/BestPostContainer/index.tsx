/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { Post } from '@/types/post';
import BestPost from '@/components/BestPost';
import style from './style.module.scss';
import { getArticleList } from '@/apis/getArticleList';
import useNumberOfItemToShow from '@/hooks/useNumberOfItemToShow';
import { useFetch } from '@/hooks/useFetch';

const BestPostContainer = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const pageSize = useNumberOfItemToShow({ desktop: 3, tablet: 2, mobile: 1 });
  const { isLoading, loadError, handleFetch } = useFetch(getArticleList);

  const fetchPostListData = async ({ pageSize }: { pageSize: number }) => {
    const data = await handleFetch({ pageSize });
    if (data) setPostList(data.list);
  };

  useEffect(() => {
    fetchPostListData({ pageSize });
  }, [pageSize]);

  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (loadError) {
    return <h1>{loadError.message}</h1>;
  }

  return (
    <div className={style.wrapper}>
      {postList.map((post) => (
        <BestPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BestPostContainer;
