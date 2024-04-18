import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import './style/TagInput.css';
export default function TagInput({ name, tagList, setTagList }) {
  const [tag, setTag] = useState('');

  const handleKeyDown = e => {
    if (tag.trim() !== '' && e.key === 'Enter') {
      submitTagItem();
      setTag('');
    }
  };

  const handleInputChange = e => {
    setTag(e.target.value);
  };

  const submitTagItem = () => {
    setTagList([tag, ...tagList]);
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
          onKeyDown={handleKeyDown}
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
