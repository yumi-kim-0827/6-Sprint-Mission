import { createContext, useContext, useState } from 'react';

const ImageUrlContext = createContext();

export const ImageUrlProvider = ({ defaultValue = null, children }) => {
  const [imageUrl, setImageUrl] = useState(defaultValue);

  return (
    <ImageUrlContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageUrlContext.Provider>
  );
};

// imgUrl 값 가져오기
export const useImageUrl = () => {
  const context = useContext(ImageUrlContext);

  if (!context) {
    throw new Error('반드시 ImgUrlProvider 안에서 사용1');
  }

  return context.imageUrl;
};

// setImageUrl 값 가져오기
export const useSetImageUrl = () => {
  const context = useContext(ImageUrlContext);

  if (!context) {
    throw new Error('반드시 ImgUrlProvider 안에서 사용2');
  }

  return context.setImageUrl;
};
