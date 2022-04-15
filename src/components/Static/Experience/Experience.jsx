import React from "react";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";
import GridBorder from "../../Styles/GridBorder";
import { Heading } from "../../Styles/Heading";
import { Container } from "../../Styles/Container";

const ExperienceEl = Styled.div`
      background-color: #FDF0E9 ;
      padding-bottom: 60px;

      @media screen and ${Device.mobileL} {
         padding-bottom: 20px;
      }
`;

const ExperienceDiv = Styled.div`
   
      h3 {
         margin-bottom: 13px;
      }
`;

const Experience = () => {
   return (
      <ExperienceEl>
         <Container>
            <GridBorder
               divisions={
                  <>
                     <ExperienceDiv>
                        <Heading
                           element="h3"
                           elementType="h3"
                           color="dark"
                           text="42%"
                        />
                        <Heading
                           element="p"
                           elementType="text_big"
                           color="dark"
                           text="Years of experience"
                        />
                     </ExperienceDiv>
                     <ExperienceDiv>
                        <Heading
                           element="h3"
                           elementType="h3"
                           color="dark"
                           text="73+"
                        />
                        <Heading
                           element="p"
                           elementType="text_big"
                           color="dark"
                           text="Agency members"
                        />
                     </ExperienceDiv>
                     <ExperienceDiv>
                        <Heading
                           element="h3"
                           elementType="h3"
                           color="dark"
                           text="5.000"
                        />
                        <Heading
                           element="p"
                           elementType="text_big"
                           color="dark"
                           text="Projects complete"
                        />
                     </ExperienceDiv>
                  </>
               }
               padding="45px 48px 38px 48px"
               column="3"
               size="33.33333333333%"
            />
         </Container>
      </ExperienceEl>
   );
};

export default Experience;
