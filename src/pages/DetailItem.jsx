import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailProduct, getProductComment } from "../apis/api";
import "./DetailItem.css";
import ShowDetail from "../components/ShowDetail";
import HandleComment from "../components/HandleComment";
import returnlist from "../assets/return.png";

const DetailItem = () => {
  const { Id } = useParams();
  const [detailItem, setDetailItem] = useState();
  const [comments, setComments] = useState([]);

  const handleDetailsLoad = async (Id) => {
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
