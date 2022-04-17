import React from "react";
import { ImageGrid } from "../../Styles/ImageGrid";
import Image1 from "../../../assets/Images/about-grid.png";
import Image2 from "../../../assets/Images/about-grid-2.png";
import Image3 from "../../../assets/Images/about-grid-3.png";
import Image4 from "../../../assets/Images/about-grid-4.png";
import Image5 from "../../../assets/Images/video-reel.png";
import { Container } from "../../Styles/Container";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

const AboutImageEl = Styled.div`
   background-color: #FDF0E9;
   padding-bottom: 125px;

   #container {
      #image-grid {
         grid-auto-rows: 180px;

         div {
            overflow: hidden;
            border-radius: 6px;
            
            img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
         }
         
         div:nth-of-type(1) {
            grid-column: 1/7;
            grid-row: 1/3;
         }

         div:nth-of-type(2) {
            grid-column: 7/10;
            grid-row: 1/2;
         }
         div:nth-of-type(3) {
            grid-column: 10/13;
            grid-row: 1/2;
         }
         div:nth-of-type(4) {
            grid-column: 7/10;
            grid-row: 2/3;
         }
         div:nth-of-type(5) {
            grid-column: 10/13;
            grid-row: 2/3;
         }
      }
   }

   @media screen and ${Device.laptop} {
      #container {
         #image-grid {
            grid-auto-rows: 210px;
            
            div:nth-of-type(1) {
               grid-column: 1/13;
               grid-row: 1/3;
            }

            div:nth-of-type(2) {
               grid-column: 1/7;
               grid-row: 3/4;
            }
            div:nth-of-type(3) {
               grid-column: 7/13;
               grid-row: 3/4;
            }
            div:nth-of-type(4) {
               grid-column: 1/7;
               grid-row: 4/5;
            }
            div:nth-of-type(5) {
               grid-column: 7/13;
               grid-row: 4/5;
            }
         }
      }
   }

   @media screen and (max-width: 650px) {
      #container {
         #image-grid {
            grid-gap: 25px;
            grid-auto-rows: 150px;
            
            div:nth-of-type(1) {
               grid-column: 1/7;
               grid-row: 1/3;
            }

            div:nth-of-type(2) {
               grid-column: 1/4;
               grid-row: 3/4;
            }
            div:nth-of-type(3) {
               grid-column: 4/7;
               grid-row: 3/4;
            }
            div:nth-of-type(4) {
               grid-column: 1/4;
               grid-row: 4/5;
            }
            div:nth-of-type(5) {
               grid-column: 4/7;
               grid-row: 4/5;
            }
         }
      }
   }
   @media screen and ${Device.mobileL} {
      padding-bottom: 85px;

      #container {
         #image-grid {
            grid-gap: 17px;
            grid-auto-rows: 120px;
            
            div:nth-of-type(1) {
               grid-column: 1/5;
               grid-row: 1/3;
            }

            div:nth-of-type(2) {
               grid-column: 1/3;
               grid-row: 3/4;
            }
            div:nth-of-type(3) {
               grid-column: 3/5;
               grid-row: 3/4;
            }
            div:nth-of-type(4) {
               grid-column: 1/3;
               grid-row: 4/5;
            }
            div:nth-of-type(5) {
               grid-column: 3/5;
               grid-row: 4/5;
            }
         }
      }
   }
`;

const AboutImage = () => {
   return (
      <AboutImageEl>
         <Container>
            <ImageGrid
               images={
                  <>
                     <div>
                        <img src={Image5} alt="video" />
                     </div>
                     <div>
                        <img src={Image1} alt="image" />
                     </div>
                     <div>
                        <img src={Image2} alt="image" />
                     </div>
                     <div>
                        <img src={Image3} alt="image" />
                     </div>
                     <div>
                        <img src={Image4} alt="image" />
                     </div>
                  </>
               }
            />
         </Container>
      </AboutImageEl>
   );
};

export default AboutImage;
