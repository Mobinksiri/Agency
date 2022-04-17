import React from "react";
import { FounderWordsEl } from "./style";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import Image from "../../../assets/Images/founder-words.png";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Heading } from "../../Styles/Heading";

const FounderWords = () => {
   return (
      <FounderWordsEl>
         <Container>
            <TwoColumn
               left={<img src={Image} alt="Founder Words" />}
               right={
                  <>
                     <TitleLayout
                        tag="Founder Words"
                        title="Digital agency is a business you hire to outsource your digital marketing efforts"
                        titleElement="h3"
                        titleElementType="h3"
                        titleColor="light"
                        paragraph="Ren Delan"
                        paragraphElement="p"
                        paragraphElementType="text-big"
                        paragraphColor="light"
                     />
                     <Heading
                        text="Founder"
                        element="p"
                        elementType="text-small"
                        color="light-gray"
                     />
                  </>
               }
            />
         </Container>
      </FounderWordsEl>
   );
};

export default FounderWords;
