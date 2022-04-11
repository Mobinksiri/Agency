import React from "react";
import { Heading } from "../../Styles/Heading";
import { OurTeamItemEl } from "./OurTeamStyle";

const OurTeamItem = ({ image, name, job }) => {
   return (
      <OurTeamItemEl className="our-team--item">
         <div className="our-team--item---head">
            <img src={image} alt="" />
         </div>
         <div className="our-team--item---information">
            <Heading text={name} element="h4" elementType="h4" color="light" />
            <Heading text={job} element="p" elementType="text" color="light" />
         </div>
      </OurTeamItemEl>
   );
};

export default OurTeamItem;
