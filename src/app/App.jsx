import "./App.css";
import { Items } from "../pages/items/index.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isImageLogo, setIsImageLogo] = useState(false);

  const headerMedia = () => {
    if (window.innerWidth <= 767) {
      setIsImageLogo(false);
    } else {
      setIsImageLogo(true);
    }
  };

  window.addEventListener("resize", headerMedia);

  useEffect(() => {
    headerMedia();
  }, []);

  return (
    <>
      <Items isImageLogo={isImageLogo} />
    </>
  );
}

export default App;
