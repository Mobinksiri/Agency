import React from "react";
import Styled from "styled-components";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";

const HeaderEl = Styled.div`
   background-color: #28293E;
   padding: 80px 0 60px 0;
   display: flex;
   align-items: center;
      
   #container {
      #title-layout {
         text-align: center;
         display: flex;
         align-items: center;

         h1 {
            width: fit-content;
         }

         h5 {
            display: none;
         }

         p {
            max-width: 570px;
         }
      }
   }
   
`;

const Header = () => {
   return (
      <HeaderEl>
         <Container>
            <TitleLayout
               tag="test"
               title="About Us"
               titleElement="h1"
               titleElementType="h1"
               titleColor="light"
               paragraph="Agency provides a full service range including technical skills, design, business understanding."
               paragraphElement="p"
               paragraphElementType="text"
               paragraphColor="light-gray"
               maxWidth="100%"
            />
         </Container>
      </HeaderEl>
   );
};

export default Header;
