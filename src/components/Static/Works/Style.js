import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const WorksEl = Styled.div`
   margin-bottom: 64px;

   select {
      display: none;
   }
   
   .categories {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      user-select: none;
      margin-bottom: 48px;
      flex-direction: row;

      div:nth-of-type(1) {
         order: 2;
      }
      div:nth-of-type(2) {
         order: 3;
      }
      div:nth-of-type(3) {
         order: 4;
      }
      div:nth-of-type(4) {
         order: 5;
      }
      div:last-child {
         order: 1;
      }

      .category {
         margin: 0 15px; 
         position: relative;
         cursor: pointer;
         padding: 20px;

         .category-item {
            display: inline-block;
         }

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

         p, a {
            color: var(--text-light);
         }
      }
   }

   #image-grid {

      div:nth-of-type(1) {
         grid-column: 1/6;
         grid-row: 1/2;
      }
      div:nth-of-type(2) {
         grid-column: 6/13;
         grid-row: 1/2;
      }
      div:nth-of-type(3) {
         grid-column: 1/8;
         grid-row: 2/3;
      }
      div:nth-of-type(4) {
         grid-column: 8/13;
         grid-row: 2/3;
      }
   }

   @media screen and ${Device.laptop} {
      #image-grid {

         div:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 1/2;
         }
         div:nth-of-type(2) {
            grid-column: 7/13;
            grid-row: 1/2;
         }
         div:nth-of-type(3) {
            grid-column: 1/7;
            grid-row: 2/3;
         }
         div:nth-of-type(4) {
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

         div:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 1/2;
         }

         div:nth-of-type(2) {
            grid-column: 1/7;
            grid-row: 2/3;
         }
         div:nth-of-type(3) {
            grid-column: 1/7;
            grid-row: 3/4;
         }
         div:nth-of-type(4) {
            grid-column: 1/7;
            grid-row: 4/5;
         }
      }
   }

   @media screen and ${Device.mobileL} {

      .categories {
         display: none;
      }

      select {
         display: block;
      }
      
      #image-grid {
         grid-auto-rows: 416px;

         div:nth-of-type(1) {
            grid-column: 1/5;
            grid-row: 1/2;
         }

         div:nth-of-type(2) {
            grid-column: 1/5;
            grid-row: 2/3;
         }
         div:nth-of-type(3) {
            grid-column: 1/5;
            grid-row: 3/4;
         }
         div:nth-of-type(4) {
            grid-column: 1/5;
            grid-row: 4/5;
         }
      }
   }
`;
