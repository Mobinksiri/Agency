import React from "react";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";
import { Heading } from "../../Styles/Heading";

const Award = ({ image, title, date, logoImage, logoName }) => {
   const AwardEl = Styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      position: relative;

      #date {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }

      .dec {
         display: flex;
         align-items: center;
         justify-self: flex-start;
         
         img {
            width: 120px;
            margin-right: 24px;
            border-radius: 6px;
         }
      }

      .info {
         display: flex;
         align-items: center;
         justify-items: flex-end;

         img {
            margin-left: 24px;
         }
      }

      @media screen and ${Device.tablet} {
         flex-flow: column;
         padding: 31px 0;

         #date {
            position: static;
            transform: translate(0, 0);
            margin-bottom: 32px;
         }

         .dec {
            flex-flow: column;
            margin-bottom: 20px;

            img {
               margin-right: 0;
               margin-bottom: 26px;
               width: 180px;
            }
            
         }

         .info {
            flex-flow: column;
            align-items: center;

            p {
               margin-bottom: 15px;
            }

            img {
               margin-left: 0;
            }
         }
      }
      
      @media screen and ${Device.tablet} {

         #date {
            margin-bottom: 16px;
         }

         .dec {
            margin-bottom: 10px;

            img {
               width: 130px;
            }
            
         }

         .info {

            p {
               margin-bottom: 5px;
            }

         }
      }
   `;

   return (
      <AwardEl>
         <div className="dec">
            <img src={image} alt={title} />
            <Heading
               text={title}
               element="p"
               elementType="text-big"
               color="dark"
            />
         </div>
         <Heading
            id="date"
            text={date}
            element="p"
            elementType="text"
            color="dark-gray"
         />
         <div className="info">
            <Heading
               text={logoName}
               element="p"
               elementType="text"
               color="dark"
            />
            <img src={logoImage} alt="Logo" />
         </div>
      </AwardEl>
   );
};

export default Award;
