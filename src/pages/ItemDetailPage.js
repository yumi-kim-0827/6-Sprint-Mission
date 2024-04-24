import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../services/api";
import styled from "styled-components";
import ItemDetail from "../components/ItemDetail";

const DetailContainer = styled.section`
  display: flex;
  gap: 24px;
  width: 100%;
  height: 486px;
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
          <ItemDetail item={item} />
        </DetailContainer>
      </main>
    </>
  );
}
