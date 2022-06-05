import React, { useState, useEffect, useCallback } from "react";
import { PortfolioEl } from "./Style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Works } from "../../Static/Works/Works";
import Button from "../../Styles/Button";
import PortfolioWork from "../../Static/PortfolioWork/PortfolioWork";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Static/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../redux/postsSlice";

const Portfolio = () => {
   const [filteredDate, setFilteredDate] = useState();
   const navigate = useNavigate();

   const posts = useSelector((state) => state.posts.posts);
   const categories = useSelector((state) => state.posts.categories);
   const dispatch = useDispatch();

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

   const portfolioHandler = (e, id) => {
      navigate("/works/" + id);
   };

   return (
      <PortfolioEl>
         <Container>
            <TitleLayout
               tag="Portfolio"
               title="Latest Work"
               titleElement="h2"
               titleElementType="h2"
               titleColor="light"
               paragraph=""
               paragraphElement="p"
               paragraphElementType="text"
               paragraphColor=""
            />
            <Works
               selectChangeHandler={selectChangeHandler}
               categories={categories}
               categoryHandler={categoryHandler}
               categoryIndexHandler={categoryIndexHandler}
               images={
                  <>
                     {filteredDate ? (
                        filteredDate
                           .slice(0, 4)
                           .map((post) => (
                              <PortfolioWork
                                 click={(e) => portfolioHandler(e, post.id)}
                                 key={post.id}
                                 id={`work work${post.id}`}
                                 image={post.titleImage}
                                 tag={post.category}
                                 name={post.title}
                              />
                           ))
                     ) : posts ? (
                        posts
                           .slice(0, 4)
                           .map((post) => (
                              <PortfolioWork
                                 click={(e) => portfolioHandler(e, post.id)}
                                 key={post.id}
                                 id={`work work${post.id}`}
                                 image={post.titleImage}
                                 tag={post.category}
                                 name={post.title}
                              />
                           ))
                     ) : (
                        <Loading theme="light" />
                     )}
                  </>
               }
            />
            <div className="explore-button">
               <Link to="/portfolio">
                  <Button type="outline" text="Explore More" padding="large" />
               </Link>
            </div>
         </Container>
      </PortfolioEl>
   );
};

export default Portfolio;
