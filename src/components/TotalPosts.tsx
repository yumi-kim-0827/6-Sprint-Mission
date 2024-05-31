import React from 'react';
import style from '@/styles/TotalPosts.module.css';
import Link from 'next/link';
import SelectContainer from './SelectContainer';
import TotalPostsContainer from './TotalPostsContainer';
const TotalPosts = () => {
  return (
    <div>
      <div className={style.header}>
        <p className={style.title}>게시글</p>
        <Link className={style.writeButton} href={'/'}>
          글쓰기
        </Link>
      </div>
      <SelectContainer />
      <div className={style.totalPostsFrame}>
        <TotalPostsContainer />
      </div>
    </div>
  );
};

export default TotalPosts;

