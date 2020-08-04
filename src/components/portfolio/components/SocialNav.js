import React from "react";
import PropTypes from "prop-types";

const SocialNav = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path} title={link.label}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SocialNav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default SocialNav;
