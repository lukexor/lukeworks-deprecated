import React from "react";
import PropTypes from "prop-types";

const Dates = ({ dates, duration }) => {
  return (
    <section className="dates">
      {dates}{" "}
      {duration ? (
        <>
          {String.fromCharCode(183)} {duration}
        </>
      ) : null}
    </section>
  );
};

Dates.proTypes = {
  dates: PropTypes.string.isRequired,
  duration: PropTypes.string,
};

export default Dates;
