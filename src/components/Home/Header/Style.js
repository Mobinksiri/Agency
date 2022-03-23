import Styled from "styled-components";
import { Device } from "../../../components/Styles/Devices";

export const HeaderEl = Styled.div`
   padding: 100px 0 64px 0;
   background-color: #28293E;

   .rightSide {

      img {
         width: 100%;
      }
   }

   .leftSide {
      position: relative;

      img.ellipse {
         width: 148px;
         height: 148px;
         position: absolute;
         right: 147px;
         top: 15px;
         z-index: 0;
      }

      .header-description {
         margin-bottom: 32px;

         #title-layout {
            p, h1 {
               z-index: 100;
            }
         }

         &--buttons {
            display: flex;
            align-items: center;
            margin-bottom: 117px;

            button {
               margin-right: 45px;
            }
         }

         &--profile {
            display: flex;
            align-items: center;

            &---image {
               width: 48px;
               height: 48px;
               margin-right: 16px;

               img {
                  width: 100%;
               }
            }

            &---info {
               display: flex;
               flex-flow: column;

               p:last-child {
                  padding-left: 6px;
                  margin-top: -8px;
               }
            }
         }
      }
   }

   @media screen and (max-width: 1200px) {
      padding: 65px 0 50px 0;

      .rightSide {
         width: 45%;

         img {
            padding-top: 75px;
         }
      }

      .leftSide {
         width: 55%;

         .header-description {
            &--buttons {
               margin-bottom: 70px;
            }
         }
      } 
   }

   @media screen and ${Device.tablet} {
      padding: 30px 0 50px 0;

      #two-column {
         flex-flow: column-reverse;
         
         .rightSide {
            width: 70%;
            margin-bottom: 30px;

            img {
               padding-top: 0;
            }
         }

         .leftSide {
            width: 100%;

            .ellipse {
               right: 247px;
            }
            
            .header-description {
               &--buttons {
                  margin-bottom: 50px;
               }
            }
         } 
      }
   }

   @media screen and ${Device.mobileL} {
      padding: 16px 0 32px 0;

      #two-column {
         
         .rightSide {
            width: 100%;
         }

         .leftSide {

            .ellipse {
               display: none;
            }
            
            .header-description {
               margin-bottom: 16px;

               p:first-child {
                  margin-bottom: 20px;
               }

               #title-layout {
                  h1 {
                     margin-bottom: 12px;
                  }
               }
               
               &--buttons {
                  margin-bottom: 48px;
               }

               &--profile {
                  align-items: flex-start;
                  
                  p:last-child {
                     padding-left: 0;
                     margin-top: 4px;
                  }
               }
            }
         } 
      }
   }
`;
