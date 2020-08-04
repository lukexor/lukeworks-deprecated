import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";

const Post = ({ title, content }) => {
  return (
    <>
      <header>
        <h4>{title}</h4>
      </header>
      <Markdown>{content}</Markdown>
    </>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
