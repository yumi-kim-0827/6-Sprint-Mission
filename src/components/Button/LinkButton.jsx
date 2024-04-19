import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  const { children, to } = props;

  return <Buton to={to}>{children}</Buton>;
};

const Buton = styled(Link)`
  padding: 1.2rem 2.3rem;
  border-radius: 8px;
  background-color: var(--blue);
  font-size: var(--font-16);
  font-weight: 600;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.1;
`;

export default LinkButton;
