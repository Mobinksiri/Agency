import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Heading } from "../../Styles/Heading";
import { Device } from "../../Styles/Devices";

export const TitleLayout = ({
   tag,
   paragraph,
   title,
   maxWidth,
   titleElement,
   titleElementType,
   titleColor,
   paragraphElement,
   paragraphElementType,
   paragraphColor,
}) => {
   const [mobile, setMobile] = useState(null);
   const getWindowSize = () => {
      if (window.innerWidth <= 425) {
         setMobile(true);
      } else {
         setMobile(false);
      }
   };

   useEffect(() => {
      getWindowSize();
      window.addEventListener("resize", getWindowSize);
   }, []);

   const Layout = Styled.div`
      max-width: ${maxWidth};
      display: flex;
      flex-flow: column;

      p:first-child {
         margin-bottom: 24px;
      }

      h1, h2, h3, p {
         margin-bottom: 24px;
      }

      p:last-child {
         max-width: 470px;
      }
   `;
   return (
      <Layout id="title-layout">
         <Heading
            element="p"
            elementType="h5"
            color="light-accent"
            text={tag}
         />
         <Heading
            element={
               titleElement === "h1" && mobile
                  ? "h2"
                  : titleElement === "h2" && mobile
                  ? "h3"
                  : titleElement
            }
            elementType={
               titleElementType === "h1" && mobile
                  ? "h2"
                  : titleElementType === "h2" && mobile
                  ? "h3"
                  : titleElementType
            }
            color={titleColor}
            text={title}
         />
         <Heading
            element={paragraphElement}
            elementType={paragraphElementType}
            color={paragraphColor}
            text={paragraph}
         />
      </Layout>
   );
};
