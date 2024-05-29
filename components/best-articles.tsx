import BestArticleComponent from './best-article-component';

export default function BestArticles() {
  return (
    <div className='flex gap-6 md:gap-4'>
      <BestArticleComponent />
      <BestArticleComponent />
      <BestArticleComponent />
    </div>
  );
}
