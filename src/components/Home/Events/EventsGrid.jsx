import React from "react";
import Event from "./Event";

const EventsGrid = () => {
   return (
      <div className="events-grid">
         <Event
            num="3"
            date="November 2021"
            hour="9:00 am – 3:00 pm"
            bodyTitle="Design Weeks"
            bodyParagraph="Digital agency is a business you hire to outsource your digital."
         />
         <Event
            num="15"
            date="November 2021"
            hour="1:00 pm – 8:00 pm"
            bodyTitle="Interior Design"
            bodyParagraph="Marketing efforts, instead of handling in-house."
         />
         <Event
            num="2"
            date="December 2021"
            hour="10:00 am – 2:00 pm"
            bodyTitle="The F design events"
            bodyParagraph="Provide your business with a variety of digital solutions to promote."
         />
      </div>
   );
};

export default EventsGrid;
