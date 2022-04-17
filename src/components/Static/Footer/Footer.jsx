import React from "react";
import { FooterEl } from "./style";
import { Container } from "../../Styles/Container";
import Poster from "../Poster/Poster";
import FooterMenu from "../FooterMenu/FooterMenu";
import Line from "../../Styles/Line";
import CopyRight from "../FooterMenu/CopyRight";

const Footer = () => {
   return (
      <FooterEl id="footer">
         <Container>
            <Poster />
            <FooterMenu />
            <Line />
            <CopyRight />
         </Container>
      </FooterEl>
   );
};

export default Footer;
