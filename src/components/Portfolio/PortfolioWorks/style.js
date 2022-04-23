import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const PortfolioWorksEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 120px;

   #works {
      padding-top: 68px;
      
      select {
         border: 1px solid #F3D1BF;
      }
      
      .categories {
         .category {
            p {
               color: var(--text-dark--gray);  
            }
            a {
               color: var(--text-dark--gray);  
            }
         }
         .category-active {
            p {
               color: var(--text-dark);  
            }
            a {
               color: var(--text-dark);  
            }
         }
      }

      #image-grid {
         
         div:nth-of-type(1) {
            grid-column: 1/5;
            grid-row: 1/2;
         }
         div:nth-of-type(2) {
            grid-column: 5/9;
            grid-row: 1/2;
         }
         div:nth-of-type(3) {
            grid-column: 9/13;
            grid-row: 1/2;
         }
         div:nth-of-type(4) {
            grid-column: 1/5;
            grid-row: 2/3;
         }
         div:nth-of-type(5) {
            grid-column: 5/9;
            grid-row: 2/3;
         }
         div:nth-of-type(6) {
            grid-column: 9/13;
            grid-row: 2/3;
         }
         div:nth-of-type(7) {
            grid-column: 1/5;
            grid-row: 3/4;
         }
         div:nth-of-type(8) {
            grid-column: 5/9;
            grid-row: 3/4;
         }
         div:nth-of-type(9) {
            grid-column: 9/13;
            grid-row: 3/4;
         }
         div:nth-of-type(10) {
            grid-column: 1/5;
            grid-row: 4/5;
         }
         div:nth-of-type(11) {
            grid-column: 5/9;
            grid-row: 4/5;
         }
         div:nth-of-type(12) {
            grid-column: 9/13;
            grid-row: 4/5;
         }
         div:nth-of-type(13) {
            grid-column: 1/5;
            grid-row: 5/6;
         }
      }
   }

   @media screen and ${Device.laptop} {
      #works {
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
            div:nth-of-type(5) {
               grid-column: 1/7;
               grid-row: 3/4;
            }
            div:nth-of-type(6) {
               grid-column: 7/13;
               grid-row: 3/4;
            }
            div:nth-of-type(7) {
               grid-column: 1/7;
               grid-row: 4/5;
            }
            div:nth-of-type(8) {
               grid-column: 7/13;
               grid-row: 4/5;
            }
            div:nth-of-type(9) {
               grid-column: 1/7;
               grid-row: 5/6;
            }
            div:nth-of-type(10) {
               grid-column: 7/13;
               grid-row: 5/6;
            }
            div:nth-of-type(11) {
               grid-column: 1/7;
               grid-row: 6/7;
            }
            div:nth-of-type(12) {
               grid-column: 7/13;
               grid-row: 6/7;
            }
            div:nth-of-type(13) {
               grid-column: 1/7;
               grid-row: 7/8;
            }
         }
      }
   }
   @media screen and (max-width: 650px) {
      #works {
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
            div:nth-of-type(5) {
               grid-column: 1/7;
               grid-row: 5/6;
            }
            div:nth-of-type(6) {
               grid-column: 1/7;
               grid-row: 6/7;
            }
            div:nth-of-type(7) {
               grid-column: 1/7;
               grid-row: 7/8;
            }
            div:nth-of-type(8) {
               grid-column: 1/7;
               grid-row: 8/9;
            }
            div:nth-of-type(9) {
               grid-column: 1/7;
               grid-row: 9/10;
            }
            div:nth-of-type(10) {
               grid-column: 1/7;
               grid-row: 10/11;
            }
            div:nth-of-type(11) {
               grid-column: 1/7;
               grid-row: 11/12;
            }
            div:nth-of-type(12) {
               grid-column: 1/7;
               grid-row: 12/13;
            }
            div:nth-of-type(13) {
               grid-column: 1/7;
               grid-row: 13/14;
            }
         }
      }
   }
   @media screen and ${Device.mobileL} {
      #works {
         #image-grid {
            div:nth-of-type(1) {
               grid-column: 1/5;
            }
            div:nth-of-type(2) {
               grid-column: 1/5;
            }
            div:nth-of-type(3) {
               grid-column: 1/5;
            }
            div:nth-of-type(4) {
               grid-column: 1/5;
            }
            div:nth-of-type(5) {
               grid-column: 1/5;
            }
            div:nth-of-type(6) {
               grid-column: 1/5;
            }
            div:nth-of-type(7) {
               grid-column: 1/5;
            }
            div:nth-of-type(8) {
               grid-column: 1/5;
            }
            div:nth-of-type(9) {
               grid-column: 1/5;
            }
            div:nth-of-type(10) {
               grid-column: 1/5;
            }
            div:nth-of-type(11) {
               grid-column: 1/5;
            }
            div:nth-of-type(12) {
               grid-column: 1/5;
            }
            div:nth-of-type(13) {
               grid-column: 1/5;
            }
         }
      }
   }
`;
