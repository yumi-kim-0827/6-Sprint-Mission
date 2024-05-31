import IconProfile from '@/public/images/icon-profile.svg';

type Article = {
  id: number;
  title: string;
  writer: {
    nickname: string;
  };
  image?: string;
  likeCount: number;
};

interface ArticleProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleProps) {
  return (
    <ul>
      {articles?.map((article) => (
        <li key={article.id}>
          <div>
            <h3>{article.title}</h3>
            <div>
              <IconProfile />
              <span>{article.writer.nickname}</span>
              <span>작성 날짜</span>
            </div>
            <div>
              {article.image ? <img src={article.image} /> : null}
              <span>♡ {article.likeCount}+</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
