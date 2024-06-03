import AllArticles from "./AllArticles";
import { Article } from "@/types/article";

interface ArticleListProp {
  articleList: Article[];
}

export default function ArticleList({ articleList }: ArticleListProp) {
  return (
    <div>
      {articleList.map((article) => {
        return <AllArticles key={article.id} article={article} />;
      })}
    </div>
  );
}
