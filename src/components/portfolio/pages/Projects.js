import React from "react";
import { Helmet } from "react-helmet";
import useAsync from "../../../hooks/useAsync";
import Post from "./components/Post";

// TODO: Add "get shortlink" option for sharing URLs

// graphql`
// query UserQuery {
//   viewer {
//     id
//   }
// }
// `;

const getProjects = async () => {
  return await Promise.resolve([
    {
      id: 100,
      title: "Flocking Simulation",
      content: `<iframe src="/projects/flocking-simulation.html"></iframe>`,
    },
  ]);
};

const Projects = () => {
  const immediate = true;
  const { pending, value, error } = useAsync(getProjects, immediate);
  return (
    <section className="fadein">
      <Helmet>
        <title>Projects | LukeWorks</title>
        <meta
          name="description"
          content="A portfolio of current and past projects by Lucas Petherbridge."
        />
      </Helmet>

      <header>
        <h3>Projects</h3>
      </header>

      {pending && <p>Loading...</p>}
      {error && <p>Error loading posts: {error}</p>}
      {value && value.map((project) => <Post key={project.id} {...project} />)}
    </section>
  );
};

export default Projects;
