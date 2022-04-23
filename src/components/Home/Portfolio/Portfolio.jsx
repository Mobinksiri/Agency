import React, { useState, useEffect, useCallback } from "react";
import { PortfolioEl } from "./Style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Works } from "../../Static/Works/Works";
import Button from "../../Styles/Button";
// import WorkImage1 from "../../../assets/Images/work-1.png";
// import WorkImage2 from "../../../assets/Images/work-2.png";
// import WorkImage3 from "../../../assets/Images/work-3.png";
// import WorkImage4 from "../../../assets/Images/work-4.png";
import PortfolioWork from "../../Static/PortfolioWork/PortfolioWork";
import { Link } from "react-router-dom";
import axios from "axios";
import { Heading } from "../../Styles/Heading";

const Portfolio = () => {
   const [posts, setPosts] = useState();
   const [filteredDate, setFilteredDate] = useState();
   const [categories, setCategories] = useState([]);

   const getData = () => {
      axios
         .get("https://agency-2c3ae-default-rtdb.firebaseio.com/Products.json")
         .then((response) => {
            setPosts(response.data);
            const categoriesItems = response.data.map((category) => {
               return category.category;
            });
            const set = new Set(categoriesItems);
            set.add("Show All");
            const categoriesArray = [];
            set.forEach((item) => {
               categoriesArray.push(item);
            });
            setCategories(categoriesArray);
         });
   };

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
      getData();
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
      console.log(e);
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
                                 key={post.id}
                                 id={`work work${post.id}`}
                                 image={post.titleImage}
                                 tag={post.category}
                                 name={post.title}
                              />
                           ))
                     ) : (
                        <div>Loading ...</div>
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
