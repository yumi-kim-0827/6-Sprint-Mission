import React, { useState } from 'react';
import style from '@/styles/BestPosts.module.css';
import { writing } from '../api/api';
import BestPost from './BestPost';

const BestPosts = ({ posts }: { posts: writing[] }) => {
  return (
    <div className={style.bestPostsFrame}>
      <p className={style.bestPostsTitle}>베스트 게시글</p>
      <div className={style.bestPostsBoxes}>
        {posts.map((element) => (
          <BestPost
            key={element.id}
            image={element.image}
            content={element.title}
            likeCount={element.likeCount}
            nickName={element.writer.nickname}
            createdAt={element.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default BestPosts;

