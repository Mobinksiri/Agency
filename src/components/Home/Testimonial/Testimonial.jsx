import React from "react";
import { TestimonialEl } from "./style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import Review from "./Review";
import StarImage from "../../../assets/Images/star.png";
import Avatar1 from "../../../assets/Images/testimonial-avatar.png";
import Avatar2 from "../../../assets/Images/testimonial-avatar-2.png";
import Avatar3 from "../../../assets/Images/testimonial-avatar-3.png";
import Avatar4 from "../../../assets/Images/testimonial-avatar-4.png";
import Button from "../../Styles/Button";

const Testimonial = () => {
   return (
      <TestimonialEl>
         <Container>
            <TitleLayout
               tag="Testimonials"
               title="What Our Clients Saying"
               titleElement="h2"
               titleElementType="h2"
               titleColor="dark"
               paragraph="test"
               paragraphElement="a"
               paragraphElementType="text_big"
               paragraphColor="dark"
               maxWidth="100%"
            />
            <div className="reviews">
               <div className="first-group group">
                  <Review
                     activate={true}
                     star={StarImage}
                     paragraph="A digital agency is a business you hire to outsource your digital marketing efforts, digital solutions to promote your product or service online and help you."
                     avatar={Avatar1}
                     name="Alan Martí"
                     job="Meta Inc."
                  />
                  <Review
                     activate={false}
                     star={StarImage}
                     paragraph="Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety."
                     avatar={Avatar3}
                     name="Graham Griffiths"
                     job="Twitor"
                  />
               </div>
               <div className="second-group group">
                  <Review
                     activate={false}
                     star={StarImage}
                     paragraph="Provide your business with a variety of digital solutions to promote your product or service online."
                     avatar={Avatar2}
                     name="Richardo Kann"
                     job="Photogram"
                  />
                  <Review
                     activate={false}
                     star={StarImage}
                     paragraph="Promote your product or service online and help you hit your marketing goals and grow your business."
                     avatar={Avatar4}
                     name="Maria Trofimova"
                     job="Whochat"
                  />
               </div>
            </div>
            <div className="button">
               <Button type="secondary" padding="small" text="See All" />
            </div>
         </Container>
      </TestimonialEl>
   );
};

export default Testimonial;
