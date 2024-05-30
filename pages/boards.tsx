import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import BestArticle from "@/components/BestArticle";
import axios from "@/lib/axios";
import Image from "next/image";
import search from "@/images/ic_search.png";
import ArrowDown from "@/images/arrow_down.svg";
import Article from "@/components/Article";

interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  writer: {
    id: number;
    nickname: string;
  };
}
interface OptionsContainerProps {
  isOpen: boolean;
}
export default function Boards() {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");

  async function getArticles() {
    const res = await axios.get(`/articles`);
    console.log("res", res);
    const nextArticles: Article[] = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  const handleOrderChange = (selectedOrder: string) => {
    setOrder(selectedOrder);
    setIsOpen(false); // Close dropdown after selecting an option
  };
  const filteredArticles = articles
    ?.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (order === "recent") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return b.likeCount - a.likeCount;
      }
    });
  return (
    <>
      <Header />
      <Container>
        <Title>베스트 게시글</Title>
        <BestSection>
          {articles ? <BestArticle articles={articles} /> : <p>Loading...</p>}
        </BestSection>
        <div style={{ display: "flex" }}>
          <Title>게시글</Title>
          <CreateButton>글쓰기</CreateButton>
        </div>
        <div style={{ display: "flex" }}>
          <Search>
            <Image
              src={search}
              alt="검색"
              style={{
                position: "relative",
                top: "10px",
                left: "40px",
                width: "24px",
                height: "24px",
              }}
            />
            <SearchInput
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
          <CustomSelect>
            <SelectButton onClick={() => setIsOpen(!isOpen)}>
              <Order>{order === "recent" ? "최신순" : "좋아요순"}</Order>
              <ArrowDown />
            </SelectButton>
            <OptionsContainer isOpen={isOpen}>
              <Option onClick={() => handleOrderChange("recent")}>
                최신순
              </Option>
              <Option onClick={() => handleOrderChange("like")}>
                좋아요순
              </Option>
            </OptionsContainer>
          </CustomSelect>
        </div>

        {filteredArticles ? (
          <Article articles={filteredArticles} />
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
`;
const Title = styled.h2`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #111827;
  margin: 30px 0;
`;
const BestSection = styled.div`
  display: flex;
  gap: 20px;
`;
const CreateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 23px;
  gap: 10px;
  width: 88px;
  height: 42px;
  margin: 30px 0 30px auto;
  background: #3692ff;
  border: none;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
const Search = styled.div`
  display: flex;
  margin: 0 auto 0 -25px;
`;
const SearchInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 20px 9px 46px;
  gap: 10px;
  border: none;
  width: 1050px;
  height: 42px;
  background: #f3f4f6;
  border-radius: 12px;
  color: black;
`;

const CustomSelect = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectButton = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 0px;
  gap: 10px;
  width: 130px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1f2937;
`;

const OptionsContainer = styled.div<OptionsContainerProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  z-index: 1;
  width: 130px;
  height: 84px;
  background: #ffffff;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #e5e7eb;
  border-radius: 12px 12px 12px 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #1f2937;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 42px;
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #ddd;
  }
`;
const Arrow = styled.img`
  width: 24px;
  margin: -2px 0px 0 0px;
`;
const Order = styled.div`
  margin: 0 0px 0 20px;
  width: 60px;
`;
