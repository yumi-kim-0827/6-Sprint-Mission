import React from 'react';
import './style/DeleteButton.css';

type Props = {
  onClick: () => void;
  deleteItem: string;
};

export default function DeleteButton({ onClick, deleteItem }: Props) {
  return (
    <button className={`delete-btn button_${deleteItem}`} onClick={onClick}>
      <img src='/imgs/ic_X.png' alt='x' />
    </button>
  );
}
