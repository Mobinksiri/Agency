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
         #work1 {
            grid-column: 1/5;
            grid-row: 1/2;
         }
         #work2 {
            grid-column: 5/9;
            grid-row: 1/2;
         }
         #work3 {
            grid-column: 9/13;
            grid-row: 1/2;
         }
         #work4 {
            grid-column: 1/5;
            grid-row: 2/3;
         }
         #work5 {
            grid-column: 5/9;
            grid-row: 2/3;
         }
         #work6 {
            grid-column: 9/13;
            grid-row: 2/3;
         }
         #work7 {
            grid-column: 1/5;
            grid-row: 3/4;
         }
         #work8 {
            grid-column: 5/9;
            grid-row: 3/4;
         }
         #work9 {
            grid-column: 9/13;
            grid-row: 3/4;
         }
      }
   }

   @media screen and ${Device.laptop} {
      #works {
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
            #work5 {
               grid-column: 1/7;
               grid-row: 3/4;
            }
            #work6 {
               grid-column: 7/13;
               grid-row: 3/4;
            }
            #work7 {
               grid-column: 1/7;
               grid-row: 4/5;
            }
            #work8 {
               grid-column: 7/13;
               grid-row: 4/5;
            }
            #work9 {
               grid-column: 1/7;
               grid-row: 5/6;
            }
         }
      }
   }
   @media screen and (max-width: 650px) {
      #works {
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
            #work5 {
               grid-column: 1/7;
               grid-row: 5/6;
            }
            #work6 {
               grid-column: 1/7;
               grid-row: 6/7;
            }
            #work7 {
               grid-column: 1/7;
               grid-row: 7/8;
            }
            #work8 {
               grid-column: 1/7;
               grid-row: 8/9;
            }
            #work9 {
               grid-column: 1/7;
               grid-row: 9/10;
            }
         }
      }
   }
   @media screen and ${Device.mobileL} {
      #works {
         #image-grid {
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
            #work5 {
               grid-column: 1/5;
               grid-row: 5/6;
            }
            #work6 {
               grid-column: 1/5;
               grid-row: 6/7;
            }
            #work7 {
               grid-column: 1/5;
               grid-row: 7/8;
            }
            #work8 {
               grid-column: 1/5;
               grid-row: 8/9;
            }
            #work9 {
               grid-column: 1/5;
               grid-row: 9/10;
            }
         }
      }
   }
`;
