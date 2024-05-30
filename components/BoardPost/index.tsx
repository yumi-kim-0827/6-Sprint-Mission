import { Post } from '@/types/post';
import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { dateToString } from '@/utils/dateToString';
import HeartIcon from '@/public/svgs/heart-icon.svg';

interface BoardPostProps {
  post: Post;
}

const BoardPost = ({ post }: BoardPostProps) => {
  return (
    <article className={style.container}>
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
          <Image
            src="/images/profile.png"
            alt="유저 프로필"
            width="24"
            height="24"
            priority
          />
          <span>{post.writer.nickname}</span>
          <span>{dateToString(post.createdAt)}</span>
        </div>
        <div className={style.like}>
          <HeartIcon />
          <span>{post.likeCount}</span>
        </div>
      </div>
    </article>
  );
};

export default BoardPost;
