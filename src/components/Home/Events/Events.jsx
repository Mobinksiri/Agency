import React from "react";
import { EventsEl } from "./style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import EventsGrid from "./EventsGrid";
import Button from "../../Styles/Button";
import { Link } from "react-router-dom";

const Events = () => {
   return (
      <EventsEl>
         <Container>
            <TitleLayout
               tag="Events"
               title="Explore Future Conferences"
               titleElement="h2"
               titleElementType="h2"
               titleColor="light"
               paragraph="text"
               paragraphElement="p"
               paragraphElementType="text"
               paragraphColor="light"
            />
            <EventsGrid />
            <div className="button">
               <Link to="/portfolio">
                  <Button type="outline" padding="small" text="Explore More" />
               </Link>
            </div>
         </Container>
      </EventsEl>
   );
};

export default Events;
