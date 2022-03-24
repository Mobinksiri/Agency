import React from "react";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import { ServiceEl } from "./Style";
import ServiceImage from "../../../assets/Images/home-service--image.png";
import ServiceProfile from "../../../assets/Images/home-service--profile.png";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Heading } from "../../Styles/Heading";
import Button from "../../Styles/Button";

const Service = () => {
   return (
      <ServiceEl>
         <Container>
            <TwoColumn
               left={
                  <div className="image">
                     <img src={ServiceImage} alt="Services" />
                  </div>
               }
               right={
                  <>
                     <TitleLayout
                        tag="Service"
                        title="Making Complex Digital Products"
                        paragraph="Agency provides a full service range including technical skills, design, business."
                        titleElement="h2"
                        titleElementType="h2"
                        titleColor="dark"
                        paragraphElement="p"
                        paragraphElementType="text_big"
                        paragraphColor="dark"
                        maxWidth="470px"
                     />
                     <div className="profile">
                        <div className="profile-image">
                           <img src={ServiceProfile} alt="" />
                        </div>
                        <div className="profile-information">
                           <Heading
                              text='"Understanding, ability to put themselves in the merchant"s shoes. It is meant to partner."'
                              element="p"
                              elementType="text_small"
                              color="dark_gray"
                           />
                           <Heading
                              text="Jenny Murtaugh"
                              element="p"
                              elementType="text"
                              color="dark"
                           />
                        </div>
                     </div>
                     <div className="explore">
                        <Button
                           type="secondary"
                           text="Explore"
                           padding="large"
                        />
                     </div>
                  </>
               }
            />
         </Container>
      </ServiceEl>
   );
};

export default Service;
