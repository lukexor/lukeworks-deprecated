import React from "react";
import PropTypes from "prop-types";

const Aside = ({ addr1, addr2, phone, email, website, langAndTech }) => {
  return (
    <aside>
      <section>
        <h3>Personal Info</h3>

        <h4>Address</h4>
        <p>
          {addr1}
          <br />
          {addr2}
        </p>

        <h4>Phone</h4>
        <p>{phone}</p>

        <h4>Email</h4>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>

        <h4>Website</h4>
        <p>
          <a href={website}>{website}</a>
        </p>
      </section>

      <section>
        <h3>Languages & Technologies</h3>

        <ul>
          {langAndTech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

Aside.propTypes = {
  addr1: PropTypes.string.isRequired,
  addr2: PropTypes.string,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  langAndTech: PropTypes.array.isRequired,
};

export default Aside;
