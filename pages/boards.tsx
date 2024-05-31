import BestPostsContainer from '@/src/components/BestPostsContainer';
import React from 'react';
import style from '../styles/BoardFrame.module.css';
const boards = () => {
  return (
    <div className={style.boardFrame}>
      <BestPostsContainer />
    </div>
  );
};

export default boards;

