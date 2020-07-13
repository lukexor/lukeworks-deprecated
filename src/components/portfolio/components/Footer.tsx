import React from "react";
import FooterNav from "./FooterNav";
import { StyledA } from "./StyledLinks";
import { ILink } from "../../Portfolio";

interface Props {
  links: ILink[];
}

const Footer = (props: Props) => {
  return (
    <footer>
      <p>
        &copy; Copyright {new Date().getFullYear()} -{" "}
        <StyledA
          href="https://linkedin.com/in/lucaspetherbridge"
          title="LinkedIn"
        >
          Lucas Petherbridge
        </StyledA>
        . All rights reserved.
      </p>
      <FooterNav {...props} />
    </footer>
  );
};

export default Footer;
