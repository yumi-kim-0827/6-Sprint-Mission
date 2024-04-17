import React from "react";
import styled from "styled-components";

import XIcon from "../assets/icon/X.svg";
import activeXIcon from "../assets/icon/activeX.svg";

const DeleteIconButton = ({ onClick }) => {
  return (
    <DeleteButtonEl onClick={onClick}>
      <i className="x-icon"></i>
      <i className="active-x-icon"></i>
    </DeleteButtonEl>
  );
};

const DeleteButtonEl = styled.button`
  i {
    display: block;
    width: 22px;
    height: 24px;
  }

  i.x-icon {
    background-image: url(${XIcon});
  }
  i.active-x-icon {
    display: none;
    background-image: url(${activeXIcon});
  }

  &:hover,
  &:focus {
    i.x-icon {
      display: none;
    }
    i.active-x-icon {
      display: block;
    }
  }
`;

export default DeleteIconButton;
