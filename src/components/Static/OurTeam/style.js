import Styled from "styled-components";
import ArrowPrev from "../../../assets/Images/our-team-arrow-prev.png";
import ArrowNext from "../../../assets/Images/our-team-arrow-next.png";
import { Device } from "../../Styles/Devices";

export const OurTeamEl = Styled.div`
   background-color: #28293E;
   padding-bottom: 180px;

   #container {
      overflow: hidden;

      #title-layout {
         margin-bottom: 64px;
         
         p:last-child {
            display: none;
         }
      }
      
      .swiper {
         display: flex;
         flex-flow: column-reverse;
         overflow: visible;

         .swiper-button-prev, .swiper-button-next {
            left: unset;
            right: 0;
            top: -110px;
            border: 1px solid rgba(255, 255, 255, 0.295743);
            border-radius: 24px;
            width: 48px;
            height: 48px;
            transition: all 0.3s;

            &::after {
               display: none;
            }

            &::before {
               content: '';
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
               width: 14px;
               height: 9px;
            }  
            
         }

         .swiper-button-disabled {
            opacity: 0.5;
         }

         .swiper-button-prev {
            right: 64px;

            &::before {
               background: url(${ArrowPrev});
               background-repeat: no-repeat;
            }
         }

         .swiper-button-next {
            &::before {
               background: url(${ArrowNext});
               background-repeat: no-repeat;
            }
         }

         .swiper-pagination {
            position: static;

            .swiper-pagination-bullet {
               background-color: transparent;
               border: 1px solid #4E4F6E;
               opacity: 1;

               width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,12px));
               height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,12px));
            }

            .swiper-pagination-bullet-active {
               background-color: #EF6D58;
               border: 1px solid transparent;
            }
         }

         .swiper-wrapper {
            margin-bottom: 50px;
         }
         
      }
   }

   @media screen and ${Device.tablet} {
      #container {
         .swiper {
            .swiper-button-prev, .swiper-button-next {
               display: none;
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      padding-bottom: 110px;
      
      #container {
         #title-layout {
            margin-bottom: 30px;
         }

         .swiper {
            .swiper-wrapper {
               margin-bottom: 35px;
            }
         }
      }
   }
`;
