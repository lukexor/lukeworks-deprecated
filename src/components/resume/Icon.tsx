import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const Icon = (props: Props) => {
  return <StyledImg {...props} />;
};

const StyledImg = styled.img`
  width: 35px;
  height: 35px;
  float: left;
  margin: 5px 10px 5px 0;
`;

export default Icon;
