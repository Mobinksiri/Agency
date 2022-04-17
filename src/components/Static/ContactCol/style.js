import Styled from "styled-components";

export const ContactColEl = Styled.div`
   background-color: #FDF0E9;
   padding: 80px 0;

   #container {
      #grid-border {
         padding-bottom: 0;
         
         div {
            span {
               display: flex;
               align-items: center;
               margin-bottom: 26px;

               img {
                  width: 64px;
                  height: 64px;
                  margin-right: 24px;
               }

               h5 {
                  display: inline-block;
               }
            }
         }
      }
   }
`;
