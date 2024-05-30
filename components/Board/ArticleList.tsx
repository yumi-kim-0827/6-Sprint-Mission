// import styles from "@/components/Board/ArticleList.module.css";
// import { useEffect, useState } from "react";
// import { getArticle, List } from "@/app/apis/getArticle";
// import { formatDate } from "@/app/utils/formateDate";
// import Image from "next/image";
// import heartIcon from "@/app/assets/images/ic_heart.svg";
// import profileIcon from "@/app/assets/images/img_profile.svg";

// export default function ArticleList() {
//   const [articleList, setArticleList] = useState<List[]>([]);
//   const [page, setPage] = useState<number>(1);

//   useEffect(() => {
//     getArticle(page).then((data) => {
//       setArticleList(data.list);
//     });
//   }, [page]);

//   return (
//     <div>
//       <div></div>
//     </div>
//   );
// }
