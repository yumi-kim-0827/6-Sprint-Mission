import React from 'react';
import styled from 'styled-components';

export default function Avatar({ img }) {
  return (
    <AvatarImg>
      <img src={img} alt='프로필 이미지' />
    </AvatarImg>
  );
}

const AvatarImg = styled.div`
  width: 40px;
  height: 40px;

  & img {
    width: 100%;
  }
`;
