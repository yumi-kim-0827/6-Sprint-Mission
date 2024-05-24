import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";
import BaseIcon from "./BaseIcon";

interface ButtonWithIconProps {
  children: React.ReactNode;
  className?: string;
  src: string;
}

const ButtonWithIcon = ({ children, src, className }: ButtonWithIconProps) => {
  return (
    <BaseButton className={className}>
      {children}
      <ButtonIcon src={src} />
    </BaseButton>
  );
};

const ButtonIcon = styled(BaseIcon)`
  margin-left: 10px;
`;

export default ButtonWithIcon;
