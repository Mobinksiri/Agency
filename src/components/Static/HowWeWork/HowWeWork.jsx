import React from "react";
import { Container } from "../../Styles/Container";
import { Heading } from "../../Styles/Heading";
import TwoColumn from "../../Styles/TwoColumn";
import { TitleLayout } from "../TitleLayout/TitleLayout";
import { HowWeWorkEl } from "./Style";
import Line from "../../Styles/Line";

const HowWeWork = () => {
   return (
      <>
         <HowWeWorkEl>
            <Container>
               <div className="howWeWork-box">
                  <TwoColumn
                     left={
                        <>
                           <TitleLayout
                              tag="How we work"
                              title="Making Your Projects Look Awesome"
                              titleElement="h3"
                              titleElementType="h3"
                              titleColor="dark"
                              paragraph="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
                              paragraphElement="p"
                              paragraphElementType="text"
                              paragraphColor="dark-gray"
                              max-width="470px"
                           />
                           <Heading
                              element="p"
                              elementType="text"
                              color="dark"
                              text="Read More"
                           />
                        </>
                     }
                     right={
                        <div className="skills">
                           <div className="skill">
                              <Heading
                                 element="h1"
                                 elementType="h1"
                                 color="#391400"
                                 text="1"
                              />
                              <Heading
                                 element="h4"
                                 elementType="h4"
                                 color="dark"
                                 text="Full service range including"
                              />
                           </div>
                           <div className="skill">
                              <Heading
                                 element="h1"
                                 elementType="h1"
                                 color="#391400"
                                 text="2"
                              />
                              <Heading
                                 element="h4"
                                 elementType="h4"
                                 color="dark"
                                 text="Technical skills, design, business"
                              />
                           </div>
                           <div className="skill">
                              <Heading
                                 element="h1"
                                 elementType="h1"
                                 color="#391400"
                                 text="3"
                              />
                              <Heading
                                 element="h4"
                                 elementType="h4"
                                 color="dark"
                                 text="Themselves in the merchant's"
                              />
                           </div>
                        </div>
                     }
                  />
               </div>
               <Line />
            </Container>
         </HowWeWorkEl>
      </>
   );
};

export default HowWeWork;
