import React, { useState, useRef, useReducer } from 'react';
import DeleteButton from './DeleteButton';
import './style/TagInput.css';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];

    case 'DELETE':
      return state.filter(item => item.id !== action.targetId);
    default:
      return state;
  }
}

export default function TagInput({ name, value, onChange }) {
  const [tags, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = content => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
      },
    });
  };

  const onDelete = targetId => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  return (
    <div>
      <label htmlFor=''>
        태그
        <input name={name} value={value} type='text' placeholder='태그를 입력해주세요' onChange={onChange} />
      </label>
      <div className='tag__container'>
        {tags.map(tag => {
          return (
            <div key={tag.id} {...tag} className='tag'>
              <span className='tag__text'>{value}</span>
              <DeleteButton deleteItem={'tag'} onClick={() => onDelete(tag.id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
