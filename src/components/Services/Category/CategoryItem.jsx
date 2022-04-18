import React from "react";
import Styled from "styled-components";
import { ReactComponent as CategorySvg } from "../../../assets/Images/faq-svg.svg";
import { Device } from "../../Styles/Devices";
import { Heading } from "../../Styles/Heading";

const CategoryItemEl = Styled.div`
   padding: 44px 0;
   overflow: hidden;
   transition: 0.4s all ;

   .category-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      padding-bottom: 0;
      cursor: pointer;
      transition: 0.4s all;

      &::after {
         width: 0;
         height: 0;
      }

      .category-item--head---title {
         display: flex;
         align-items: center;
         pointer-events: none;

         h4 {
            width: calc(100% - 52px);
            pointer-events: none;
            transition: 0.4s all;
         }

         svg {
            margin-right: 36px;
            width: 80px;
            height: 80px;
         }
      }
      


      #arrow {
         transform: rotateZ(180deg);
         pointer-events: none;
         transition: 0.4s all;
      }
   }

   @media screen and ${Device.mobileL} {
      .category-head {
         .category-item--head---title {
            svg {
               width: 60px;
               height: 60px;
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding: 45px 0;

      .category-head {
         align-items: center;

         .category-item--head---title {

            h4 {
               width: calc(100% - 52px);
               pointer-events: none;
               transition: 0.4s all;
            }

            svg {
               margin-right: 25px;
            }
         }
         
      }
   }
`;

const CategoryItem = ({ title, divisions, click, svg }) => {
   return (
      <CategoryItemEl id="category-item">
         <div className="category-head" onClick={click}>
            <div className="category-item--head---title">
               {svg}
               <Heading
                  text={title}
                  element="h3"
                  elementType="h3"
                  color="dark"
               />
            </div>
            <CategorySvg id="arrow" />
         </div>
         {divisions}
      </CategoryItemEl>
   );
};

export default CategoryItem;
