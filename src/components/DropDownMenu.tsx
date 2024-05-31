import { useState } from 'react';

export default function DropDownMenu() {
  const sortOptions = ['최신순', '좋아요순'];
  const [sortOption, setSortOption] = useState('최신순');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{sortOption} ▼</div>
      {isOpen && (
        <div>
          {sortOptions.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
