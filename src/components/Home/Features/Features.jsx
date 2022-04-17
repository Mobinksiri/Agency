import React from "react";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import { FeaturesEl } from "./Style";
import FeaturesImage from "../../../assets/Images/features.png";
import { ReactComponent as CheckSvg } from "../../../assets/Images/check.svg";
import { Heading } from "../../Styles/Heading";

const Features = () => {
   return (
      <FeaturesEl>
         <Container>
            <TwoColumn
               left={
                  <>
                     <TitleLayout
                        tag="Features"
                        title="Give Your Site A New Look"
                        paragraph="Service range including technical skills, design, business understanding."
                        titleElement="h2"
                        titleElementType="h2"
                        titleColor="dark"
                        paragraphElement="p"
                        paragraphElementType="text_big"
                        paragraphColor="dark"
                        maxWidth="470px"
                     />
                     <div className="checks">
                        <div className="check">
                           <CheckSvg />
                           <Heading
                              element="p"
                              elementType="text"
                              color="dark-gray"
                              text="Range including technical skills"
                           />
                        </div>
                        <div className="check">
                           <CheckSvg />
                           <Heading
                              element="p"
                              elementType="text"
                              color="dark-gray"
                              text="Business understanding"
                           />
                        </div>
                        <div className="check">
                           <CheckSvg />
                           <Heading
                              element="p"
                              elementType="text"
                              color="dark-gray"
                              text="Partner on the long run"
                           />
                        </div>
                     </div>
                  </>
               }
               right={
                  <div className="image">
                     <img src={FeaturesImage} alt="Features" />
                  </div>
               }
            />
         </Container>
      </FeaturesEl>
   );
};

export default Features;
