import React from "react";
import { Navbar } from "../components/Static/Navbar/Navbar";
import Header from "../components/Blog/Header/Header";
import Articles from "../components/Blog/Articles/Articles";
import Footer from "../components/Static/Footer/Footer";
import BlogNewsLetters from "../components/Blog/BlogNewsLetters/BlogNewsLetters";

const Blog = () => {
   return (
      <>
         <Navbar />
         <Header />
         <Articles />
         <BlogNewsLetters />
         <Footer />
      </>
   );
};

export default Blog;
