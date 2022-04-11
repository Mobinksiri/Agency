import React from "react";
import { PortfolioEl } from "./Style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Works } from "../../Static/Works/Works";
import Button from "../../Styles/Button";

const Portfolio = () => {
   return (
      <PortfolioEl>
         <Container>
            <TitleLayout
               tag="Portfolio"
               title="Latest Work"
               titleElement="h2"
               titleElementType="h2"
               titleColor="light"
               paragraph=""
               paragraphElement="p"
               paragraphElementType="text"
               paragraphColor=""
            />
            <Works />
            <div className="explore-button">
               <Button type="outline" text="Explore More" padding="large" />
            </div>
         </Container>
      </PortfolioEl>
   );
};

export default Portfolio;
