import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const PricingEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 150px;

   #container {

      #title-layout {
         margin-bottom: 16px;
         
         a {
            display: none;
         }
      }

      .prices {
         display: flex;
         align-items: flex-end;

         #price-1 {
            border-top: 1px solid #F3D1BF;
            border-left: 1px solid #F3D1BF;
            border-bottom: 1px solid #F3D1BF;
            border-radius: 6px 0 0 6px;
         }
         #price-2 {
            border: 1px solid #F3D1BF;
            border-radius: 6px 6px 0 0;
         }
         #price-3 {
            border-top: 1px solid #F3D1BF;
            border-bottom: 1px solid #F3D1BF;
            border-right: 1px solid #F3D1BF;
            border-radius: 0 6px 6px 0;
         }
      }
   }

   @media screen and (max-width: 850px) {
      #container {
         .prices {
            flex-wrap: wrap;

            #price-1 {
               border-radius: 6px 0 0 0;
            }
            #price-2 {
               border-radius: 6px 6px 6px 0;
            }
            #price-3 {
               border-left: 1px solid #F3D1BF;
               border-top: none;
               border-radius: 0 0 6px 6px;
            }
         }
      }
   }
   @media screen and (max-width: 650px) {
      #container {
         .prices {
            #price-1 {
               border-radius: 6px 6px 0 0;
               border-right: 1px solid #F3D1BF;
               border-bottom: none;
            }
            #price-2 {
               border-radius: 0;
            }
            #price-3 {
               border-left: 1px solid #F3D1BF;
               border-bottom: 1px solid #F3D1BF;
               border-right: 1px solid #F3D1BF;
               border-top: none;
               border-radius: 0 0 6px 6px;
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 90px;
   }
`;
