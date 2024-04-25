// import React, { useEffect, useState } from "react";
// import AnitaMaxWynn from "../../assets/maxwynn.png";
// import getItems from "../../api/getItems";

// const BASE_URL = "https://panda-market-api.vercel.app/products/";

// function ItemDetails() {
//   const [item, setItem] = useState([]);
//   const itemID = "14";

//   const handleLoadItemInfo = async () => {
//     const { data } = await getItems([BASE_URL, itemID]);
//     setItem(data);
//   };

//   useEffect(() => {
//     handleLoadItemInfo();
//   }, []);

//   return (
//     <>
//       <div>
//         <img src={item.images} alt="제품이미지" />
//       </div>
//       <div>{item.name}</div>
//       <div>{item.price}</div>
//       <div>{item.description}</div>
//       <div>{item.tags}</div>
//       <div>{item.favoriteCount}</div>
//       <div>댓글입력폼</div>
//       <div>댓글리스트</div>
//       <div>목록으로돌아가기</div>
//     </>
//   );
// }

// export default ItemDetails;
