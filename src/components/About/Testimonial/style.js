import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const TestimonialEl = Styled.div`
   background-color: #28293E;
   overflow: hidden;
   padding-bottom: 150px;

   #container {
      #title-layout {
         text-align: center;
         width: 100%;
         display: flex;
         align-items: center;
         margin-bottom: 64px;

         h2 {
            margin-bottom: 0;
         }
         
         * {
            max-width: 390px;
         }

         h5 {
            margin-bottom: 20px;
         }
         
         p {
            display: none;
         }
      }

      .swiper {
         overflow: visible;
         max-width: 700px;
         display: flex;
         flex-flow: column-reverse;

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
            margin-bottom: 64px;
            
            .swiper-slide {
               opacity: 0.2;
               transition: 0.2s all;
               
               #review {
                  height: auto;
                  min-height: 340px;
                  transition: 0.2s all;
               }
            }
            .swiper-slide-active {
               opacity: 1;
               
               #review {
                  height: auto;
                  min-height: 390px;
               }
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      #container {
         padding: 0;

         #title-layout {
            padding: 0 24px;
         }

         .swiper {
            .swiper-wrapper {
               margin-bottom: 48px;
            }
         }
      }
   }
   @media screen and ${Device.mobileM} {
      #container {

         #title-layout {
            padding: 0 16px;
         }
      }
   }
`;
