import React from "react";
import { AwardsEl } from "./style";
import { Container } from "../../Styles/Container";
import { Heading } from "../../Styles/Heading";
import Line from "../../Styles/Line";
import Award from "./Award";
import AwardsImage1 from "../../../assets/Images/work-1.png";
import AwardsImage2 from "../../../assets/Images/work-2.png";
import AwardsImage3 from "../../../assets/Images/work-3.png";
import AwardLogo1 from "../../../assets/Images/award-logo-1.png";
import AwardLogo2 from "../../../assets/Images/award-logo-2.png";
import AwardLogo3 from "../../../assets/Images/award-logo-3.png";

const Awards = () => {
   return (
      <AwardsEl>
         <Container>
            <Heading
               id="our-awards--title"
               text="Our Awards"
               element="h3"
               elementType="h3"
               color="dark"
            />
            <div className="awards-ul">
               <Line />
               <Award
                  image={AwardsImage1}
                  title="SOFA"
                  date="25 Oct, 2021"
                  logoName="Awwwards"
                  logoImage={AwardLogo1}
               />
               <Line />
               <Award
                  image={AwardsImage2}
                  title="KeyBoard"
                  date="19 Oct, 2021"
                  logoName="CSS Design Awards"
                  logoImage={AwardLogo2}
               />
               <Line />
               <Award
                  image={AwardsImage3}
                  title="Work Media"
                  date="7 Oct, 2021"
                  logoName="The FWA"
                  logoImage={AwardLogo3}
               />
               <Line />
            </div>
            <div className="more-awards">
               <Heading
                  id="more"
                  text="Want more awards?"
                  element="p"
                  elementType="text"
                  color="dark-gray"
               />
               <Heading
                  text="Explore Now"
                  element="a"
                  elementType="text"
                  color="dark"
               />
            </div>
         </Container>
      </AwardsEl>
   );
};

export default Awards;
