import React from "react";
import Styled from "styled-components";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Container } from "../../Styles/Container";
import { Device } from "../../Styles/Devices";
import { Heading } from "../../Styles/Heading";
import TwoColumn from "../../Styles/TwoColumn";

const AboutComponentEl = Styled.div`
   background-color: #FDF0E9;
   padding: 76px 0 116px 0;   

   #container {

      #two-column {

         .leftSide {
            
            #title-layout {
               h5 {
                  margin-bottom: 20px;
               }
               p {
                  display: none;
               }
            }
         }

         .rightSide {
            margin-top: 68px;
         }
      }
   }

   @media screen and ${Device.laptop} {
      #container {

         #two-column {
            flex-flow: column;

            .leftSide {
               width: 100%;
               
               #title-layout {
                  h2 {
                     margin-bottom: 0;
                  }
               }
            }

            .rightSide {
               width: 100%;
               margin-top: 30px;
            }
         }
      }
   }
   @media screen and ${Device.mobileL} {
      padding: 76px 0 80px 0;
   }
`;

const AboutComponent = () => {
   return (
      <AboutComponentEl>
         <Container>
            <TwoColumn
               left={
                  <>
                     <TitleLayout
                        tag="About"
                        title="An Experience Design Agency"
                        titleElement="h2"
                        titleElementType="h2"
                        titleColor="dark"
                        paragraph="test"
                        paragraphElement="p"
                        paragraphColor="dark"
                     />
                  </>
               }
               right={
                  <>
                     <Heading
                        text="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                        element="p"
                        elementType="text"
                        color="dark-gray"
                     />
                     <br />
                     <Heading
                        text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
                        element="p"
                        elementType="text"
                        color="dark-gray"
                     />
                  </>
               }
            />
         </Container>
      </AboutComponentEl>
   );
};

export default AboutComponent;
