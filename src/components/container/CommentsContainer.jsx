import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getComments } from "../../api/api";
import Comments from "../ui/Comments";

function CommentsContainer(props) {
  const [comments, setComments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();

  const loadComments = async (productId, limit) => {
    try {
      const response = await getComments({ productId, limit });
      setComments(response);
    } catch (error) {
      if (error.name === "TypeError") {
        setErrorMessage("네트워크를 확인하세요");
      } else if (error.name === "HttpError") {
        setErrorMessage(error.status);
      }
    }
  };

  useEffect(() => {
    loadComments(id, 3);
    if (isAdded) {
      loadComments(id, 3);
      setIsAdded(false);
    }
  }, [isAdded]);

  return (
    !errorMessage && <Comments comments={comments} setIsAdded={setIsAdded} />
  );
}

export default CommentsContainer;
