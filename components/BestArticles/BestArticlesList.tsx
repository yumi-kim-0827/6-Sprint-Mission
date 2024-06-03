import { Article } from "@/types/article";
import BestArticles from "./BestArticles";

interface BestArticlesListProp {
  bestArticlesList: Article[];
}

export default function BestArticlesList({
  bestArticlesList,
}: BestArticlesListProp) {
  return (
    <div>
      {bestArticlesList.map((article) => {
        return <BestArticles key={article.id} article={article} />;
      })}
    </div>
  );
}
