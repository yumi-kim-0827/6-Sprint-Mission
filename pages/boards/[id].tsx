import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import instance from '@/lib/axios';
import { ListProps } from '@/lib/getArticles';
import Head from 'next/head';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

interface Props {
  article: ListProps | null;
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const { id } = context.params as { id: string };
  let article: ListProps | null = null;

  try {
    const res = await instance.get(`/articles/${id}`);
    article = res.data ?? null;
  } catch (error) {
    console.error('Failed to fetch article:', error);
  }

  return {
    props: {
      article,
    },
  };
}

interface Comment {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

interface Writer {
  image: string;
  nickname: string;
  id: number;
}

const LIMIT = 5;

export default function Article({ article }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const router = useRouter();
  const { id } = router.query;

  const getComments = async (targetId: string[] | string) => {
    const query = `limit=${LIMIT}`;
    const res = await instance.get(`/articles/${targetId}/comments?${query}`);
    const nextComments = res.data.list ?? [];
    setComments(nextComments);
  };

  useEffect(() => {
    if (!id) return;
    getComments(id);
  }, [id]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) return null;
  const { content, createdAt, image, likeCount, title, writer } = article;
  return (
    <div>
      <Head>
        <title>자유게시판 | 판다마켓</title>
      </Head>
      {title}
      {content}
      {image}
      {comments.map(comment => (
        <div key={comment.id}>{comment.content}</div>
      ))}
      {/* <Comments /> */}
    </div>
  );
}
