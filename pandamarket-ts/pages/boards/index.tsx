import React, { useEffect, useState } from "react";
import BestPosts from "./components/BestPosts";
import AllPost from "./components/AllPost";
const index = () => {
  return (
    <>
      <BestPosts />
      <AllPost />
    </>
  );
};

export default index;
