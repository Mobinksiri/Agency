import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const StaticFeatureEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 150px;

   #container {

      #two-column {
         align-items: center;

         .rightSide {
            width: 59%;
            
            .feature-layout {
               display: flex;
               align-items: flex-end;

               .professional, .accessibility {
                  padding: 48px;
                  box-shadow: 0 0 0 1px #F3D1BF;
                  border-radius: 0px 6px 6px 0px;

                  h4 {
                     margin-bottom: 19px;
                  }
               }
               
               .professional {
                  border-radius: 6px 6px 0px 6px;
                  background-color: #fff;
                  position: relative;
                  z-index: 20;

                  img {
                     margin-bottom: 41px;
                  }

                  &::after {
                     width: 100%;
                     height: 100%;
                     content: '';
                     box-shadow: 0px 32px 64px rgba(57, 20, 0, 0.06);
                     position: absolute;
                     left: 0;
                     top: 0;
                     background-color: transparent;
                     z-index: -1;
                  }
               }
            }
         }

         .leftSide {
            width: 40%;
         }
      }
   }

   @media screen and (max-width: 850px) {
      #container {
         #two-column {
            flex-flow: column;
            align-items: flex-start;
            
            .rightSide {
               width: 100%;
            }
            .leftSide {
               margin-bottom: 24px;
               width: 100%;
            } 
         }
      }
   }

   @media screen and (max-width: 600px) {
      #container {
         #two-column {
            
            .rightSide {
               .feature-layout {
                  flex-flow: column;

                  .professional {
                     border-radius: 6px 6px 0 0;
                  }

                  .accessibility {
                     border-radius: 0 0 6px 6px;
                  }
               }
            }
            .leftSide {
            } 
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 90px;
      
      #container {
         #two-column {
            
            .leftSide {
               #title-layout {
                  p:nth-of-type(1) {
                     margin-bottom: 30px;
                  }
                  p:nth-of-type(2) {
                     margin-bottom: 32px;
                  }
               }
            }
            .rightSide {
               .feature-layout {

                  .professional {
                  }

                  .accessibility {
                     padding-top: 105px;
                  }
               }
            } 
         }
      }
   }
   
`;
