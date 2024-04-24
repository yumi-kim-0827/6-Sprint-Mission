export default function ItemComments({ comments }) {
  return (
    <>
      <section>
        {comments &&
          comments.map((comment) => {
            return <p key={comment.id}>{comment.content}</p>;
          })}
      </section>
    </>
  );
}
