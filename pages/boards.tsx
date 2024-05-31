import BestPostsContainer from '@/src/components/BestPostsContainer';
import TotalPosts from '@/src/components/TotalPosts';
import React from 'react';
import style from '../styles/BoardFrame.module.css';
const boards = () => {
  return (
    <div className={style.boardFrame}>
      <BestPostsContainer />
      <TotalPosts />
    </div>
  );
};

export default boards;

