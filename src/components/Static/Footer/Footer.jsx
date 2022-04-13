import React from "react";
import { FooterEl } from "./style";
import { Container } from "../../Styles/Container";
import Poster from "../Poster/Poster";

const Footer = () => {
   return (
      <FooterEl>
         <Container>
            <Poster />
         </Container>
      </FooterEl>
   );
};

export default Footer;
