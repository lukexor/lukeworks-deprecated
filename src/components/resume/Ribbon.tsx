import React from "react";
import styled from "styled-components";

const Ribbon = () => {
  return <StyledImg src="/images/ribbon.png" alt="" />;
};

const StyledImg = styled.img`
  float: left;
  margin: 0.2em 0 0 -8%;
  padding: 0;
  width: 30px;
`;

export default Ribbon;
