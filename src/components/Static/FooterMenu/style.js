import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const FooterMenuEl = Styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 68px;

   .footer-menu--ul {
      display: flex;

      #footer-menu--col:last-child {
         margin-left: 200px;
      }
   }

   .footer-social {
      display: flex;
      
      svg {
         margin-left: 8px;
      }
   }

   @media screen and ${Device.laptop} {
      .footer-menu--ul {
         #footer-menu--col:last-child {
            margin-left: 120px;
         }
      }
   }

   @media screen and (max-width: 850px) {
      .footer-menu--ul {
         #footer-menu--col:last-child {
            margin-left: 80px;
         }
      }
   }
   @media screen and ${Device.tablet} {
      .footer-menu--ul {
         #footer-menu--col:last-child {
            margin-left: 80px;
         }
      }
      .footer-social {
         flex-flow: column;
         
         svg {
            margin-left: 0;
            margin-bottom: 10px;
         }
      }
   }
   @media screen and (max-width: 600px) {
      flex-wrap: wrap;

      h4 {
         width: 20%;
         margin-bottom: 50px;
      }
      
      .footer-menu--ul {
         width: 80%;
         justify-content: flex-end;
         margin-bottom: 50px;

         #footer-menu--col:last-child {
            margin-left: 80px;
         }
      }

      .footer-social {
         flex-flow: row;
         
         svg {
            margin-left: 10px;
            margin-bottom: 0;
         }
      }
   }
   @media screen and (max-width: 500px) {
      .footer-menu--ul {

         #footer-menu--col:last-child {
            margin-left: 40px;
         }
      }
   }
   @media screen and ${Device.mobileL} {
      flex-flow: column;
      align-items: center;

      h4 {
         width: fit-content;
      }
      
      .footer-menu--ul {
         align-items: center;
         flex-flow: column;

         #footer-menu--col {
            margin-left: 0;
            width: fit-content;
            display: flex;
            flex-flow: column;
            align-items: center;

            *  {
               width: fit-content;
            }

            .footer-menu--items {
               display: flex;
               flex-flow: column;
               align-items: center;
            }
         }

         #footer-menu--col:first-child {
            margin-bottom: 38px;
         }

         #footer-menu--col:last-child {
            margin-left: 0;
         }
      }
   }
`;
