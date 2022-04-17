import React from "react";
import { FaqEl } from "./style";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Heading } from "../../Styles/Heading";
import FaqColumn from "../../Static/FaqColumn/FaqColumn";

const Faq = () => {
   return (
      <FaqEl>
         <Container>
            <TwoColumn
               left={
                  <>
                     <TitleLayout
                        tag="Faq"
                        title="Frequently Asked Questions"
                        titleElement="h3"
                        titleElementType="h3"
                        titleColor="dark"
                        paragraph="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
                        paragraphElement="p"
                        paragraphElementType="text"
                        paragraphColor="dark-gray"
                     />
                     <Heading
                        text="Contact Us"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                  </>
               }
               right={<FaqColumn theme="light" />}
            />
         </Container>
      </FaqEl>
   );
};

export default Faq;
