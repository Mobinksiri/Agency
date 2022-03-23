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
      console.log(window.innerWidth);
      if (window.innerWidth <= 425) {
         console.log("yes");
         setMobile(true);
      } else {
         console.log("no");
         setMobile(false);
      }
   };

   useEffect(() => {
      console.log(window.innerWidth);
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

      h1 {
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
            element={titleElement}
            elementType={
               titleElementType === "h1" && mobile ? "h2" : titleElementType
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
