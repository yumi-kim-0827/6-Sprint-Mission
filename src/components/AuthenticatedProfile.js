import styled from "styled-components";

import userIcon from "../assets/icons/ic_user.svg";
import "../css/AuthenticatedProfile.css";

const AuthenticatedProfileButton = styled.button`
  height: 40px;
  background-color: var(--white);
  cursor: pointer;
`;

function AuthenticatedProfile() {
  return (
    <AuthenticatedProfileButton type="button">
      <img src={userIcon} alt="userIcon"></img>
    </AuthenticatedProfileButton>
  );
}

export default AuthenticatedProfile;
