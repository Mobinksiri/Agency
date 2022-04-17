import React from "react";
import Styled from "styled-components";
import { Device } from "./Devices";

const Grid = Styled.div`
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-auto-rows: 416px;
   /* grid-template-rows: repeat(auto-fit, minmax(416px, 416px)); */
   grid-gap: 30px;

   @media screen and (max-width: 650px) {
      grid-template-columns: repeat(6, 1fr);
   }
   @media screen and ${Device.mobileL} {
      grid-template-columns: repeat(4, 1fr);
   }
`;

export const ImageGrid = ({ images }) => {
   return <Grid id="image-grid">{images}</Grid>;
};
