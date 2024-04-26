import React, { useEffect, useState } from "react";
import getItems from "../../api/getItems";
import { formatCurrencyWon } from "../../utils/formatCurrencyWon";
import ItemDetailsComments from "./ItemDetailsComments";

function ItemDetails() {
  const [item, setItem] = useState({});
  const itemID = 9;
  const queryData = `products/${itemID}`;

  const handleLoadItemInfo = async () => {
    try {
      const item = await getItems(queryData);
      if (item) {
        setItem(item);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleLoadItemInfo();
  }, []);

  return (
    <>
      <div>
        <div>
          <img src={item.images} alt="제품이미지" />
        </div>
        <div>
          <div>{item.name}</div>
          <div>{formatCurrencyWon(item.price)}</div>
          <div>{item.description}</div>
          <div>{item.tags}</div>
          <div>{item.favoriteCount}</div>
        </div>
      </div>
      <div>
        <label htmlFor="inquiry">문의하기</label>
        <textarea
          className=""
          type="text"
          id="inquiry"
          //value={}
          name="inquiry"
          //onChange={}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고,
           불법 정보 유포시 모니터링 후 삭제될 수 있으며,
            이에 대한 민형사상 책임은 게시자에게 있습니다."
          required
        />
      </div>
      <div>
        <ItemDetailsComments itemID={itemID} />
      </div>
      <div>목록으로돌아가기</div>
    </>
  );
}

export default ItemDetails;
