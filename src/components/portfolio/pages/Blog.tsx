import React from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import useAsync from "hooks/useAsync";
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

const Blog = () => {
  const immediate = true;
  const { pending, value, error } = useAsync(getPosts, immediate);
  return (
    <section className="fadein">
      <Helmet>
        <title>Blog | LukeWorks</title>
        <meta
          name="description"
          content="A blog by Lucas Petherbridge on programming, technology, and other topics."
        />
      </Helmet>

      <h3>Blog</h3>

      {pending && <p>Loading...</p>}
      {error && <p>Error loading posts: {error}</p>}
      {value?.map((post: IPost) => {
        return <Post key={post.id} {...post} />;
      })}
    </section>
  );
};

const getPosts = async () => {
  try {
    const response = await axios.get("/api/post");
    return response.data;
  } catch (e) {
    alert(`Error getting posts: ${e}`);
  }
};

export default Blog;
