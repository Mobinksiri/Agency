import React from "react";
import Styled from "styled-components";
import { Device } from "./Devices";

const ContainerEl = Styled.div`
   max-width: 1100px;
   margin: 0 auto;

   @media screen and (max-width: 1200px) {
      max-width: 950px;
   }
   @media screen and ${Device.laptop} {
      max-width: 800px;
   }
   @media screen and (max-width: 850px) {
      max-width: 720px;
   }
   @media screen and ${Device.tablet} {
      max-width: 100%;
      padding: 0 32px;
   }
   @media screen and ${Device.mobileL} {
      padding: 0 24px;
   }
   @media screen and ${Device.mobileM} {
      padding: 0 16px;
   }
`;

export const Container = (props) => {
   return <ContainerEl id="container">{props.children}</ContainerEl>;
};
