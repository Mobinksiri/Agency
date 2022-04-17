import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const BitMapEl = Styled.div`
   width: 100%;
   background-color: #28293E;
   padding-bottom: 100px;

   .bitmap-box {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;

      img {
         align-self: center;
         padding: 20px;
      }

      img:last-child {
         padding: 20px 0 20px 20px;
      }

      img:first-child {
         padding: 20px 20px 20px 0;
      }
   }

   @media screen and (max-width: 850px) {
      .bitmap-box {
         justify-content: flex-start;
      }
   }

   @media screen and ${Device.mobileL} {
      .bitmap-box {
         padding: 27px 0;
         justify-content: center;
      }
   }
`;
