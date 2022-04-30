import React from "react";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";
import { motion } from "framer-motion";
import { Heading } from "../../Styles/Heading";

const Work = Styled(motion.div)`
   width: 100%;
   position: relative;
   border-radius: 6px;
   overflow: hidden;
   padding: 32px;
   transform: scale(1);
   cursor: pointer;

   img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      z-index: 1;
   }

   .description {
      z-index: 100;
      position: absolute;
      left: 48px;
      bottom: 51px;

      p {
         display: inline-block;
         padding: 5px 16px 1px 16px;
         background-color: #fff;
         border-radius: 19px;
         margin-bottom: 20px;
      }

      h3 {
         text-transform: uppercase;
         max-width: 100%;
      }
   }

   @media screen and ${Device.mobileL} {
      .description {
         left: 28px;
      }
   }

`;

const PortfolioWork = ({ image, tag, name, id, click }) => {
   return (
      <Work
         animate={{ opacity: 1, scale: 1 }}
         initial={{ opacity: 0, scale: 0.96 }}
         exit={{ opacity: 0, scale: 0.96 }}
         transition={{ duration: 0.25 }}
         id={id}
         onClick={click}
      >
         <img src={image} alt="Work" />
         <div className="description">
            <Heading text={tag} element="p" elementType="text" color="dark" />
            <Heading text={name} element="h3" elementType="h3" color="light" />
         </div>
      </Work>
   );
};

export default PortfolioWork;
