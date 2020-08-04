import React from "react";
import PropTypes from "prop-types";

const Header = ({ name, position, summary }) => {
  return (
    <header>
      <section className="header">
        <h1 className="name">{name}</h1>
        <h2 className="position">{position}</h2>
      </section>
      <summary>
        <p>{summary}</p>
      </summary>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Header;
