import React from 'react';
import Profile from './Profile';

export default function Comment({ text, time }) {
  return (
    <div>
      <p>댓글 {text}</p>
      <img src='' alt='드롭다운 메뉴' />
      <Profile>{time}</Profile>
      <div>horizontal line</div>
    </div>
  );
}
