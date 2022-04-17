import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const SecondServiceEl = Styled.div`
   background-color: #FDF0E9;

   #container {
      .second-service--box {

         #title-layout {
            max-width: 100%;

            h3, h4 {
               max-width: 330px;
               margin-bottom: 35px;
            }
         
            a {
               display: none;
            }
         }

         #grid-border {
            .column {
               padding: 48px 48px 52px 48px;
               display: flex;
               flex-flow: column;
               justify-content: space-between;

               .information {
                  margin-bottom: 26px;
                  box-shadow: none;
                  
                  img {
                     width: 80px;
                     height: 80px;
                     margin-bottom: 41px;
                  }
   
                  h4 {
                     margin-bottom: 14px;
                  }
               }
            }
         }
      }
   }
   
   @media screen and ${Device.mobileL} {
      #container {
         .second-service--box {

            #grid-border {
               .column {
                  padding: 48px 28px 52px 28px;
               }
            }
         }
      }
   }
`;
