import React from "react";
import Styled from "styled-components";
import Button from "../../Styles/Button";
import { Heading } from "../../Styles/Heading";
import PosterImage from "../../../assets/Images/poster.png";
import { Device } from "../../Styles/Devices";

const PosterEl = Styled.div`
   display: flex;
   align-items: center;
   padding: 38px 70px 72px 100px;
   background-color: #EF6D58;
   border-radius: 6px;
   margin-bottom: 80px;
   justify-content: space-between;

   .poster-dec {
      max-width: 470px;
      padding-top: 50px;

      h2 {
         margin-bottom: 28px;
      }

      p {
         margin-bottom: 34px;
      }
   }

   img {
      width: 450px;
      object-fit: cover;
   }

   @media screen and ${Device.laptop} {
      flex-flow: column-reverse;
      align-items: flex-start;
      padding: 80px;

      .poster-dec {
         max-width: 100%;
      }

      img {
         width: 100%;
         margin-bottom: 16px;
      }
   }

   @media screen and ${Device.tablet} {
      padding: 50px;
   }
   @media screen and ${Device.mobileL} {
      padding: 32px 28px 48px 28px;
   }
`;

const Poster = () => {
   return (
      <PosterEl>
         <div className="poster-dec">
            <Heading
               text="We’re Help To Build Your Dream Project"
               element="h2"
               elementType="h2"
               color="light"
            />
            <Heading
               text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Button type="secondary" padding="large" text="Contact Us" />
         </div>
         <img src={PosterImage} alt="Contact Us" />
      </PosterEl>
   );
};

export default Poster;
