import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const FeaturesEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 150px;

   #container {

      #two-column {
         align-items: center;

         .leftSide {
            #title-layout {
               margin-bottom: 24px;
            }
            .checks {
               display: flex;
               flex-flow: column;

               .check {
                  display: flex;
                  margin-bottom: 16px;

                  svg {
                     margin-right: 16px;
                  }
               }
            }
         }
         .rightSide {
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
            flex-flow: column-reverse;
            align-items: flex-start;
            
            .rightSide {
               width: 100%;
               margin-bottom: 48px;
            }
            .leftSide {
               width: 100%;
            } 
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 81px;
      
      #container {
         #two-column {
            
            .leftSide {
               #title-layout {
                  margin-bottom: 30px;
                  
                  p:first-child {
                     margin-bottom: 17px;
                  }
                  h3 {
                     margin-bottom: 17px;
                  }
               }
            }
            .rightSide {
               margin-bottom: 24px;
            } 
         }
      }
   }
`;
