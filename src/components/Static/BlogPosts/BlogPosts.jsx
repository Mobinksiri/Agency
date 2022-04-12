import React from "react";
import { Container } from "../../Styles/Container";
import { BlogPostsEl } from "./style";

const BlogPosts = ({ posts }) => {
   return <BlogPostsEl>{posts}</BlogPostsEl>;
};

export default BlogPosts;
