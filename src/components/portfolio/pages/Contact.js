import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <section className="fadein">
      <Helmet>
        <title>Contact | LukeWorks</title>
        <meta name="description" content="Contact Lucas Petherbridge." />
      </Helmet>

      <header>
        <h3>Contact</h3>
      </header>

      {/* TODO: Load email, website, and account phone, set up form submission */}
      <p>Contact me</p>
    </section>
  );
};

export default Contact;
