import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Device } from "./Devices";

const HeadingStyle = Styled.h1`
   font-weight: ${(props) => props.weight};
   font-size: ${(props) => props.size};
   line-height: ${(props) => props.lineHeight};
   letter-spacing: ${(props) => props.space};
   text-transform: ${(props) => props.transform};
   color: ${(props) => props.textColor};

   @media screen and ${Device.mobileL} {
      /* h1 */
      font-size: ${(props) => (props.elementType === "h1" ? "56px" : null)};
      line-height: ${(props) => (props.elementType === "h1" ? "64px" : null)};
      letter-spacing: ${(props) =>
         props.elementType === "h1" ? "-1px" : null};
      /* h2 */
      font-size: ${(props) => (props.elementType === "h2" ? "40px" : null)};
      line-height: ${(props) => (props.elementType === "h2" ? "48px" : null)};
      letter-spacing: ${(props) => (props.elementType === "h2" ? "0" : null)};
      /* h3 */
      font-size: ${(props) => (props.elementType === "h3" ? "24px" : null)};
      line-height: ${(props) => (props.elementType === "h3" ? "32px" : null)};
      font-weight: ${(props) => (props.elementType === "h3" ? "700" : null)};
   }
`;

export const Heading = ({ text, color, element, elementType, id, click }) => {
   const [weight, setWeight] = useState();
   const [size, setSize] = useState();
   const [lineHeight, setLineHeight] = useState();
   const [transform, setTransform] = useState("unset");
   const [space, setSpace] = useState("unset");
   const [textColor, setTextColor] = useState();

   // const getResponseData = () => {
   //    if (mobile && elementType === "h1") {
   //       elementType = "h2";
   //    } else if (mobile && elementType === "h2") {
   //       elementType = "h3";
   //    } else if (mobile && elementType === "h3") {
   //       elementType = "h4";
   //    }
   // };

   const getStyle = () => {
      switch (elementType) {
         case "h1":
            setWeight(800);
            setSize("72px");
            setLineHeight("80px");
            setSpace("-2px");
            break;
         case "h2":
            setWeight(800);
            setSize("56px");
            setLineHeight("64px");
            setSpace("-1px");
            break;
         case "h3":
            setWeight(800);
            setSize("40px");
            setLineHeight("48px");
            break;
         case "h4":
            setWeight(700);
            setSize("24px");
            setLineHeight("32px");
            break;
         case "h5":
            setWeight(400);
            setSize("16px");
            setLineHeight("32px");
            setTransform("uppercase");
            setSpace("3px");
            break;
         case "label":
            setWeight(700);
            setSize("12px");
            setLineHeight("12px");
            setTransform("uppercase");
            break;
         case "text_big":
            setWeight(400);
            setSize("20px");
            setLineHeight("32px");
            break;
         case "text":
            setWeight(400);
            setSize("16px");
            setLineHeight("32px");
            break;
         case "text_small":
            setWeight(400);
            setSize("14px");
            setLineHeight("24px");
            break;
         default:
            break;
      }
   };

   const getColor = () => {
      switch (color) {
         case "dark":
            setTextColor("var(--text-dark)");
            break;
         case "dark-accent":
            setTextColor("var(--text-dark--accent)");
            break;
         case "dark-gray":
            setTextColor("var(--text-dark--gray)");
            break;
         case "light":
            setTextColor("var(--text-light)");
            break;
         case "light-accent":
            setTextColor("var(--text-light--accent)");
            break;
         case "light-gray":
            setTextColor("var(--text-light--gray)");
            break;
         default:
            break;
      }
   };

   useEffect(() => {
      getColor();
      getStyle();
   }, []);

   return (
      <HeadingStyle
         onClick={click}
         as={element}
         weight={weight}
         size={size}
         lineHeight={lineHeight}
         transform={transform}
         space={space}
         textColor={textColor}
         id={id}
         elementType={elementType}
      >
         {text}
      </HeadingStyle>
   );
};
