import React from 'react';

export default function Avatar({ img }) {
  return (
    <div>
      <img src={img} alt='프로필 이미지' />
    </div>
  );
}
