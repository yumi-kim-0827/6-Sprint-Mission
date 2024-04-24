import React from "react";
import styled from "styled-components";

import BaseButton from "./BaseButton";
import BaseIcon from "./BaseIcon";

const ButtonWithIcon = ({ children, src, className }) => {
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
