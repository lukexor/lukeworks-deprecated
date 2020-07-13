import React from "react";
import styled from "styled-components";
import { H1, H2 } from "./Styles";

interface Props {
  name: string;
  position: string;
  summary: string;
}

const Header = ({ name, position, summary }: Props) => {
  return (
    <header>
      <StyledSection>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </StyledSection>
      <StyledP>{summary}</StyledP>
    </header>
  );
};

const StyledSection = styled.section`
  float: left;
  height: 7em;
  width: 50%;
`;

const Name = styled(H1)`
  font-size: 2.6em;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Position = styled(H2)`
  font-size: 1.6em;
  font-style: italic;
  margin-top: 0;
`;

const StyledP = styled.p`
  text-align: justify;
`;

export default Header;
