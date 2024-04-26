import React from "react";
import ItemDescription from "./ItemDescription";
import AddComments from "./AddComments";
import CommentsSection from "./CommentsSection";

const ItemDetail = () => {
  return (
    <div>
      <ItemDescription />
      <AddComments />
      <CommentsSection />
    </div>
  );
};

export default ItemDetail;
