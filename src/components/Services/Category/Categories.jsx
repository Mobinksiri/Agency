import React from "react";
import { useEffect } from "react";
import { Container } from "../../Styles/Container";
import CategoryItem from "./CategoryItem";
import { CategoriesEl } from "./style";
import Styled from "styled-components";
import { ReactComponent as CheckSvg } from "../../../assets/Images/check.svg";
import { Heading } from "../../Styles/Heading";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { ReactComponent as DesignSvg } from "../../../assets/Images/category-design.svg";
import { ReactComponent as DevelopmentSvg } from "../../../assets/Images/category-development.svg";
import { ReactComponent as MarketingSvg } from "../../../assets/Images/category-marketing.svg";

const CategoriesBox = Styled.div`
   background-color: #FDF0E9;
`;

const Categories = () => {
   const categoryCheckHandler = () => {
      const categories = document.querySelector("#categories");
      const category = Array.from(categories.children);
      category.forEach((item) => {
         const title = item.children[0];
         item.style.maxHeight = `${title.clientHeight + 88}px`;
      });
   };

   useEffect(() => {
      window.addEventListener("resize", () => {
         categoryCheckHandler();
         const categories = document.querySelector("#categories");
         const activeFaq = categories.querySelector(".active");
         activeFaq.style.maxHeight = "1000px";
      });

      categoryCheckHandler();
      const categories = document.querySelector("#categories");
      const category = Array.from(categories.children);
      category[0].classList.add("active");
      category[0].style.maxHeight = "1000px";
   }, []);

   const categoryToggleHandler = (e) => {
      const categories = document.querySelector("#categories");
      const category = Array.from(categories.children);
      category.forEach((item) => {
         const title = item.children[0];
         item.style.maxHeight = `${title.clientHeight + 88}px`;
         item.classList.remove("active");
      });
      const parent = e.target.parentElement;
      parent.style.maxHeight = "1000px";
      parent.classList.add("active");
   };

   return (
      <CategoriesBox>
         <Container>
            <CategoriesEl id="categories">
               <CategoryItem
                  svg={<DesignSvg />}
                  click={categoryToggleHandler}
                  title="Design"
                  divisions={
                     <div className="category-information">
                        <TitleLayout
                           tag="Features"
                           title="Agency is a business you hire to outsource your digital marketing efforts"
                           paragraph="Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                           titleElement="h3"
                           titleElementType="h3"
                           titleColor="dark"
                           paragraphElement="p"
                           paragraphElementType="text_big"
                           paragraphColor="dark"
                           maxWidth="670px"
                        />
                        <div className="checks">
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Web Development"
                              />
                           </div>
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Brand Strategy"
                              />
                           </div>
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Art Direction"
                              />
                           </div>
                        </div>
                     </div>
                  }
                  id="faq-1"
               />
               <CategoryItem
                  svg={<DevelopmentSvg />}
                  click={categoryToggleHandler}
                  title="Development"
                  divisions={
                     <div className="category-information">
                        <TitleLayout
                           tag="Features"
                           title="Agency is a business you hire to outsource your digital marketing efforts"
                           paragraph="Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                           titleElement="h3"
                           titleElementType="h3"
                           titleColor="dark"
                           paragraphElement="p"
                           paragraphElementType="text_big"
                           paragraphColor="dark"
                           maxWidth="670px"
                        />
                        <div className="checks">
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Web Development"
                              />
                           </div>
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Brand Strategy"
                              />
                           </div>
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Art Direction"
                              />
                           </div>
                        </div>
                     </div>
                  }
                  id="faq-1"
               />
               <CategoryItem
                  svg={<MarketingSvg />}
                  click={categoryToggleHandler}
                  title="Marketing"
                  divisions={
                     <div className="category-information">
                        <TitleLayout
                           tag="Features"
                           title="Agency is a business you hire to outsource your digital marketing efforts"
                           paragraph="Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                           titleElement="h3"
                           titleElementType="h3"
                           titleColor="dark"
                           paragraphElement="p"
                           paragraphElementType="text_big"
                           paragraphColor="dark"
                           maxWidth="670px"
                        />
                        <div className="checks">
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Web Development"
                              />
                           </div>
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Brand Strategy"
                              />
                           </div>
                           <div className="check">
                              <CheckSvg />
                              <Heading
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                                 text="Art Direction"
                              />
                           </div>
                        </div>
                     </div>
                  }
                  id="faq-1"
               />
            </CategoriesEl>
         </Container>
      </CategoriesBox>
   );
};

export default Categories;
