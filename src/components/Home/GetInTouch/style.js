import Styled from "styled-components";
import Map from "../../../assets/Images/map.png";
import { Device } from "../../Styles/Devices";

export const GetInTouchEl = Styled.div`
   background-color: #FDF0E9;
   background-image: url(${Map});
   height: 620px;
   background-position: center;
   background-repeat: no-repeat;
   width: 100%;

   #container {
      height: 100%;
      
      .form-box {
         height: 100%;
         display: flex;
         align-items: center;
         
         form {
            padding: 52px 48px 48px 48px;
            background-color: #fff;
            max-width: 470px;
            border-radius: 6px;

            h4 {
               margin-bottom: 24px;
            }

            input {
               width: 100%;
            }

            select {
               margin-bottom: 16px;
            }

            input {
               margin-bottom: 16px;
            }

            textarea {
               width: 100%;
               height: 96px;
               background-color: #fff;
               color: #391400A3;
               border-radius: 6px;
               font-weight: 400;
               font-size: 16px;
               line-height: 32px;
               font-family: Epilogue;
               outline: none;
               border: 1px solid #F3D1BF;
               margin-bottom: 32px;
               padding: 9px 0 0 16px;
               resize: vertical;
            }

            .button {
               display: flex;
               justify-content: flex-end;
            }
         }
      }
   }

   @media screen and ${Device.mobileL} {
      #container {
         .form-box {
            form {
               padding: 52px 28px 48px 28px;
            }
         }
      }
   }
`;
