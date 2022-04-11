import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const Input = ({ type, placeholder, classType }) => {
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

   const InputEl = Styled.input`
      width: 270px;
      height: 48px;
      background-color: #fff;
      color: #391400A3;
      border-radius: 6px;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      font-family: Epilogue;
      padding: 0 16px;
      outline: none;
      border: ${border};
   `;

   return <InputEl type={type} placeholder={placeholder} />;
};

export default Input;
