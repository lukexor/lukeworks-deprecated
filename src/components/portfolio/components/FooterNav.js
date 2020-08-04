import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const FooterNav = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

FooterNav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default FooterNav;
