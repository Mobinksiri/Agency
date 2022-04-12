import React from "react";
import Styled from "styled-components";
import { ReactComponent as FaqSvg } from "../../../assets/Images/faq-svg.svg";
import { Device } from "../../Styles/Devices";
import { Heading } from "../../Styles/Heading";

const FaqItem = ({ title, paragraph, click }) => {
   const FaqItemEl = Styled.div`
      padding: 44px 50px;
      overflow: hidden;
      transition: 0.4s all ;
      
      .faq-head {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 45px;
         cursor: pointer;
         transition: 0.4s all;
         
         h4 {
            width: calc(100% - 52px);
            pointer-events: none;
         }

         svg {
            transform: rotateZ(540deg);
            pointer-events: none;
            transition: 0.4s all;
         }
      }

      @media screen and ${Device.mobileL} {
         padding: 45px 28px;

         .faq-head {
            align-items: flex-start;

            svg {
               margin-top: 5px;
            }
         }
      }
      
   `;

   return (
      <FaqItemEl id="faq">
         <div className="faq-head" onClick={click}>
            <Heading text={title} element="h4" elementType="h4" color="dark" />
            <FaqSvg />
         </div>
         <Heading
            text={paragraph}
            element="p"
            elementType="text"
            color="dark-gray"
         />
      </FaqItemEl>
   );
};

export default FaqItem;
