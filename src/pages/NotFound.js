import "./NotFound.css";

import TopNavigation from "../components/TopNavigation";

const NotFound = () => {
  return (
    <>
      <TopNavigation />
      <main className="wrong_page_container">잘못된 페이지입니다.</main>
    </>
  );
};

export default NotFound;
