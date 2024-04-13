import { Header } from "../../../widgets/header/index.jsx";
import { BestItemList } from "../../../widgets/BestItemList/index.jsx";
import { ItemList } from "../../../widgets/ItemList/index.jsx";

import "./items.scss";

export const Items = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__content">
          <BestItemList />
          <ItemList />
        </div>
      </main>
    </>
  );
};
