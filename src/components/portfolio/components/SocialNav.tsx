import React from "react";
import { StyledA } from "./StyledLinks";
import { ILink } from "../../Portfolio";

interface Props {
  links: ILink[];
}

const SocialNav = ({ links }: Props) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <StyledA href={link.path} title={link.label}>
              {link.label}
            </StyledA>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialNav;
