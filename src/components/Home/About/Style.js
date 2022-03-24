import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const HomeAboutEl = Styled.div`
   padding: 100px 0 160px 0;
   background-color: #FDF0E9;

   #container {
      #two-column {
         .leftSide {
            width: 45%;
            
            img {
               width: 100%;
            }
         }

         .rightSide {
            width: 45%;

            #title-layout {

               p:last-child {
                  margin-bottom: 18px;
               }
            }

            p.paragraph {
               font-family: 'Epilogue';
               font-style: normal;
               font-weight: 400;
               font-size: 16px;
               line-height: 32px;
               color: var(--text-dark--gray);
               margin-bottom: 34px;
            }
         }
      }
   }
   
   @media screen and ${Device.laptop} {

      #container {
         #two-column {
                  
            .rightSide {
               width: 49%;
            }

            .leftSide {
               width: 46%;
            }
         }
      }
   }

   @media screen and (max-width: 850px) {
      padding: 100px 0 100px 0;

      #container {
         #two-column {
            flex-direction: column;
            
            .rightSide {
               width: 100%;
            }

            .leftSide {
               width: 75%;
               margin-bottom: 32px;
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding: 71px 0 112px 0;
      #container {
         #two-column {
            
            .rightSide {
               width: 100%;

               #title-layout {
                  h3 {
                     margin-bottom: 27px;
                  }
               }
            }

            .leftSide {
               width: 100%;
               margin-bottom: 16px;
            }
         }
      }
   }
`;
