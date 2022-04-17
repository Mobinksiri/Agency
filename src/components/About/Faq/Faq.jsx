import React from "react";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Container } from "../../Styles/Container";
import { FaqEl } from "./style";
import FaqColumn from "../../Static/FaqColumn/FaqColumn";

const Faq = () => {
   return (
      <FaqEl>
         <Container>
            <div className="faq">
               <div className="faq-box">
                  <TitleLayout
                     tag="Faq"
                     title="Frequently Asked Questions"
                     titleElement="h3"
                     titleElementType="h3"
                     titleColor="light"
                     paragraph="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
                     paragraphElement="p"
                     paragraphElementType="text"
                     paragraphColor="light-gray"
                  />
                  <FaqColumn />
               </div>
            </div>
         </Container>
      </FaqEl>
   );
};

export default Faq;
