import React from 'react';
import style from '@/styles/TotalPosts.module.css';
import Link from 'next/link';
import SelectContainer from './SelectContainer';
import TotalPostsContainer from './TotalPostsContainer';
const TotalPosts = () => {
  return (
    <div className={style.totalPostsFrame}>
      <div className={style.header}>
        <p className={style.title}>게시글</p>
        <Link className={style.writeButton} href={'/'}>
          글쓰기
        </Link>
      </div>
      <SelectContainer />
      <TotalPostsContainer />
    </div>
  );
};

export default TotalPosts;

