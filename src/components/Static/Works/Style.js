import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const WorksEl = Styled.div`
   margin-bottom: 64px;
   
   .categories {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      user-select: none;
      margin-bottom: 48px;

      .category {
         margin: 0 30px; 
         position: relative;
         cursor: pointer;
         padding: 20px;

         p, a {
            pointer-events: none;
            transition: 0.3s all;
         }
         
         a {
            position: absolute;
            top: 5px;
            right: 0;
         }
      }

      .category-active {

         p {
            color: var(--text-light);
         }
      }
   }

   #image-grid {

      #work1 {
         grid-column: 1/6;
         grid-row: 1/2;
      }
      #work2 {
         grid-column: 6/13;
         grid-row: 1/2;
      }
      #work3 {
         grid-column: 1/8;
         grid-row: 2/3;
      }
      #work4 {
         grid-column: 8/13;
         grid-row: 2/3;
      }
   }

   @media screen and ${Device.laptop} {
      #image-grid {

         #work1 {
            grid-column: 1/7;
            grid-row: 1/2;
         }
         #work2 {
            grid-column: 7/13;
            grid-row: 1/2;
         }
         #work3 {
            grid-column: 1/7;
            grid-row: 2/3;
         }
         #work4 {
            grid-column: 7/13;
            grid-row: 2/3;
         }
      }
   }

   @media screen and (max-width: 850px) {
      #image-grid {
         grid-auto-rows: 360px;
      }
   }
   @media screen and (max-width: 650px) {
      #image-grid {

         #work1 {
            grid-column: 1/7;
            grid-row: 1/2;
         }

         #work2 {
            grid-column: 1/7;
            grid-row: 2/3;
         }
         #work3 {
            grid-column: 1/7;
            grid-row: 3/4;
         }
         #work4 {
            grid-column: 1/7;
            grid-row: 4/5;
         }
      }
   }

   @media screen and ${Device.mobileL} {
      #image-grid {
         grid-auto-rows: 416px;

         #work1 {
            grid-column: 1/5;
            grid-row: 1/2;
         }

         #work2 {
            grid-column: 1/5;
            grid-row: 2/3;
         }
         #work3 {
            grid-column: 1/5;
            grid-row: 3/4;
         }
         #work4 {
            grid-column: 1/5;
            grid-row: 4/5;
         }
      }
   }
`;
