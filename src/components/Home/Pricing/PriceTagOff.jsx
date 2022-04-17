import React from "react";
import Styled from "styled-components";
import { ReactComponent as TagSvg } from "../../../assets/Images/price-tag-off.svg";
import { Heading } from "../../Styles/Heading";

const TagEl = Styled.div`
      display: flex;
      align-items: center;

      svg {
         margin-right: 16px;   
      }
`;

const PriceTagOff = ({ text }) => {
   return (
      <TagEl id="price-tag">
         <TagSvg />
         <Heading text={text} element="p" elementType="text" color="dark" />
      </TagEl>
   );
};

export default PriceTagOff;
