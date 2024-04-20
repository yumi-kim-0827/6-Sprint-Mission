import React from 'react';
import './style/DeleteButton.css';

export default function DeleteButton({ onClick, deleteItem }) {
  return (
    <button className={`delete-btn button_${deleteItem}`} onClick={onClick}>
      <img src='/imgs/ic_X.png' alt='x' />
    </button>
  );
}
