import React, { useState, useEffect } from "react";
import { Works } from "../../Static/Works/Works";
import { Container } from "../../Styles/Container";
import PortfolioWork from "../../Static/PortfolioWork/PortfolioWork";
import { PortfolioWorksEl } from "./style";
import axios from "axios";
import Loading from "../../Static/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../redux/postsSlice";

const PortfolioWorks = () => {
   const [filteredDate, setFilteredDate] = useState();

   const posts = useSelector((state) => state.posts.posts);
   const categories = useSelector((state) => state.posts.categories);
   const dispatch = useDispatch();

   const navigate = useNavigate();

   const categoryIndexHandler = (categoryName) => {
      if (categoryName === "Show All") {
         return posts.length;
      } else {
         const categoriesByName = posts.filter((item) => {
            return item.category === categoryName;
         });
         return categoriesByName.length;
      }
   };

   useEffect(() => {
      if (!posts.length && !categories.length) {
         dispatch(getPosts());
      }
   }, []);

   const categoryHandler = (e) => {
      const categories = document.querySelector(".categories");
      const categoriesArray = Array.from(categories.children);
      const activeSpan = e.target;
      categoriesArray.map((category) => {
         category.className = "category";
      });
      // -----------
      activeSpan.classList.add("category-active");
      const categoryName = e.target.children[0].innerHTML;
      const filteredDate = posts.filter((item) => {
         return item.category === categoryName;
      });
      if (categoryName === "Show All") {
         setFilteredDate(posts);
      } else {
         setFilteredDate(filteredDate);
      }
   };

   const selectChangeHandler = (e) => {
      const categoryName = e.target.value;
      const filteredDate = posts.filter((item) => {
         return item.category === categoryName;
      });
      if (categoryName === "Show All") {
         setFilteredDate(posts);
      } else {
         setFilteredDate(filteredDate);
      }
   };

   const workHandler = (e, id) => {
      navigate("/works/" + id);
   };

   return (
      <PortfolioWorksEl>
         <Container>
            <Works
               selectChangeHandler={selectChangeHandler}
               categories={categories}
               categoryHandler={categoryHandler}
               categoryIndexHandler={categoryIndexHandler}
               images={
                  <>
                     {filteredDate ? (
                        filteredDate.map((post) => (
                           <PortfolioWork
                              click={(e) => workHandler(e, post.id)}
                              key={post.id}
                              id={`work work${post.id}`}
                              image={post.titleImage}
                              tag={post.category}
                              name={post.title}
                           />
                        ))
                     ) : posts ? (
                        posts.map((post) => (
                           <PortfolioWork
                              key={post.id}
                              click={(e) => workHandler(e, post.id)}
                              id={`work work${post.id}`}
                              image={post.titleImage}
                              tag={post.category}
                              name={post.title}
                           />
                        ))
                     ) : (
                        <Loading theme="dark" />
                     )}
                  </>
               }
            />
         </Container>
      </PortfolioWorksEl>
   );
};

export default PortfolioWorks;
