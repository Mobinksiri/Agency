import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const TestimonialEl = Styled.div`
   background-color: #FDF0E9;
   padding: 120px 0 100px 0;

   #title-layout {
      text-align: center;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 64px;

      * {
         max-width: 400px;
      }

      text {
         display: none;
      }
   }

   .reviews {
      display: flex;
      margin-bottom: 65px;

      .group {
         width: 50%;
         display: flex;
         flex-flow: column;
      }

      .first-group {
         #review:first-child {
            border-radius: 6px 0 0 0;
            border: 1px solid #F3D1BF;
         }
         #review:last-child {
            border-radius: 0 0 6px 6px;
            border-left: 1px solid #F3D1BF;
            border-right: 1px solid #F3D1BF;
            border-bottom: 1px solid #F3D1BF;
         }
      }

      .second-group {
         #review:first-child {
            border-radius: 0 6px 0 0;
            border-right: 1px solid #F3D1BF;
            border-bottom: 1px solid #F3D1BF;
            border-top: 1px solid #F3D1BF;
         }
         #review:last-child {
            border-radius: 0 0 6px 0;
            border-right: 1px solid #F3D1BF;
            border-bottom: 1px solid #F3D1BF;
         }
      }
      
   }

   .button {
      width: 100%;
      display: flex;
      justify-content: center;
   }

   @media screen and ${Device.tablet} {
      .reviews {
         flex-flow: column;
         
         .group {
            width: 100%;
         }

         .first-group {

            #review:first-child {
               border-radius: 6px 6px 0 0;
               border: 1px solid #F3D1BF;
            }
            #review:last-child {
               border-radius: 0;
               border-left: 1px solid #F3D1BF;
               border-right: 1px solid #F3D1BF;
               border-bottom: 1px solid #F3D1BF;
            }
         }

         .second-group {

            #review:first-child {
               border-radius: 0;
               border-right: 1px solid #F3D1BF;
               border-bottom: 1px solid #F3D1BF;
               border-left: 1px solid #F3D1BF;
               border-top: none;
            }
            #review:last-child {
               border-radius: 0 0 6px 6px;
               border-right: 1px solid #F3D1BF;
               border-bottom: 1px solid #F3D1BF;
               border-left: 1px solid #F3D1BF;
            }
         }
         
      }
   }
   
`;
