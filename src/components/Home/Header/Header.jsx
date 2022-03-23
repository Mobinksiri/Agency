import React from "react";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import { HeaderEl } from "./Style";
import HeaderImage from "../../../assets/Images/home-header--image.png";
import HeaderProfile from "../../../assets/Images/home-header--profile.png";
import HeaderStar from "../../../assets/Images/home-header--start.png";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import Button from "../../Styles/Button";
import { Heading } from "../../Styles/Heading";

export const Header = () => {
   return (
      <HeaderEl>
         <Container>
            <TwoColumn
               left={
                  <>
                     <img className="ellipse" src={HeaderStar} alt="Star" />
                     <div className="header-description">
                        <TitleLayout
                           title="We’re Help To Build Your Dream Project"
                           tag="Modern Studio"
                           paragraph="Agency provides a full service range including technical skills, design, business understanding."
                           maxWidth="513px"
                           titleElement="h1"
                           titleElementType="h1"
                           titleColor="light"
                           paragraphElement="p"
                           paragraphElementType="text"
                           paragraphColor="light"
                        />
                     </div>
                     <div className="header-description--buttons">
                        <Button
                           text="How We Work"
                           type="light-primary"
                           padding="small"
                        />
                        <Heading
                           element="p"
                           elementType="text"
                           color="light"
                           text="Contact Us"
                        />
                     </div>
                     <div className="header-description--profile">
                        <div className="header-description--profile---image">
                           <img src={HeaderProfile} alt="Meta Inc." />
                        </div>
                        <div className="header-description--profile---info">
                           <Heading
                              element="p"
                              elementType="text"
                              color="light-gray"
                              text='"Put themselves in the merchants shoes"'
                           />
                           <Heading
                              element="p"
                              elementType="text"
                              color="light"
                              text="Meta Inc."
                           />
                        </div>
                     </div>
                  </>
               }
               right={<img src={HeaderImage} />}
            />
         </Container>
      </HeaderEl>
   );
};
