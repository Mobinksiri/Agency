import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const VideoReelEl = Styled.div`
   background-color: #FDF0E9;
   padding: 127px 0 147px 0;

   #container {
      #two-column {
         align-items: center;
         
         .rightSide {
            width: 40%;
         }
         .leftSide {
            width: 50%;

            .image {
               width: 100%;

               img {
                  width: 100%;
               }
            }
         } 
      }
   }

   @media screen and (max-width: 850px) {
      #container {
         #two-column {
            flex-flow: column;
            align-items: flex-start;
            
            .rightSide {
               width: 100%;
            }
            .leftSide {
               width: 100%;
               margin-bottom: 48px;
            } 
         }
      }
   }
   @media screen and ${Device.mobileL} {
      padding: 81px 0;
      
      #container {
         #two-column {
            
            .rightSide {
               #title-layout {
                  p:first-child {
                     margin-bottom: 17px;
                  }
                  h3 {
                     margin-bottom: 17px;
                  }
               }
            }
            .leftSide {
               margin-bottom: 24px;
            } 
         }
      }
   }
`;
