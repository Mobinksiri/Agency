import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Arrow from "../../assets/Images/select-arrow.png";

const SelectEl = Styled.select`
      width: 100%;
      height: 48px;
      background-color: #fff;
      color: #391400A3;
      border-radius: 6px;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      padding: 0 16px;
      outline: none;
      border: ${(props) => props.border};
      -moz-appearance:none !important;
      -webkit-appearance: none !important;
      appearance: none !important;
      position: relative;
      background-image: url(${Arrow});
      background-color: #fff;
      background-position: calc(100% - 0.75rem) center !important;
      background-repeat: no-repeat;
      margin-bottom: 38px;
`;

const Select = ({ options, classType }) => {
   const [border, setBorder] = useState();

   const getClass = () => {
      if (classType === "light") {
         setBorder("1px solid #F3D1BF");
      } else if (classType === "dark") {
         setBorder("none");
      }
   };

   useEffect(() => {
      getClass();
   }, []);

   return <SelectEl border={border}>{options}</SelectEl>;
};

export default Select;
