import React from "react";
import { Container } from "../../Styles/Container";
import { BlogPostsEl } from "./style";

const BlogPosts = ({ posts, id }) => {
   return <BlogPostsEl id={id}>{posts}</BlogPostsEl>;
};

export default BlogPosts;
