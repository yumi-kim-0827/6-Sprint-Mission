import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import './style/TagInput.css';
export default function TagInput({ name, tagList, setTagList }) {
  const [tag, setTag] = useState('');

  const handleKeyUp = e => {
    if (tag.trim() !== '' && e.key === 'Enter') {
      setTagList([tag, ...tagList]);
      e.preventDefault();
      setTag('');
    }
  };

  const handleInputChange = e => {
    setTag(e.target.value);
  };

  const handleDeleteClick = tagValue => {
    const remainTags = tagList.filter(tag => tag !== tagValue);
    setTagList(remainTags);
  };

  return (
    <div>
      <label htmlFor=''>
        태그
        <input
          name={name}
          value={tag}
          type='text'
          placeholder='태그를 입력해주세요'
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
      </label>
      <div className='tag__container'>
        {tagList.map((tagItem, index) => {
          return (
            <div key={index} className='tag'>
              <p className='tag__text'>{tagItem}</p>
              <DeleteButton deleteItem={'tag'} onClick={() => handleDeleteClick(tagItem)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
