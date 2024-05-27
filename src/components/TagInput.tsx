import React, { useState, KeyboardEvent, ChangeEvent, SetStateAction, Dispatch } from 'react';
import DeleteButton from './DeleteButton';
import './style/TagInput.css';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  name: string;
  tagList: string[];
  setTagList: Dispatch<SetStateAction<string[]>>;
};

export default function TagInput({ name, tagList, setTagList }: Props) {
  const [tag, setTag] = useState('');
  const uuid = uuidv4();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (tag.trim() !== '' && e.key === 'Enter') {
      if (e.nativeEvent.isComposing === false) {
        setTagList([tag, ...tagList]);
        e.preventDefault();
        setTag('');
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const handleDeleteClick = (tagValue: string) => {
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
        {tagList.map(tagItem => {
          return (
            <div key={uuid} className='tag'>
              <p className='tag__text'>{tagItem}</p>
              <DeleteButton deleteItem={'tag'} onClick={() => handleDeleteClick(tagItem)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
