import React from "react";
import { StyledNavLink } from "./StyledLinks";
import { ILink } from "../../Portfolio";

interface Props {
  links: ILink[];
}

const FooterNav = ({ links }: Props) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <StyledNavLink to={link.path}>{link.label}</StyledNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
