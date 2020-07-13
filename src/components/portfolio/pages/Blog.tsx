import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
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
  const [posts, setPosts] = useState<IPost[]>([]);

  // TODO Fix proxying
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("/api/post");
        setPosts(response.data);
      } catch (e) {
        alert(`Error getting posts: ${e}`);
      }
    };
    getPosts();
  }, []);

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

      {posts.map((post: IPost) => {
        return <Post key={post.id} {...post} />;
      })}
    </section>
  );
};

export default Blog;
