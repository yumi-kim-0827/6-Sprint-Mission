import React from 'react';
import { Post } from '@/types/post';
import Image from 'next/image';
import style from './style.module.scss';
import { dateToString } from '@/utils/dateToString';

interface BestPostProps {
  post: Post;
}

const BestPost = ({ post }: BestPostProps) => {
  return (
    <article className={style.container}>
      <Image
        src="/images/best-badge.png"
        alt="베스트 게시물 뱃지"
        width="102"
        height="30"
        priority
      />
      <div className={style.top_info}>
        <h3>{post.title}</h3>
        {post.image && (
          <div className={style.image}>
            <Image
              src={post.image}
              alt="게시물 이미지"
              width="48"
              height="45"
            />
          </div>
        )}
      </div>
      <div className={style.bottom_info}>
        <div className={style.bottom_left}>
          <span>{post.writer.nickname}</span>
          <span>{post.likeCount}</span>
        </div>
        <span>{dateToString(post.createdAt)}</span>
      </div>
    </article>
  );
};

export default BestPost;
