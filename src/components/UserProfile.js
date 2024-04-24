import React from "react";
import styled from "styled-components";
import SquareImage from "./SquareImage";

import DefaultProfileImage from "../assets/icon/profile.svg";

function getTimeAgo(updatedAt) {
  const currentTime = new Date();
  const updateTime = new Date(updatedAt);

  const differenceInMillis = currentTime - updateTime;
  const differenceInHours = differenceInMillis / (1000 * 60 * 60);

  if (differenceInHours < 1) {
    return "방금 전";
  } else if (differenceInHours < 24) {
    return `${Math.floor(differenceInHours)}시간 전`;
  } else {
    const days = Math.floor(differenceInHours / 24);
    return `${days}일 전`;
  }
}

const UserProfile = ({ image, nickname = "똑똑한 판다", updatedAt }) => {
  const commentTimeAgo = getTimeAgo(updatedAt);

  return (
    <UserProfileWrapper>
      <UserProfileImg
        src={image || DefaultProfileImage}
        alt={`${nickname}의 프로필 이미지`}
      />
      <div>
        <UserProfileName>{nickname}</UserProfileName>
        <UserProfileDescription>{commentTimeAgo}</UserProfileDescription>
      </div>
    </UserProfileWrapper>
  );
};

const UserProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const UserProfileImg = styled(SquareImage)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserProfileName = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #4b5563;
`;

const UserProfileDescription = styled.div`
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  color: #9ca3af;
`;

export default UserProfile;
