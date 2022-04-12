import React from "react";
import Styled from "styled-components";
import { ReactComponent as TagSvg } from "../../../assets/Images/price-tag.svg";
import { Heading } from "../../Styles/Heading";

const PriceTag = ({ text }) => {
   const TagEl = Styled.div`
      display: flex;
      align-items: center;

      svg {
         margin-right: 16px;   
      }
   `;

   return (
      <TagEl id="price-tag">
         <TagSvg />
         <Heading text={text} element="p" elementType="text" color="dark" />
      </TagEl>
   );
};

export default PriceTag;
