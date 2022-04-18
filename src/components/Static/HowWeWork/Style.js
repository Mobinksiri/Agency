import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const HowWeWorkEl = Styled.div`
   background-color: #FDF0E9;

   #container {

      .howWeWork-box {
         padding-bottom: 108px;

         #two-column {

            .leftSide {

               #title-layout {
                  margin-bottom: 28px;
               }

               p#read-more {
                  display: inline-block;
               }
            }

            .rightSide {
               padding-top: 72px;
               
               .skills {
                  display: flex;
                  flex-flow: column;

                  .skill {
                     display: flex;
                     align-items: center;
                     margin-bottom: 32px;
                     margin-left: 75px;

                     h1 {
                        width: 32px;
                        margin-right: 54px;
                     }
                  }
               }
            }
         }
      }
   }

   @media screen and (max-width: 850px) {
      #container {
         .howWeWork-box {
            #two-column {
               flex-flow: column;

               .leftSide {
                  width: 100%;
               }
               .rightSide {
                  width: 100%;

                  .skills {
                     .skill {
                        margin-left: 0;
                     }
                  }
               }
               
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      #container {
         .howWeWork-box {
            padding-bottom: 71px;
            
            #two-column {
               .leftSide {
                  #title-layout {
                     margin-bottom: 32px;
                     
                     p {
                        margin-bottom: 17px;
                     }
                     h3, h4 {
                        margin-bottom: 15px;
                     }
                  }
               }
               .rightSide {}
            }
         }
      }
   }
`;
