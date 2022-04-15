import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Container } from "./Container";
import { Device } from "./Devices";

const Grid = Styled.div`
      display: grid;
      width: 100%;
      grid-template-columns: repeat(${(props) => props.column}, ${(props) =>
   props.size});
      grid-template-rows: repeat(1, max-width: 180px;);
      grid-gap: 1px;
      padding-bottom: 74px;

      div {
         padding: ${(props) => props.padding};
         box-shadow: 0 0 0 1px #F3D1BF;
      }
      
      div:nth-of-type(1) {
         grid-column: 1/2;
         grid-row: 1/2;
         border-radius: 6px 0px 0px 6px;
      }
      div:nth-of-type(2) {
         grid-column: 2/3;
         grid-row: 1/2;
         border-radius: ${(props) => props.borderRadius}
      }
      div:nth-of-type(3) {
         grid-column: 3/4;
         grid-row: 1/2;
         border-radius: 0px 6px 6px 0px;
      }

      @media screen and ${Device.tablet} {
         grid-template-rows: repeat(auto-fit, minmax(180px, 100%));
         grid-template-columns: repeat(auto-fit, 50%);

         div:nth-of-type(1) {
            border-radius: ${(props) => props.borderRadiusMedia1};
         }
         div:nth-of-type(2) {
            border-radius: ${(props) => props.borderRadiusMedia2};
         }
         div:nth-of-type(3) {
            grid-column: 1/2;
            grid-row: 2/3;
            border-radius: 0 0 6px 6px;
         }
      }
      @media screen and (max-width: 550px) {
         grid-template-rows: repeat(auto-fit, minmax(180px, 100%));
         grid-template-columns: repeat(auto-fit, 100%);

         div:nth-of-type(1) {
            grid-column: 1/2;
            grid-row: 1/2;
            border-radius: 0;
         }
         div:nth-of-type(2) {
            grid-column: 1/2;
            grid-row: 2/3;
            border-radius: 0;
         }
         div:nth-of-type(3) {
            grid-column: 1/2;
            grid-row: 3/4;
            border-radius: 0;
         }
         
         div:last-child {
            border-radius: 0 0 6px 6px;
         }

         div:first-child {
            border-radius: 6px 6px 0 0;
         }
      }
   `;

const GridBorder = ({ column, size, divisions, padding }) => {
   const [borderRadius, setBorderRadius] = useState("");
   const [borderRadiusMedia1, setBorderRadiusMedia1] = useState("");
   const [borderRadiusMedia2, setBorderRadiusMedia2] = useState("");

   const getBorderRadius = () => {
      if (column === "2") {
         setBorderRadius("0px 6px 6px 0px");
         setBorderRadiusMedia1("6px 0 0 6px");
         setBorderRadiusMedia2("0 6px 6px 0");
      } else {
         setBorderRadius("0");
         setBorderRadiusMedia1("6px 0 0 0px");
         setBorderRadiusMedia2("0 6px 6px 0");
      }
   };

   useEffect(() => {
      getBorderRadius();
   }, []);

   return (
      <Grid
         column={column}
         size={size}
         padding={padding}
         borderRadius={borderRadius}
         borderRadiusMedia1={borderRadiusMedia1}
         borderRadiusMedia2={borderRadiusMedia2}
         id="grid-border"
      >
         {divisions}
      </Grid>
   );
};

export default GridBorder;
