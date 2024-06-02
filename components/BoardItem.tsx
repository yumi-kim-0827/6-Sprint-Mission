export default function BoardItem({article = ''}) {
  return (
    <>
      <h2>{article?.title}</h2>
      <h4>{article?.content}</h4>
    </>
  );
}
