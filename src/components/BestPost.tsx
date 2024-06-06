import React from 'react';
import style from '@/styles/BestPost.module.css';
import medal from '@/src/img/medal.png';
import { sliceText } from '../util/sliceText';
import heart from '@/src/img/heart.png';
import { convertTime } from '../util/convertTime';
const BestPost = ({
  image,
  content,
  likeCount,
  nickName,
  createdAt,
}: {
  image: string | null;
  content: string;
  likeCount: number;
  nickName: string;
  createdAt: string;
}) => {
  const contentText = sliceText(content, 80);
  const contentDate = convertTime(createdAt);
  return (
    <div className={style.postFrame}>
      <div className={style.wrap}>
        <div></div>
        <div className={style.badge}>
          <img src={medal.src} />
          Best
        </div>
        <div className={style.contentFrame}>
          <div className={style.contentBox}>
            <p className={style.content}>{contentText}</p>
            {image ? (
              <img
                className={style.contentImage}
                src={image as string}
                alt='상세이미지임'
              />
            ) : (
              <div className={style.noImage} />
            )}
          </div>
          <div className={style.userInfoFrame}>
            <div className={style.userInfo}>
              <p>{nickName}</p>
              <img src={heart.src} alt='하트' />
              <p>{likeCount}</p>
            </div>
            <p>{contentDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPost;

