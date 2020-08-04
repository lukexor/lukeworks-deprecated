import React from "react";
import PropTypes from "prop-types";
import Dates from "./Dates";
import Ribbon from "./Ribbon";
import Icon from "./Icon";

const Education = ({ list }) => {
  return (
    <section>
      <Ribbon />
      <h3>Education</h3>

      {list.map((item, i) => (
        <section key={i}>
          <section className="icon-title">
            <Icon src={item.icon} alt={item.entity} />
            <h4>{item.title}</h4>
          </section>
          <h5 className="clear">
            {item.entity}, {item.location}
          </h5>
          <Dates dates={item.dates} />

          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

Education.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Education;
