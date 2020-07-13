import React from "react";

interface IPost {
  id: number;
  title: string;
  content: string;
}

const Post = ({ title, content }: IPost) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{content}</p>
    </>
  );
};

export default Post;
export type { IPost };
