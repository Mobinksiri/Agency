import React from "react";
import Styled from "styled-components";
import Footer from "../../Static/Footer/Footer";
import { Device } from "../../Styles/Devices";

const AboutFooterEl = Styled.div`
   background-color: #FDF0E9;
   
   #footer {
      position: relative;
      
      &::after {
         content: '';
         position: absolute;
         left: 0;
         top: 0;
         background-color: #28293E;
         height: 426px;
         width: 100%;
         z-index: -1;
      }
      
      z-index: 1;

   }

   @media screen and ${Device.tablet} {
      #footer {
         &::after {
            height: 600px;
         }
      }
   }

   @media screen and ${Device.mobileL} {
      #footer {
         &::after {
            height: 700px;
         }
      }
   }
`;

const AboutFooter = () => {
   return (
      <AboutFooterEl>
         <Footer />
      </AboutFooterEl>
   );
};

export default AboutFooter;
