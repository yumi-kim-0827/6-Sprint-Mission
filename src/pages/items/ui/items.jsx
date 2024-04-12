import { useState, useEffect } from "react";
import { getDatum } from "../../../shared/api/api.jsx";
import { Header } from "../../../widgets/header/index.jsx";
import { BestItemList } from "../../../widgets/BestItemList/index.jsx";
import "./items.scss";

export const Items = ({ isImageLogo }) => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [offset, setOffSet] = useState(0);

  const handleRecentClick = () => setOrder("recent");

  const handleFavoriteClick = () => setOrder("favorite");

  const handleload = async (options) => {
    try {
      setIsError(null);
      setIsLoading(true);
      const newItems = await getDatum(options);
      setItems(newItems);
      if (options.offset === 0) {
        setItems();
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleload({ page: 1 });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__content">
          <BestItemList />
        </div>
      </main>
    </>
  );
};
