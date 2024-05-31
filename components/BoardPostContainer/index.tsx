/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import BoardPost from '@/components/BoardPost';
import { Post } from '@/types/post';
import { useFetch } from '@/hooks/useFetch';
import { getArticleList } from '@/apis/getArticleList';
import style from './style.module.scss';
import { SortType } from '@/constants/sortOption';
import LoadingSpinner from '@/public/svgs/spinner.svg';

interface BoardPostContainerProps {
  orderBy: SortType;
  keyword: string;
}

const BoardPostContainer = ({ orderBy, keyword }: BoardPostContainerProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const { isLoading, loadError, handleFetch } = useFetch(getArticleList);

  const fetchPostListData = async () => {
    const data = await handleFetch({ orderBy, pageSize: 6, keyword });
    if (data) setPostList(data.list);
  };

  useEffect(() => {
    fetchPostListData();
  }, [orderBy, keyword]);

  if (isLoading) {
    return <LoadingSpinner className={style.spinner} />;
  }
  if (loadError) {
    return <h1>{loadError.message}</h1>;
  }

  return (
    <div className={style.wrapper}>
      {postList.map((post) => (
        <BoardPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BoardPostContainer;
