import React from "react";
import { Heading } from "../../Styles/Heading";
import { ReactComponent as Shape } from "../../../assets/Images/hour-shape.svg";
import Line from "../../Styles/Line";

const Event = ({ num, date, hour, bodyTitle, bodyParagraph }) => {
   return (
      <div className="events-grid--event">
         <div className="events-grid--event---head">
            <div className="events-grid--event---head----date">
               <Heading
                  text={num}
                  element="h1"
                  elementType="h1"
                  color="light"
               />
               <Heading
                  text={date}
                  element="h4"
                  elementType="h4"
                  color="light"
               />
            </div>
            <div className="events-grid--event---head----hour">
               <Shape />
               <Heading
                  text={hour}
                  element="p"
                  elementType="text"
                  color="light"
               />
            </div>
         </div>
         <Line />
         <div className="events-grid--events---body">
            <Heading
               text={bodyTitle}
               element="h4"
               elementType="h4"
               color="light"
            />
            <Heading
               text={bodyParagraph}
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Heading
               text="Explore Now"
               element="a"
               elementType="text"
               color="light"
            />
         </div>
      </div>
   );
};

export default Event;
