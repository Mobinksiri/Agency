import React from "react";
import { Works } from "../../Static/Works/Works";
import { Container } from "../../Styles/Container";
import WorkImage1 from "../../../assets/Images/work-1.png";
import WorkImage2 from "../../../assets/Images/work-2.png";
import WorkImage3 from "../../../assets/Images/work-3.png";
import WorkImage4 from "../../../assets/Images/work-4.png";
import WorkImage5 from "../../../assets/Images/work-5.png";
import WorkImage6 from "../../../assets/Images/work-6.png";
import WorkImage7 from "../../../assets/Images/work-7.png";
import WorkImage8 from "../../../assets/Images/work-8.png";
import WorkImage9 from "../../../assets/Images/work-9.png";
import PortfolioWork from "../../Static/PortfolioWork/PortfolioWork";
import { PortfolioWorksEl } from "./style";
import PageNumbers from "../PageNumbers/PageNumbers";

const PortfolioWorks = () => {
   return (
      <PortfolioWorksEl>
         <Container>
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
                     <PortfolioWork
                        id="work5"
                        image={WorkImage5}
                        tag="Design"
                        name="Abstract"
                     />
                     <PortfolioWork
                        id="work6"
                        image={WorkImage6}
                        tag="Branding"
                        name="HandP"
                     />
                     <PortfolioWork
                        id="work7"
                        image={WorkImage7}
                        tag="Motion"
                        name="Architect"
                     />
                     <PortfolioWork
                        id="work8"
                        image={WorkImage8}
                        tag="Design"
                        name="CalC"
                     />
                     <PortfolioWork
                        id="work9"
                        image={WorkImage9}
                        tag="Branding"
                        name="Sport"
                     />
                  </>
               }
            />
            <PageNumbers />
         </Container>
      </PortfolioWorksEl>
   );
};

export default PortfolioWorks;
