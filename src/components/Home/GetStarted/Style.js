import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const GetStartedEl = Styled.div`
   background-color: #28293E;
   padding-bottom: 120px;

   #container {
      .get-started {
         background-color: #FDF0E9;
         display: flex;
         position: relative;
         height: 336px;
         align-items: center;
         padding: 0 90px;
         border-radius: 6px;

         img {
            align-self: center;
         }

         .get-started--ellipse {
            position: absolute;
            top: -76px;
            left: 85px;
         }

         .get-started--girl {
            position: absolute;
            bottom: 0;
            right: 50px;
         }

         .get-started--image {
            padding-top: 50px;
         }

         &--info {
            #title-layout {
               margin-bottom: 23px;

               p:first-child {
                  margin-bottom: 13px;
               }
               p:last-child {
                  display: none;
               }
            }
         }
      }
   }

   @media screen and ${Device.laptop} {
      #container {
         .get-started {
            padding: 0 60px;
         }
      }
   }

   @media screen and ${Device.tablet} {
      #container {
         .get-started {
            height: 336px;
            
            &--info {
               max-width: 50%;

               #title-layout {
                  max-width: 100%;
               }
            }
            
            .get-started--image {
               width: 50%;
            }

            .get-started--girl {
               width: 250px;
               right: 20px;
            }
         }
      }
   }
   
   @media screen and (max-width: 600px) {
      #container {
         .get-started {
            flex-flow: column;
            align-items: flex-start;
            padding: 92px 40px 0px 40px;
            height: fit-content;
            
            &--info {
               max-width: 100%;

               #title-layout {
                  max-width: 100%;
               }
            }
            
            .get-started--image {
               width: 126%;
               padding-top: 20px;
            }

            .get-started--girl {
               position: static;
               width: 75%;
            }
         }
      }
   }
   
   @media screen and ${Device.mobileL} {
      #container {
         .get-started {
            padding: 100px 28px 0px 28px;
            
            .get-started--ellipse {
               left: 12px;
            }
            
            .get-started--image {
               width: 127%;
               padding-top: 20px;
            }

            .get-started--girl {
               width: 85%;
            }
         }
      }
   }
`;
