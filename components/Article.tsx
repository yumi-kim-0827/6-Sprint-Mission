import { ArticleType } from "@/types/type";
import Image from "next/image";

interface ArticleProps {
  //게시글 내부
  article: ArticleType;
}

interface ArticleListProps {
  //게시글 목록
  articleList: ArticleType[];
}

function Article({ article }: ArticleProps) {
  const date = new Date(article.updatedAt).getDate();
  const month = new Date(article.updatedAt).getMonth() + 1;
  const year = new Date(article.updatedAt).getFullYear();
  const createdDate = `${year}. ${month}. ${date}`;
  return (
    <>
      <div>리뷰 표시</div>
      <div>{article.title}</div>
      {article.image && (
        <Image
          src={article.image}
          alt={`${article.title} 글 이미지`}
          width={48}
          height={44}
        />
      )}

      <div>{article.writer.nickname}</div>
      <div>{article.writer.id}</div>
      <div>{article.likeCount}</div>
      <div>{createdDate}</div>
    </>
  );
}

export default function ArticleList({ articleList }: ArticleListProps) {
  return (
    <div>
      {articleList.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
