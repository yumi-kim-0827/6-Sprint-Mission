import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem, getItemComments } from "services/api";
import styled from "styled-components";
import ItemDetail from "components/ItemDetailPage/ItemDetail";
import ItemComments from "components/ItemDetailPage/ItemComments";
import Item from "types/Item";
import Comment from "types/comment";

export default function ItemDetailPage() {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<Item>({} as Item);
  const [comments, setComments] = useState<Comment[]>([]);
  const [limit, setLimit] = useState<number>(10); // 페이지 당 댓글 수

  const handleLoadItem = async () => {
    if (!itemId) return;
    const itemDetail = await getItem(itemId);
    setItem(itemDetail);
  };

  const handleLoadComments = async () => {
    if (!itemId) return;
    const { list } = await getItemComments(itemId, limit);
    setComments(list);
  };

  useEffect(() => {
    handleLoadItem();
    handleLoadComments();
  }, [itemId]);

  return (
    <>
      <main>
        <DetailContainer>
          <ItemDetail item={item} />
        </DetailContainer>
        <ItemComments comments={comments} />
      </main>
    </>
  );
}

const DetailContainer = styled.section`
  display: flex;
  gap: 24px;
  width: 100%;
  // height: 486px;

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
  }
`;
