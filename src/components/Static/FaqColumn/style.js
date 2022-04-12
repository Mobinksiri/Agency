import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const FaqColumnEl = Styled.div`
      border: 1px solid #F3D1BF;
      border-radius: 6px;
      overflow: hidden;

      #faq {
         border-bottom: 1px solid #F3D1BF;
      }

      #faq:last-child {
         border-bottom: none;
      }

      .active {
         height: 100%;
         background-color: #fff;
         box-shadow: 0px 32px 64px rgba(57, 20, 0, 0.04);

         .faq-head {
            margin-bottom: 35px;

            h4 {
               color: var(--text-dark);
            }
            
            svg {
               transform: rotateZ(0)
            }
         }
      }

      @media screen and ${Device.mobileL} {
         .active {
            .faq-head {
               margin-bottom: 19px;
            }
         }
      }
`;
