import React from "react";
import Styled from "styled-components";
import Number from "./Number";

const PageNumbersEl = Styled.div`
   display: flex;
   justify-content: center;

   #page-number {
      transition: 0.3s all;
      p {
         box-shadow: 0px 3px 9px rgba(57, 20, 0, 0.08);
         border-radius: 6px;
         background-color: #fff;
         padding: 14px 18px;
         margin-left: 8px;
         font-size: 14px;
         font-weight: 800;
         line-height: 14px;
         cursor: pointer;
         transition: 0.3s all;
         
      }  
   }

   #page-number.active {
      pointer-events: none;

      p {
         color: #fff;
         background-color: hsla(8, 83%, 64%, 1);
      }
      
   }
`;

const PageNumbers = () => {
   const activePageHandler = (e) => {
      const pageNumbers = document.querySelector("#page-numbers");
      const pageNumbersArray = Array.from(pageNumbers.children);
      pageNumbersArray.forEach((item) => {
         item.classList.remove("active");
      });
      const clickedItem = e.target;
      clickedItem.parentElement.classList.add("active");
   };

   return (
      <PageNumbersEl id="page-numbers">
         <Number click={activePageHandler} number="1" className="active" />
         <Number click={activePageHandler} number="2" className="" />
         <Number click={activePageHandler} number="3" className="" />
         <Number click={activePageHandler} number="4" className="" />
         <Number click={activePageHandler} number="5" className="" />
      </PageNumbersEl>
   );
};

export default PageNumbers;
