import Styled from "styled-components";

export const Hamburger = Styled.div`
   width: 48px;
   height: 48px;
   
   .hamburger-box {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.295743);
      flex-flow: column;
      cursor: pointer;
      
      div {
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         width: 16px;
         height: 2px;
         border-radius: 15px;
         background-color: var(--text-light);
         margin-bottom: 4px;
         transition: 0.3s all;
      }

      div:first-child {
         top: calc(50% - 6px);
      }
      div:nth-of-type(2) {
         top: 50%;
      }
      div:last-child {
         margin-bottom: 0;
         top: calc(50% + 6px);
      }
   }

   .hamburger-active {
      
      div {
         left: 50%;
         transform: translate(-50%, -50%);
         margin-bottom: 0;
      }
      div:first-child {
         top: 50%;
         transform: translate(-50%, -50%) rotateZ(-45deg);
      }
      div:nth-of-type(2) {
         opacity: 0;
         top: 50%;
      }
      div:last-child {
         transform: translate(-50%, -50%) rotateZ(45deg);
         top: 50%;
      }
   }
`;
