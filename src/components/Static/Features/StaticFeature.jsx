import React from "react";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import { TitleLayout } from "../TitleLayout/TitleLayout";
import { StaticFeatureEl } from "./Style";
import ProfessionalImage from "../../../assets/Images/professional.png";
import { Heading } from "../../Styles/Heading";

const StaticFeature = () => {
   return (
      <StaticFeatureEl>
         <Container>
            <TwoColumn
               left={
                  <TitleLayout
                     tag="Features"
                     title="Long run, and work as an extension of the merchant's team."
                     titleElement="p"
                     titleElementType="text_big"
                     titleColor="dark"
                     paragraph="Read More"
                     paragraphElement="p"
                     paragraphElementType="text"
                     paragraphColor="dark"
                     maxWidth="370px"
                  />
               }
               right={
                  <div className="feature-layout">
                     <div className="professional">
                        <img src={ProfessionalImage} alt="Professional" />
                        <Heading
                           text="Professional"
                           element="h4"
                           elementType="h4"
                           color="dark"
                        />
                        <Heading
                           text="Full service range including technical skills, design."
                           element="p"
                           elementType="text"
                           color="dark-gray"
                        />
                     </div>
                     <div className="accessibility">
                        <Heading
                           text="Accessibility"
                           element="h4"
                           elementType="h4"
                           color="dark"
                        />
                        <Heading
                           text="Business understanding, ability to put themselves."
                           element="p"
                           elementType="text"
                           color="dark-gray"
                        />
                     </div>
                  </div>
               }
            />
         </Container>
      </StaticFeatureEl>
   );
};

export default StaticFeature;
