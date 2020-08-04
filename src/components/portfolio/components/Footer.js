import React from "react";
import PropTypes from "prop-types";
import FooterNav from "./FooterNav";

const Footer = (props) => {
  return (
    <footer>
      <p>
        &copy; Copyright {new Date().getFullYear()} -{" "}
        <a href="https://linkedin.com/in/lucaspetherbridge" title="LinkedIn">
          Lucas Petherbridge
        </a>
        . All rights reserved.
      </p>
      <FooterNav {...props} />
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Footer;
