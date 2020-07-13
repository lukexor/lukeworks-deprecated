import React from "react";
import { StyledNavLink } from "./StyledLinks";
import { ILink } from "components/Portfolio";

interface Props {
  links: ILink[];
}

const SiteNav = ({ links }: Props) => {
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

export default SiteNav;
