import React from "react";
import PropTypes from "prop-types";
import Ribbon from "./Ribbon";

const Experience = ({ list }) => {
  return (
    <section>
      <Ribbon />

      <h3>Technical Experience</h3>

      {list.map((item, i) => (
        <section key={i}>
          <h4>{item.title}</h4>
          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>
                <strong>
                  {bullet.title}
                  {bullet.dates ? ` (${bullet.dates})` : ""}.
                </strong>{" "}
                {bullet.desc} (<a href={bullet.website}>{bullet.website}</a>)
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

Experience.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Experience;
