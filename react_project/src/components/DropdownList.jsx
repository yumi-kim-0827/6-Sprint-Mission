import React from 'react';

function DropdownList({ onSortSelect }) {
  return (
    <div>
      <div onClick={() => onSortSelect('recent')}>
        최신순
      </div>
      <div onClick={() => onSortSelect('favorite')}>
        인기순
      </div>
    </div>
  );
};

export default DropdownList;