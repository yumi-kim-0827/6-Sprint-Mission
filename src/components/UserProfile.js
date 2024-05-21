import React from "react";
import styled from "styled-components";
import SquareImage from "./SquareImage";
import { getTimeAgo } from "../utils/utils";
import DefaultProfileImage from "../assets/icon/profile.svg";

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
