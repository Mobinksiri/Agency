import Styled from "styled-components";
import Vir from "../../../assets/Images/founder-word-vir.png";
import { Device } from "../../Styles/Devices";

export const FounderWordsEl = Styled.div`
   background-color: #28293E;
   padding-bottom: 170px;

   #container {

      #two-column {
         align-items: center;
         
         .leftSide {
            width: 45%;
            
            img {
               width: 100%;
            }
         }

         .rightSide {
            width: 45%;

            #title-layout {
               position: relative;

               &::after {
                  content: '';
                  position: absolute;
                  right: 90px;
                  top: 10px;
                  width: 100px;
                  height: 80px;
                  background: url(${Vir});
               }

               h3, h4 {
                  margin-bottom: 44px;
                  z-index: 100;
               }

               p:first-child {
                  margin-bottom: 33px;
               }

               p:last-child {
                  margin-bottom: 16px;
               }
            }
         }
         
      }
   }
   
   @media screen and (max-width: 1200px) {
      #container {
         #two-column {
            .leftSide {
               width: 48%;
            }
            .rightSide {
               width: 48%;
            }
         }
      }
   }
   @media screen and ${Device.laptop} {
      #container {
         #two-column {
            align-items: flex-start;
            
            .leftSide {
               width: 45%;
            }
            .rightSide {
               width: 50%;
            }
         }
      }
   }
   @media screen and (max-width: 850px) {
      #container {
         #two-column {
            flex-flow: column;
            
            .leftSide {
               width: 100%;
               margin-bottom: 41px;
            }
            .rightSide {
               width: 100%;

               #title-layout {

                  &::after {
                     content: '';
                     right: 10px;
                     top: 7.5 px;
                  }

                  p:first-child {
                     margin-bottom: 29px;
                  }
                  
               }
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 88px;
   }
   
`;
