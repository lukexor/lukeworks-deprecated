import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section className="fadein">
      <Helmet>
        <title>About Me | LukeWorks</title>
        <meta
          name="description"
          content="About Lucas Petherbridge. Software Engineer. Designer. Thinker."
        />
      </Helmet>

      <h3>About Me</h3>

      <p>
        Hi! My name is Luke. I reside in Portland, OR and I've been tinkering
        with code since age 15 when I first learned what HTML was. Oh, what a
        journey it has been.
      </p>

      <p>
        I'm a technology polyglot but I primarily work with Javascript, Python,
        Golang, Rust and even Arduino programming! I love learning new
        technologies and finding the best tool for the job. I have developed a
        borderline addiction to problem-solving over the years, with many late
        nights, refusing to go to bed until I was satisfied I had reached an
        acceptable solution.
      </p>

      <p>
        I am constantly looking for new things to learn and better ways to do
        things including solving problems for fun and trying out new projects.
        Emerging technologies excite me and I keep looking for anything I can
        sink my teeth into. I occasionally post articles to share my projects
        and ideas with the hope they spur discussions about code, software
        practices and technology.
      </p>
    </section>
  );
};

export default About;
