import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Lucas Petherbridge</Link>
      </h1>
      <h2>Software Engineer. Designer. Thinker.</h2>
    </header>
  );
};

export default Header;
