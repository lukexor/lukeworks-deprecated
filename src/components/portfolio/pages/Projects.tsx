import React from "react";
import { Helmet } from "react-helmet-async";
// import graphql from 'babel-plugin-relay/macro';  // TODO Relay: https://relay.dev/
import Post, { IPost } from "./components/Post";

// TODO: Add "get shortlink" option for sharing URLs

// graphql`
// query UserQuery {
//   viewer {
//     id
//   }
// }
// `;

const Projects = () => {
  const projects: IPost[] = [];

  return (
    <section className="fadein">
      <Helmet>
        <title>Projects | LukeWorks</title>
        <meta
          name="description"
          content="A portfolio of current and past projects by Lucas Petherbridge."
        />
      </Helmet>

      <h3>Projects</h3>

      {projects.map((project: any) => (
        <Post key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
