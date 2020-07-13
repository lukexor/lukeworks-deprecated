import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const BaseLinkStyle = css`
  text-decoration: none;
  color: #a28351;
  position: relative;
  transition: all 0.25s linear;
  &:hover {
    color: #000;
  }
  &:hover:after {
    opacity: 1;
    bottom: 0;
  }
  &:after {
    content: "";
    display: block;
    background: #a28351;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -0.2em;
    left: 0;
    opacity: 0;
    transition: all 0.25s linear;
  }
`;

const StyledLink = styled(Link)`
  ${BaseLinkStyle}
`;
const StyledNavLink = styled(NavLink)`
  ${BaseLinkStyle}
`;
const StyledA = styled.a`
  ${BaseLinkStyle}
`;

export { StyledLink, StyledNavLink, StyledA };
