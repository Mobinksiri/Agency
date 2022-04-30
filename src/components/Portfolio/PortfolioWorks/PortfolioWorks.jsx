import React, { useState, useEffect } from "react";
import { Works } from "../../Static/Works/Works";
import { Container } from "../../Styles/Container";
// import WorkImage1 from "../../../assets/Images/work-1.png";
// import WorkImage2 from "../../../assets/Images/work-2.png";
// import WorkImage3 from "../../../assets/Images/work-3.png";
// import WorkImage4 from "../../../assets/Images/work-4.png";
// import WorkImage5 from "../../../assets/Images/work-5.png";
// import WorkImage6 from "../../../assets/Images/work-6.png";
// import WorkImage7 from "../../../assets/Images/work-7.png";
// import WorkImage8 from "../../../assets/Images/work-8.png";
// import WorkImage9 from "../../../assets/Images/work-9.png";
import PortfolioWork from "../../Static/PortfolioWork/PortfolioWork";
import { PortfolioWorksEl } from "./style";
import PageNumbers from "../PageNumbers/PageNumbers";
import axios from "axios";
import Loading from "../../Static/Loading/Loading";
import { useNavigate } from "react-router-dom";

const PortfolioWorks = () => {
   const [posts, setPosts] = useState();
   const [filteredDate, setFilteredDate] = useState();
   const [categories, setCategories] = useState([]);

   const navigate = useNavigate();

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
         })
         .catch((err) => {
            alert(
               "Work List not uploaded in your location!! please turn on your vpn :D"
            );
            alert(err);
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
            {/* <PageNumbers /> */}
         </Container>
      </PortfolioWorksEl>
   );
};

export default PortfolioWorks;
