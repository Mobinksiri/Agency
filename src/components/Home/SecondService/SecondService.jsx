import React from "react";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { SecondServiceEl } from "./Style";
import { Container } from "../../Styles/Container";
import GridBorder from "../../Styles/GridBorder";
import serviceImage1 from "../../../assets/Images/home-second--service.png";
import serviceImage2 from "../../../assets/Images/home-second--service---2.png";
import serviceImage3 from "../../../assets/Images/home-second--service---3.png";
import { Heading } from "../../Styles/Heading";

const SecondService = () => {
   return (
      <SecondServiceEl>
         <Container>
            <div className="second-service--box">
               <TitleLayout
                  tag="Service"
                  title="How Our Agency Can Help"
                  titleColor="dark"
                  titleElement="h3"
                  titleElementType="h3"
                  paragraph=""
                  paragraphElement="a"
                  paragraphElementType=""
                  paragraphColor=""
               />
               <GridBorder
                  column="3"
                  size="33.333333333333333333333%"
                  divisions={
                     <>
                        <div className="design column">
                           <div className="information">
                              <img src={serviceImage1} alt="" />
                              <Heading
                                 text="Design"
                                 element="h4"
                                 elementType="h4"
                                 color="dark"
                              />
                              <Heading
                                 text="Agency provides a full service range including technical skills, design."
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                              />
                           </div>
                           <Heading
                              text="Learn More"
                              element="p"
                              elementType="text"
                              color="dark"
                           />
                        </div>
                        <div className="development column">
                           <div className="information">
                              <img src={serviceImage2} alt="" />
                              <Heading
                                 text="Development"
                                 element="h4"
                                 elementType="h4"
                                 color="dark"
                              />
                              <Heading
                                 text="Full service range including technical skills, design, business."
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                              />
                           </div>
                           <Heading
                              text="Discover More"
                              element="p"
                              elementType="text"
                              color="dark"
                           />
                        </div>
                        <div className="marketing column">
                           <div className="information">
                              <img src={serviceImage1} alt="" />
                              <Heading
                                 text="Marketing"
                                 element="h4"
                                 elementType="h4"
                                 color="dark"
                              />
                              <Heading
                                 text="Technical skills, design, business understanding, ability."
                                 element="p"
                                 elementType="text"
                                 color="dark-gray"
                              />
                           </div>
                           <Heading
                              text="Explore Now"
                              element="p"
                              elementType="text"
                              color="dark"
                           />
                        </div>
                     </>
                  }
               />
            </div>
         </Container>
      </SecondServiceEl>
   );
};

export default SecondService;
