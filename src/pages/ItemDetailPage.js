import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../services/api";
import styled from "styled-components";
import ItemDetail from "../components/ItemDetail";

const DetailContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: 486px;

  img {
    aspect-ratio: 1;
  }
`;

export default function ItemDetailPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  const handLoadItem = async () => {
    const itemDetail = await getItem(itemId);
    setItem(itemDetail);
  };

  useEffect(() => {
    handLoadItem(itemId);
  }, [itemId]);

  return (
    <>
      <main>
        <DetailContainer>
          <img src={item.images} alt="상품 사진" />
          <ItemDetail item={item} />
        </DetailContainer>
      </main>
    </>
  );
}
