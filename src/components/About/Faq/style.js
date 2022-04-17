import Styled from "styled-components";

export const FaqEl = Styled.div`
   background-color: #28293E;
   padding-bottom: 100px;

   #container {
      .faq {
         display: flex;
         align-items: center;
         justify-content: center;

         &-box {
            width: 700px;

            #faq-column {
               border: 1px solid #3A3C56;

               #faq.active {
                  .faq-head {
                     h4 {
                        color: var(--text-dark);
                     }
                  }
               }
               
               #faq {
                  border-bottom: 1px solid #3A3C56;

                  .faq-head {
                     h4 {
                        color: #fff;
                     }
                  }
               }
            }
         }
      }
   }
`;
