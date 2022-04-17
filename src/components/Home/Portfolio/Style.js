import Styled from "styled-components";

export const PortfolioEl = Styled.div`
   background-color: #28293E;
   padding: 140px 0;

   #container {
      #title-layout {
         text-align: center;
         margin-bottom: 26px;
         
         p:last-child {
            display: none;
         }
      }

      .explore-button {
         display: flex;
         justify-content: center;
      }
   }
`;
