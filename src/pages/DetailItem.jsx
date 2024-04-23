import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailProduct } from "../api";
import "./DetailItem.css";
import ShowDetail from "../components/ShowDetail";
import HandleComment from "../components/HandleComment";
import returnlist from "../assets/return.png";

const DetailItem = () => {
  const { Id } = useParams();
  const [detailItem, setDetailItem] = useState();

  const handleDetailLoad = async (value) => {
    const item = await getDetailProduct(value);
    setDetailItem(item);
  };

  useEffect(() => {
    handleDetailLoad(Id);
  }, []);

  return (
    <>
      <div className="show-detail-page">{detailItem !== undefined && <ShowDetail {...detailItem} />}</div>
      <HandleComment />
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
