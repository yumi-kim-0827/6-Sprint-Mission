import { useState } from 'react';
import { SortBy } from '../types/type';

interface DropDownMenuProps {
  onSortOption: (sortOption: 'recent' | 'like') => void;
}

export default function DropDownMenu({ onSortOption }: DropDownMenuProps) {
  const sortOptions = ['최신순', '좋아요순'];
  const [sortOption, setSortOption] = useState<SortBy>('recent');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SortBy) => {
    setSortOption(option);
    onSortOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{sortOption === 'recent' ? '최신순' : '좋아요순'} ▼</div>
      {isOpen && (
        <div>
          {sortOptions.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option === '최신순' ? 'recent' : 'like')}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
