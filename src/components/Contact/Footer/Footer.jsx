import React from "react";
import Styled from "styled-components";
import FooterMenu from "../../Static/FooterMenu/FooterMenu";
import { Container } from "../../Styles/Container";
import Line from "../../Styles/Line";
import CopyRight from "../../Static/FooterMenu/CopyRight";

const FooterEl = Styled.div`
   background-color: #FDF0E9;

   #footer-navbar {
      margin-bottom: 0;
      padding: 80px 0 70px 0;
   }
`;

const Footer = () => {
   return (
      <FooterEl>
         <Container>
            <FooterMenu />
            <Line />
            <CopyRight />
         </Container>
      </FooterEl>
   );
};

export default Footer;
