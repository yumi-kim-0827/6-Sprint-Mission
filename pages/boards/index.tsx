import TitleText from '@/components/TitleText';
import { useEffect, useState } from 'react';
import baseAxios from '@/lib/baseAxios';
import { Post } from '@/types/post';
import BestPost from '@/components/BestPost';
import style from './style.module.scss';
import { MOBILE_SIZE, TABLET_SIZE } from '@/constants/windowSize';

const Boards = () => {
  const [originPostList, setOriginPostList] = useState<Post[]>([]);
  const [postList, setPostList] = useState<Post[]>([]);

  const getPostList = async () => {
    const res = await baseAxios.get(`/articles?page=1&pageSize=3&orderBy=like`);
    setOriginPostList(res.data.list);
    setPostList(res.data.list.slice(0, 3));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_SIZE) {
        setPostList(originPostList.slice(0, 1));
      } else if (window.innerWidth <= TABLET_SIZE) {
        setPostList(originPostList.slice(0, 2));
      } else {
        setPostList(originPostList.slice(0, 3));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [originPostList]);

  useEffect(() => {
    getPostList();
  }, []);

  if (postList.length === 0) {
    return <h1>아직</h1>;
  }

  return (
    <main>
      <section>
        <TitleText title="베스트 게시물" />
        <div className={style.best_wrapper}>
          {postList.map((post) => (
            <BestPost key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section>
        <TitleText title="게시물" />
      </section>
    </main>
  );
};

export default Boards;
