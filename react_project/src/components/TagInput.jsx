import React, { useState } from 'react'
import CloseIcon from '../assets/ic_x.svg'
import styles from '../styles/TagInput.module.css';

function TagInput({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState('');

  const onPressEnter = (e) => {
    if (e.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (e.key === 'Enter' && inputString) {
      e.preventDefault();
      onAddTag(inputString);
      setInput('');
    }
  };

  return (
    <div className={styles.tagsInput_container}>
      <label className={styles.tagsLabel} htmlFor="tags">태그</label>
      <input 
        className={styles.tagsInput}
        id='tags'
        type="text" 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={onPressEnter}
        placeholder='태그를 입력해 주세요'
      />

      {tags.length > 0 && (
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <div className={styles.tagContent} key={`tag_${tag}`}>
              <span className={styles.tagText}>{tag}</span>

              <button className={styles.tagDeleteButton} onClick={() => onRemoveTag(tag)}>
                <img className={styles.tagDeleteImg} src={CloseIcon} alt="삭제 버튼" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TagInput