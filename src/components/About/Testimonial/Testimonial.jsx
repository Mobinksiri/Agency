import React from "react";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { Container } from "../../Styles/Container";
import { TestimonialEl } from "./style";
import Review from "../../Static/Review/Review";
import StarImage from "../../../assets/Images/star.png";
import Avatar1 from "../../../assets/Images/testimonial-avatar.png";
import Avatar2 from "../../../assets/Images/testimonial-avatar-2.png";
import Avatar3 from "../../../assets/Images/testimonial-avatar-3.png";
import Avatar4 from "../../../assets/Images/testimonial-avatar-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
   return (
      <TestimonialEl>
         <Container>
            <TitleLayout
               tag="Testimonials"
               title="What Our Clients Saying"
               titleElement="h2"
               titleElementType="h2"
               titleColor="light"
               paragraph="test"
               paragraphElement="p"
               paragraphElementType="text"
               paragraphColor="light"
            />
            <Swiper
               spaceBetween={0}
               slidesPerView={1}
               grabCursor={true}
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               pagination={{ clickable: true }}
            >
               <SwiperSlide>
                  <Review
                     activate={true}
                     star={StarImage}
                     paragraph="A digital agency is a business you hire to outsource your digital marketing efforts, digital solutions to promote your product or service online and help you."
                     avatar={Avatar1}
                     name="Alan Martí"
                     job="Meta Inc."
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Review
                     activate={true}
                     star={StarImage}
                     paragraph="Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety."
                     avatar={Avatar3}
                     name="Graham Griffiths"
                     job="Twitor"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Review
                     activate={true}
                     star={StarImage}
                     paragraph="Provide your business with a variety of digital solutions to promote your product or service online."
                     avatar={Avatar2}
                     name="Richardo Kann"
                     job="Photogram"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Review
                     activate={true}
                     star={StarImage}
                     paragraph="Promote your product or service online and help you hit your marketing goals and grow your business."
                     avatar={Avatar4}
                     name="Maria Trofimova"
                     job="Whochat"
                  />
               </SwiperSlide>
            </Swiper>
         </Container>
      </TestimonialEl>
   );
};

export default Testimonial;
