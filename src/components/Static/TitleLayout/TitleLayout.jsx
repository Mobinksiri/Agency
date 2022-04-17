import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Heading } from "../../Styles/Heading";
import { Device } from "../../Styles/Devices";

const Layout = Styled.div`
      max-width: ${(props) => props.maxWidth};
      display: flex;
      flex-flow: column;

      h5 {
         margin-bottom: 20px;
      }

      h1, h2, h3, p {
         margin-bottom: 24px;
      }

      p:last-child {
         max-width: 470px;
      }
`;

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

   return (
      <Layout maxWidth={maxWidth} id="title-layout">
         <Heading
            element="h5"
            elementType="h5"
            color="light-accent"
            text={tag}
         />
         <Heading
            element={titleElement}
            elementType={titleElementType}
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
