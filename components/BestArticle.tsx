import BestBadge from "@/public/bestbadge.svg";
import { ArticleType } from "@/types/type";
import Image from "next/image";

interface BestArticleProps {
  article: ArticleType;
}

interface BestArticleListProps {
  //게시글 목록
  articleList: ArticleType[];
}

function BestArticle({ article }: BestArticleProps) {
  const date = new Date(article.updatedAt).getDate();
  const month = new Date(article.updatedAt).getMonth() + 1;
  const year = new Date(article.updatedAt).getFullYear();
  const createdDate = `${year}. ${month}. ${date}`;

  return (
    <>
      <Image src={BestBadge} alt="Best Badge" />
      <div>{article.title}</div>
      <div>{article.image}</div>
      <div>{article.writer.nickname}</div>
      <div>{article.writer.id}</div>
      <div>{article.likeCount}</div>
      <div>{createdDate}</div>
    </>
  );
}

export default function BestArticleList({ articleList }: BestArticleListProps) {
  return (
    <div>
      {articleList.map((article) => (
        <BestArticle key={article.id} article={article} />
      ))}
    </div>
  );
}
