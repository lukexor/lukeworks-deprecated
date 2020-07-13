import React from "react";
import { StyledLink } from "./StyledLinks";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <H1>
        <H1Link to="/">Lucas Petherbridge</H1Link>
      </H1>
      <H2>Software Engineer. Designer. Thinker.</H2>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 40px 0;
`;

const H1 = styled.h1`
  letter-spacing: 0.1em;
  font-size: 3.5rem;
  font-weight: 900;
  color: #182e4f;

  @media screen and (min-width: 700px) {
    &:before {
      visibility: visible;
      content: "Luke Works";
      display: block;
      position: fixed;
      top: -0.4em;
      bottom: 0;
      right: 0;
      margin: auto;
      font-weight: 900;
      font-size: 45rem;
      color: rgba(0, 0, 0, 0.15);
      width: 100%;
      height: 2em;
      line-height: 1;
      transform: rotate(-90deg);
      mask-image: url(/images/denim-mask.png);
      z-index: -1000;
    }
  }
`;

const H1Link = styled(StyledLink)`
  color: #182e4f;
  transition: none;
  &:hover {
    text-decoration: none;
    color: #182e4f;
  }
  &:hover:after {
    content: none;
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  color: rgba(41, 78, 134, 0.5);
`;

export default Header;
