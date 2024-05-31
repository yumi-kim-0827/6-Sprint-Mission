import Image from "next/image";
import { Article } from "@/types/article";
import Profile from "@/images/logo/profile.svg";
import Heart from "@/images/logo/Heart.svg";

interface ArticleProp {
  article: Article;
}

export default function AllArticles({ article }: ArticleProp) {
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
        <h2>{article.title}</h2>
        <div>
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
          <Image src={Profile} alt="프로필 이미지" width={24} height={24} />
        </div>
        <p>{article.writer.nickname}</p>
        <p>{formatDate(article.createdAt)}</p>
        <div>
          <Image src={Heart} alt="좋아요 아이콘" width={24} height={24} />
          <p>{article.likeCount}</p>
        </div>
      </div>
    </div>
  );
}
