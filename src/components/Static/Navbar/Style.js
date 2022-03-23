import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const NavbarEl = Styled.div`
   width: 100%;
   background-color: #28293E;

   .navbar-box {
      display: flex;
      justify-content: space-between;
      padding: 22px 0;
      position: relative;

      .navbar-ul {
         display: flex;
         align-items: center;

         &--item:last-child {
            margin-right: 0;
         }

         &--item {
            margin-right: 100px;
         }
      }

      .hamburger-items {
         position: absolute;
         width: 40%;
         right: 0;
         top: 86px;
         background-color: #28293E;
         border: 1px solid rgba(255, 255, 255, 0.295743);
         padding: 17px;
         border-radius: 6px;
         box-shadow: 0px 3px 9px rgba(57, 20, 0, 0.2);
         transition: 0.2s all;
         transform: translateY(-10px);
         opacity: 0;
         pointer-events: none;

         .hamburger-item {
            margin-bottom: 7px;
         }

         .hamburger-item:last-child {
            margin-top: 20px;
            margin-bottom: 0;
         }
      }

      .hamburger-items--active {
         transform: translateY(0);
         opacity: 1;
         pointer-events: visible;
      }
   }
   
   @media screen and (max-width: 1200px) {
      .navbar-box {
         .navbar-ul {
            &--item {
               margin-right: 60px;
            }
         }
      }
   }

   @media screen and ${Device.tablet} {
      .navbar-box {
         .hamburger-items {
            width: 50%;
         }
      }
   }

   @media screen and ${Device.mobileL} {
      .navbar-box {
         .hamburger-items {
            width: 100%;
         }
      }
   }

   @media screen and ${Device.mobileM} {
      .navbar-box {
         padding: 16px 0;
      }
   }
`;
