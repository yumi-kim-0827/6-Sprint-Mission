import { useEffect, useState } from "react";
import getItems from "../../api/getItems";

const COMMENTS_MAX = 5;

function ItemDetailsComments({ itemID }) {
  const [comments, setComments] = useState([]);
  const queryData = `products/${itemID}/comments?limit=${COMMENTS_MAX}`;

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const data = await getItems(queryData);
        if (data && data.list) {
          setComments(data.list);
          console.log(comments);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleLoad();
  }, []);

  return (
    <section>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.writer.nickname}
              <br />
              {comment.writer.image}
              <br />
              {comment.content}
              <br />
              {comment.createdAt}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ItemDetailsComments;
