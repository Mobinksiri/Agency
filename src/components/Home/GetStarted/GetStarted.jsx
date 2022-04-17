import React from "react";
import { GetStartedEl } from "./Style";
import { Container } from "../../Styles/Container";
import Ellipse from "../../../assets/Images/ellipse-getstarrted.png";
import Image from "../../../assets/Images/get-started.png";
import Girl from "../../../assets/Images/girl.png";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import Button from "../../Styles/Button";

export const GetStarted = () => {
   return (
      <GetStartedEl>
         <Container>
            <div className="get-started">
               <img
                  src={Ellipse}
                  className="get-started--ellipse"
                  alt="get-started--ellipse"
               />
               <div className="get-started--info">
                  <TitleLayout
                     tag="Get Started"
                     title="We Help Companies Move Faster"
                     titleElement="h4"
                     titleElementType="h4"
                     titleColor="dark"
                     paragraph="text"
                     paragraphElement="p"
                     paragraphColor="dark"
                     maxWidth="248px"
                  />
                  <Button
                     type="light-primary"
                     text="Contact Us"
                     padding="small"
                  />
               </div>
               <img
                  src={Image}
                  className="get-started--image"
                  alt="get-started--image"
               />
               <img
                  src={Girl}
                  className="get-started--girl"
                  alt="get-started--image"
               />
            </div>
         </Container>
      </GetStartedEl>
   );
};
