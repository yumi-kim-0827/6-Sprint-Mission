import React from "react";
import { GetStaticProps } from "next";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";

interface List {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

interface BoardsProps {
  products: List[];
}

const Boards: React.FC<BoardsProps> = ({ products }) => {
  return (
    <div>
      <h1>자유게시판</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>가격: {product.price}원</p>
            <p>좋아요: {product.favoriteCount}</p>
            <p>작성일: {new Date(product.createdAt).toLocaleDateString()}</p>
            <p>작성자: {product.ownerId}</p>
            <div>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              ))}
            </div>
            <div>태그: {product.tags.join(", ")}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axiosInstance.get(
    "/products?page=1&pageSize=10&orderBy=recent"
  );
  const products: List[] = response.data.list;

  return {
    props: {
      products,
    },
    // 60초마다 페이지를 재생성합니다.
    revalidate: 60,
  };
};

export default Boards;
