import React from "react";
import styled from "styled-components";

interface BaseIconProps {
  className?: string;
  src: string;
}

const BaseIcon = ({ className, src }: BaseIconProps) => {
  return <Icon className={className} src={src} />;
};

const Icon = styled.i<{ src: string }>`
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export default BaseIcon;
