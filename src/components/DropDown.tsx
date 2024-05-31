import { useState } from 'react';
import { SortBy } from '../types/type';
import styled from 'styled-components';

interface DropDownProps {
  onSortOption: (sortOption: 'recent' | 'like') => void;
}

export default function DropDown({ onSortOption }: DropDownProps) {
  const sortOptions = ['최신순', '좋아요순'];
  const [sortOption, setSortOption] = useState<SortBy>('recent');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SortBy) => {
    setSortOption(option);
    onSortOption(option);
    setIsOpen(false);
  };

  return (
    <DropDownWrapper>
      <DrowDownButton onClick={() => setIsOpen(!isOpen)}>
        {sortOption === 'recent' ? '최신순' : '좋아요순'} ▼
      </DrowDownButton>
      {isOpen && (
        <DropDownMenu>
          {sortOptions.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option === '최신순' ? 'recent' : 'like')}>
              {option}
            </div>
          ))}
        </DropDownMenu>
      )}
    </DropDownWrapper>
  );
}

const DropDownWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropDownStyles = styled.div`
  border-radius: 12px;
  border: 1px solid var(--gray-200);
  background-color: #fff;
`;

const DrowDownButton = styled(DropDownStyles)`
  padding: 9px 20px;
`;

const DropDownMenu = styled(DropDownStyles)`
  position: absolute;
  padding: 9px;
  width: 100%;
`;
