import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const NewsletterEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 110px;

   #container {
      .newsletter-box {
         display: flex;
         align-items: center;
         justify-content: space-between;
         flex-wrap: wrap;

         .newsletter-input {
            display: flex;
            flex-wrap: wrap;
            
            input {
               margin-right: 30px;
            }
            button {
               height: 44px;
            }
         }
      }
   }

   @media screen and ${Device.tablet} {
      #container {

      .newsletter-box {
         justify-content: flex-start;

            h3 {
               width: 100%;
               margin-bottom: 35px;
            }

            .newsletter-input {
               width: 100%;
         
            }
         }
      }
   }

   @media screen and (max-width: 500px) {
      #container {

      .newsletter-box { 

            .newsletter-input {
               
               input {
                  width: 100%;
                  margin-right: 0;
                  margin-bottom: 16px;
               }
               button {
                  width: 100%;
               }
            }
         }
      }
   }
`;
