import React from "react";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";
import { Heading } from "../../Styles/Heading";

const CopyRightEl = Styled.div`
   padding: 50px 0;
   display: flex;
   justify-content: space-between;

   .copy-right--items {
      display: flex;

      p:last-child {
         margin-left: 68px;
      }
   }

   @media screen and ${Device.tablet} {
      p {
         max-width: 250px;
      }
   }

   @media screen and (max-width: 600px) {
      flex-flow: column;
      
      p {
         max-width: 250px;
         max-width: 100%;
         margin-bottom: 30px;
      }

      .copy-right--items {
         p {
            margin-bottom: 0;
         }
      }
   }

   @media screen and ${Device.mobileL} {
      align-items: center;
      
      p {
         max-width: 200px;
         margin-bottom: 30px;
         text-align: center;
      }

      .copy-right--items {
         p {
            margin-bottom: 0;
         }
         p:last-child {
            margin-left: 48px;
         }
      }
   }
`;

const CopyRight = () => {
   return (
      <CopyRightEl>
         <Heading
            text="Copyright © 2022 Laaqiq. All Rights Reserved."
            element="p"
            elementType="text"
            color="dark-gray"
         />
         <div className="copy-right--items">
            <Heading
               text="Terms of Use"
               element="p"
               elementType="text"
               color="dark"
            />
            <Heading
               text="Privacy Policy"
               element="p"
               elementType="text"
               color="dark"
            />
         </div>
      </CopyRightEl>
   );
};

export default CopyRight;
