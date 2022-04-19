import React from "react";
import { PortfolioEl } from "./Style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Works } from "../../Static/Works/Works";
import Button from "../../Styles/Button";
import WorkImage1 from "../../../assets/Images/work-1.png";
import WorkImage2 from "../../../assets/Images/work-2.png";
import WorkImage3 from "../../../assets/Images/work-3.png";
import WorkImage4 from "../../../assets/Images/work-4.png";
import PortfolioWork from "../../Static/PortfolioWork/PortfolioWork";

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
            <Works
               images={
                  <>
                     <PortfolioWork
                        id="work1"
                        image={WorkImage1}
                        tag="Design"
                        name="SOFA"
                     />
                     <PortfolioWork
                        id="work2"
                        image={WorkImage2}
                        tag="Branding"
                        name="KeyBoard"
                     />
                     <PortfolioWork
                        id="work3"
                        image={WorkImage3}
                        tag="Illustration"
                        name="Work Media"
                     />
                     <PortfolioWork
                        id="work4"
                        image={WorkImage4}
                        tag="Motion"
                        name="DDDone"
                     />
                  </>
               }
            />
            <div className="explore-button">
               <Button type="outline" text="Explore More" padding="large" />
            </div>
         </Container>
      </PortfolioEl>
   );
};

export default Portfolio;
