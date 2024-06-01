import { Article } from "@/shared/model";

interface Props {
  article: Article;
}

export function BestPostCard({ article }: Props) {
  return (
    <section>
      {article.content}
      {article.writer.nickname}
      {article.updatedAt}
      {article.image}
      {article.title}
    </section>
  );
}
