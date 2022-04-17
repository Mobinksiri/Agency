import React from "react";
import { Container } from "../../Styles/Container";
import { HomeAboutEl } from "./Style";
import TwoColumn from "../../../components/Styles/TwoColumn";
import { TitleLayout } from "../../../components/Static/TitleLayout/TitleLayout";
import Button from "../../../components/Styles/Button";

import AboutImage from "../../../assets/Images/home-about--image.png";
import { Link } from "react-router-dom";

const HomeAbout = () => {
   return (
      <HomeAboutEl>
         <Container>
            <TwoColumn
               left={<img src={AboutImage} alt="About the site" />}
               right={
                  <>
                     <TitleLayout
                        tag="About"
                        title="An Experience Design Agency"
                        titleElement="h2"
                        titleElementType="h2"
                        titleColor="dark"
                        paragraph="Provides a full service range"
                        paragraphElement="p"
                        paragraphElementType="text_big"
                        paragraphColor="dark"
                        maxWidth="470px"
                     />
                     <p className="paragraph">
                        Ability to put themselves in the merchant's shoes. It is
                        meant to partner on the long run, and work as an
                        extension of the merchant's team.
                     </p>
                     <Link to="/about">
                        <Button
                           type="secondary"
                           text="About Us"
                           padding="large"
                        />
                     </Link>
                  </>
               }
            />
         </Container>
      </HomeAboutEl>
   );
};

export default HomeAbout;
