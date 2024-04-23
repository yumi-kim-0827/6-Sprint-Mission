import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../api";
import "./DetailItem.css";
import ShowDetail from "../components/ShowDetail";
import HandleComment from "../components/HandleComment";

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
    </>
  );
};

export default DetailItem;
