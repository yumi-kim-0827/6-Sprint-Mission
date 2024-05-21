import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

interface Props {
  nickname: number;
  image: string;
  children: string;
}

export default function Profile({ image, nickname, children }: Props) {
  return (
    <ProfileContainer>
      <Avatar img={image} />
      <TextWrap>
        <Id>{nickname}</Id>
        {children}
      </TextWrap>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  gap: 4px;
`;

const Id = styled.div`
  color: #4b5563;
  font-size: 14px;
`;
