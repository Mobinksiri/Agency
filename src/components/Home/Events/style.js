import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const EventsEl = Styled.div`
   background-color: #28293E;
   padding-bottom: 140px;

   #container {

      #title-layout {
         text-align: center;
         display: flex;
         align-items: center;
         margin-bottom: 64px;

         * {
            width: fit-content;
         }

         p:first-child {
            margin-bottom: 20px;
         }
         
         h2 {
            max-width: 426px;
         }
         
         p:last-child {
            display: none;
         }
      }

      .events-grid {
         display: flex;
         justify-content: space-between;
         margin-bottom: 64px;
         
         .events-grid--event {
            width: 31.5%;
            padding: 36px 40px;
            border: 1px solid #3A3C56;
            border-radius: 6px;

            &---head {
               margin-bottom: 36px;

               &----date {
                  display: flex;
                  align-items: center;
                  margin-bottom: 8px;

                  h1 {
                     margin-right: 12px;
                  }

                  h4 {
                     max-width: 127px;
                  }
               }

               &----hour {
                  display: flex;
                  align-items: center;

                  svg {
                     align-self: center;
                     margin-right: 8px;   
                     padding-bottom: 2px;
                  }
               }
            }

            #line {
               background-color: #3A3C56;
               margin-bottom: 40px;
            }

            .events-grid--events---body {

               h4 {
                  margin-bottom: 19px;
               }
               
               p {
                  margin-bottom: 26px;
               }
            }
         }
      }

      .button {
         text-align: center;
      }
   }

   @media screen and ${Device.laptop} {
      #container {
         .events-grid {
            flex-wrap: wrap;
            
            .events-grid--event {
               width: 48.5%;
               margin-bottom: 24px;
            }
         }
      }
   }

   @media screen and (max-width: 650px) {
      #container {
         .events-grid {
            
            .events-grid--event {
               width: 100%;
               margin-bottom: 32px;
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 124px;
      
      #container {

         #title-layout {
            margin-bottom: 35px;
         }
         
         .events-grid {
            margin-bottom: 48px;
         }
      }
   }
`;
