import styled from "styled-components";
import XIcon from "../assets/icon/X.svg?react";
import ActiveXIcon from "../assets/icon/activeX.svg?react";

interface DeleteButtonProps {
  onClick: React.MouseEventHandler;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <DeleteButtonEl onClick={onClick} type="button">
      <XIcon />
      <ActiveXIcon className="active" />
    </DeleteButtonEl>
  );
};

const DeleteButtonEl = styled.button`
  display: block;
  width: 22px;
  height: 24px;

  .active {
    display: none;
  }

  &:hover,
  &:focus {
    svg {
      display: none;
    }
    svg.active {
      display: block;
    }
  }
`;

export default DeleteButton;
