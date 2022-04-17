import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const FaqEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 156px;

   @media screen and ${Device.laptop} {
      #two-column {
         .leftSide {
            width: 42%;
         }
         .rightSide {
            width: 55%;
         }
      }
   }

   @media screen and ${Device.tablet} {
      #two-column {
         flex-flow: column;
         
         .leftSide {
            width: 100%;
            margin-bottom: 36px;
         }
         .rightSide {
            width: 100%;
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 90px;
   }
`;
