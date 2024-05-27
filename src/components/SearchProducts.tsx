import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SearchProductsProps {
  searchProduct: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSortOrder: (order: "newest" | "favorite") => void;
  sortOrder: "newest" | "favorite";
}

const SearchContainer: React.FC<SearchProductsProps> = ({
  searchProduct,
  handleSearch,
  handleSortOrder,
  sortOrder,
}) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortOrder);

  const navigateToItemsPage = () => {
    navigate("/additem");
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (value: "newest" | "favorite") => {
    setSelectedOption(value);
    handleSortOrder(value);
    setIsDropdownOpen(false);
  };

  return (
    <SearchContainerWrapper>
      <SearchContainers>
        <SearchInput
          type="text"
          placeholder="🔍 상품을 검색해주세요"
          value={searchProduct}
          onChange={handleSearch}
        />
      </SearchContainers>
      <ButtonProduct onClick={navigateToItemsPage}>상품 등록하기</ButtonProduct>
      <DropdownWrapper onClick={toggleDropdown}>
        {selectedOption === "newest" ? "최신순" : "좋아요순"} ▼
        {isDropdownOpen && (
          <DropdownList>
            <DropdownOption onClick={() => handleOptionClick("newest")}>
              최신순
            </DropdownOption>
            <DropdownOption onClick={() => handleOptionClick("favorite")}>
              좋아요순
            </DropdownOption>
          </DropdownList>
        )}
      </DropdownWrapper>
    </SearchContainerWrapper>
  );
};

const SearchContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  // width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchInput = styled.input`
  display: flex;
  padding: 0.5rem;
  border: 1px solid #3692ff;
  border-radius: 4px;
  margin-right: 1rem;
`;

const SearchContainers = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DropdownWrapper = styled.div`
  width: 120px;
  height: 45px;
  padding: 12px 20px 2px 12px;
  border-radius: 12px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const DropdownList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100px;
  background-color: white;
  border: 1px solid #ccc;
  margin-top: 10px;
  border-radius: 5px;
`;

const DropdownOption = styled.div`
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ButtonProduct = styled.button`
  padding: 10px 17px;
  background-color: #3692ff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;
`;

export default SearchContainer;
