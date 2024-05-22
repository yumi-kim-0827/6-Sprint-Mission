import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailProduct, getProductComment } from "../../apis/api";
import "./DetailItem.css";
import ShowDetail from "../../components/show-detail";
import HandleComment from "../../components/handle-comment";
import returnlist from "../../assets/return.png";

const DetailItem = (): JSX.Element => {
  const { Id } = useParams();

  interface DetailItem {
    images: string;
    name: string;
    price: number;
    description: string;
    tags: string[];
    favoriteCount: number;
  }

  const [detailItem, setDetailItem] = useState<DetailItem>();
  const [comments, setComments] = useState<string[]>([]);

  const handleDetailsLoad = async (Id: string | undefined) => {
    const [itemsData, commentsData] = await Promise.all([getDetailProduct(Id), getProductComment(Id)]);
    setDetailItem(itemsData);
    setComments(commentsData);
  };

  useEffect(() => {
    handleDetailsLoad(Id);
  }, [Id]);

  return (
    <>
      <div className="show-detail-page">
        {detailItem !== undefined && <ShowDetail {...detailItem} />}
        <div className="underline"></div>
      </div>
      <HandleComment comments={comments} />
      <div className="return-to-items-btn-container">
        <Link to={"/Items"}>
          <button className="return-to-items-btn-container__btn">
            <span>목록으로 돌아가기</span>
            <img src={returnlist} alt="목록으로 돌아가기 버튼" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default DetailItem;
