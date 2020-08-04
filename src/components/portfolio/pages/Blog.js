import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
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

const getPosts = async (page) => {
  console.warn("calling getPosts: ", page);
  if (page === 0) return null;
  try {
    const response = await axios.get(`/api/post`);
    if (response && Array.isArray(response.data)) {
      return response.data;
    }
  } catch (e) {
    console.error(`Error getting posts: ${e}`);
  }
};

// TODO: Pass in initialData from SSR
const Blog = () => {
  const [page, setPage] = useState(0);
  const immediate = true;
  const { execute, pending, result, error } = useAsync(
    async () => getPosts(page),
    immediate,
  );

  return (
    <section className="fadein">
      <Helmet>
        <title>Blog | LukeWorks</title>
        <meta
          name="description"
          content="A blog by Lucas Petherbridge on programming, technology, and other topics."
        />
      </Helmet>

      <header>
        <h3>Blog</h3>
      </header>

      {pending && <p>Loading...</p>}
      {error && <p>Error loading posts: {error}</p>}
      {result &&
        result.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
    </section>
  );
};

export default Blog;
