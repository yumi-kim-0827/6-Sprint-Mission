import { Article } from "@/types/article";
import medalIcon from "@/images/logo/medal.svg";
import Heart from "@/images/logo/Heart.svg";
import Image from "next/image";

interface BestsArticlesProps {
  article: Article;
}

export default function BestArticles({ article }: BestsArticlesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <div>
      <div>
        <Image src={medalIcon} alt="메달 아이콘" width={12} height={14} />
        <span>BEST</span>
      </div>
      <div>
        <h2>{article.title}</h2>
        {article.image && (
          <Image
            src={article.image}
            alt="게시글 이미지"
            width={48}
            height={44}
          />
        )}
      </div>
      <div>
        <p>{article.writer.nickname}</p>
        <div>
          <Image src={Heart} alt="좋아요 아이콘" width={16} height={16} />
          <p>{article.likeCount}</p>
        </div>
      </div>
      <div>
        <p>{formatDate(article.createdAt)}</p>
      </div>
    </div>
  );
}
