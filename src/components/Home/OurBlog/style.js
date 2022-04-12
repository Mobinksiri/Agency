import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const OurBlogEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 62px;

   #container {

      #two-column {
         margin-bottom: 64px;

         .rightSide {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            button {
               margin-bottom: 48px;
            }
         }

         .leftSide {
            text {
               display: none;
            }
         }
      }
   }

   @media screen and ${Device.tablet} {
      #container {
         #two-column {
            .leftSide {
               width: 70%;
            }
            .rightSide {
               width: 30%;
            }
         }
      }
   }

   @media screen and (max-width: 600px) {
      #container {
         #two-column {
            margin-bottom: 48px;
            flex-flow: column;
            
            .leftSide {
               margin-bottom: 35px;
               width: 100%;

               #title-layout {
                  max-width: 425px;

                  h2 {
                     margin-bottom: 0;
                  }
                  
               }
            }

            .rightSide {
               width: 100%;
               justify-content: flex-start;
               
               button {
                  margin-bottom: 0;
               }
            }
         }
      }
   }
   
`;
