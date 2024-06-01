import React, { useMemo } from 'react';
import BoardPost from '../BoardPost';
import { Post } from '@/types/post';
import { getArticleList } from '@/apis/getArticleList';
import style from './style.module.scss';
import { SortType } from '@/constants/sortOption';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import { useFetch } from '@/hooks/useFetch';

interface BoardPostListContainerProps {
  orderBy: SortType;
  keyword: string;
}

const BoardPostListContainer = ({
  orderBy,
  keyword,
}: BoardPostListContainerProps) => {
  const params = useMemo(
    () => ({
      orderBy,
      pageSize: 10,
      keyword,
    }),
    [orderBy, keyword]
  );

  const { data, isLoading, loadError } = useFetch<{ list: Post[] }>(
    getArticleList,
    params
  );

  if (isLoading) {
    return <LoadingSpinner className={style.spinner} />;
  }
  if (loadError) {
    return <span>{loadError.message}</span>;
  }

  return (
    <div className={style.wrapper}>
      {data && data.list.map((post) => <BoardPost key={post.id} post={post} />)}
    </div>
  );
};

export default BoardPostListContainer;
