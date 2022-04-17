import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const ServiceEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 100px;

   #container {
      #two-column {
         align-items: center;

         .rightSide {
            width: 50%;
            display: flex;
            flex-flow: column;
            align-items: flex-end;

            * {
               max-width: 470px;
            }

            .explore {
               width: 100%;
            }
            
            #title-layout {
               margin-bottom: 31px;
            }

            .profile {
               display: flex;
               margin-bottom: 36px;

               &-image {
                  width: 64px;
                  height: 64px;
                  margin-right: 20px;

                  img {
                     width: 100%;
                  }
               }

               &-information {
                  width: calc(100% - 84px);

                  p:first-child {
                     margin-bottom: 12px;
                  }
               }
            }
            
         }
         
         
         .leftSide {
            width: 45%;
            
            .image {
               width: 100%;

               img {
                  width: 100%;
               }
            }
         }
      }
   }

   @media screen and ${Device.laptop} {
      #container {
         #two-column {
            flex-flow: column;
            align-items: flex-start;
            
            .rightSide {
               width: 100%;

               * {
                  max-width: 100%;
               }

               .profile {
                  width: 100%;
               }
            }
            .leftSide {
               width: 85%;
               margin-bottom: 48px;
            }
         }
      }
   }

   @media screen and (max-width: 860px) {
      #container {
         #two-column {
            
            .leftSide {
               width: 100%;
            }
         }
      }
   }
   
   @media screen and ${Device.mobileL} {
      #container {
         #two-column {

            .rightSide {
               #title-layout {
                  margin-bottom: 24px;
                  
                  p:first-child {
                     margin-bottom: 17px;
                  }
                  h3, h4 {
                     margin-bottom: 13px;
                  }
                  p:last-child {
                     margin-bottom: 0;
                  }
               }
               .profile {
                  margin-bottom: 20px;
               }
            }
            
            .leftSide {
               margin-bottom: 6px;
            }
         }
      }
   }
`;
