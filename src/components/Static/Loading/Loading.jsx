import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

const LoadingEl = Styled.span`
   position: relative;
   grid-column: 1/13;

   .loading-ellipse--box {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);

      .loading-ellipse {
         display: inline-block;
         width: 40px;
         height: 40px;
         background: transparent;
         border: 3px solid ${(props) => props.border};
         border-bottom: 3px solid ${(props) => props.borderBottom};
         border-radius: 50%;
         animation: Loading 1s infinite ;
         transform: rotateZ(0) translate(-50%, -50%);
         animation-direction: alternate;
      }
   }

   h3 {
      position: absolute;
      width: 100%;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 30px;
      color: ${(props) => props.color};
      font-size: 14px;
      letter-spacing: .3px;
   }

   @keyframes Loading {
      from {
         transform: rotateZ(0);
      }
      to {
         transform: rotateZ(360deg);
      }
   }
   
   @media screen and (max-width: 650px) {
      grid-column: 1/7;
   }
   @media screen and ${Device.mobileL} {
      grid-column: 1/5;
   }
`;

const Loading = ({ theme }) => {
   const [color, setColor] = useState("#fff");
   const [borderColor, setBorderColor] = useState({
      border: "rgba(255, 255, 255, 0.3)",
      borderBottom: "rgba(255, 255, 255, 0.9)",
   });

   const getThemeHandler = () => {
      if (theme === "light") {
         setColor("#fff");
         setBorderColor({
            border: "rgba(255, 255, 255, 0.3)",
            borderBottom: "rgba(255, 255, 255, 0.9)",
         });
      } else if (theme === "dark") {
         setColor("#333");
         setBorderColor({
            border: "rgba(40, 40, 40, 0.3)",
            borderBottom: "rgba(40, 40, 40, 0.9)",
         });
      }
   };

   useEffect(() => {
      getThemeHandler();
   }, []);

   return (
      <LoadingEl
         color={color}
         border={borderColor.border}
         borderBottom={borderColor.borderBottom}
      >
         <div className="loading-ellipse--box">
            <span className="loading-ellipse"></span>
         </div>
         <h3 className="warning">
            Receiving Data from FireBase...
            <br />
            Please Wait.
         </h3>
      </LoadingEl>
   );
};

export default Loading;
