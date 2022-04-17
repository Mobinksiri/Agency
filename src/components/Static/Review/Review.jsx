import React, { useState, useEffect } from "react";
import { Heading } from "../../Styles/Heading";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

const ReviewEl = Styled.div`
      padding: 48px;
      width: 100%;
      /* height: fit-content; */
      background-color: ${(props) => props.color};
      display: inline-block;
      box-shadow: ${(props) => props.shadow};

      img.star {
         margin-bottom: 36px;
      }

      p {
         margin-bottom: 36px;
      }

      .profile {
         display: flex;
         align-items: center;

         img.avatar {
            align-self: center;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-right: 24px;
         }

         p {
            margin-bottom: 0;
         }
      }

      @media screen and ${Device.mobileL} {
         padding: 49px 28px 34px 28px;
      }
`;

const Review = ({ star, paragraph, name, avatar, job, activate }) => {
   const [color, setColor] = useState("");
   const [shadow, setShadow] = useState("");

   const checkActiveHandler = () => {
      if (activate) {
         setColor("#fff");
         setShadow("0px 32px 64px rgba(57, 20, 0, 0.04)");
      } else {
         setColor("transparent");
         setShadow("none");
      }
   };

   useEffect(() => {
      checkActiveHandler();
   }, []);

   return (
      <ReviewEl color={color} shadow={shadow} id="review">
         <img className="star" src={star} alt="" />
         <Heading
            text={paragraph}
            element="p"
            elementType="text"
            color="dark-gray"
         />
         <div className="profile">
            <img className="avatar" src={avatar} alt={name} />
            <div className="profile-information">
               <Heading
                  text={name}
                  element="h4"
                  elementType="h4"
                  color="dark"
               />
               <Heading
                  text={job}
                  element="p"
                  elementType="text"
                  color="dark"
               />
            </div>
         </div>
      </ReviewEl>
   );
};

export default Review;
