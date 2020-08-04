import React from "react";
import { Helmet } from "react-helmet";

// TODO: Set styles

const Home = () => {
  return (
    <section className="fadein">
      <Helmet>
        <title>
          Lucas Petherbridge - Software Engineer. Designer. Thinker. | LukeWorks
        </title>
        <meta
          name="description"
          content="A blog and project portfolio by Lucas Petherbridge on programming, technology, and other topics."
        />
      </Helmet>

      {/* TODO: Move text into database */}
      <header>
        <h3>Hi, I'm Luke.</h3>
      </header>

      <p>
        I love to code and solve problems. This is where I blog and host my
        project portfolio. I like to write about programming, technology,
        anything that intrigues or inspires me, and my experiences working in
        the software industry. I love growing and learning and it is my hope
        that I can inspire others to love it too!
      </p>
    </section>
  );
};

export default Home;
