import React from "react";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../TitleLayout/TitleLayout";
import OurTeamItem from "./OurTeamItem";
import { OurTeamEl } from "./style";
import OurTeamImage1 from "../../../assets/Images/our-team-1.png";
import OurTeamImage2 from "../../../assets/Images/our-team-2.png";
import OurTeamImage3 from "../../../assets/Images/our-team-3.png";
import OurTeamImage4 from "../../../assets/Images/our-team-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurTeam = () => {
   return (
      <OurTeamEl id="our-team">
         <Container>
            <TitleLayout
               tag="Our Team"
               title="Team of Designers and Developers"
               titleElement="h2"
               titleElementType="h2"
               titleColor="light"
               paragraph="text"
               paragraphElement="p"
               paragraphElementType="text"
               paragraphColor="light"
               maxWidth="531px"
            />
            <Swiper
               spaceBetween={30}
               grabCursor={true}
               breakpoints={{
                  // when window width is >= 1200px
                  1200: {
                     maxWidth: 1200,
                     slidesPerView: 4,
                  },
                  1024: {
                     maxWidth: 768,
                     slidesPerView: 3,
                  },
                  770: {
                     maxWidth: 770,
                     slidesPerView: 3,
                  },
                  550: {
                     maxWidth: 550,
                     slidesPerView: 2,
                  },
                  1: {
                     maxWidth: 1,
                     slidesPerView: 1,
                  },
               }}
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               navigation
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
            >
               <SwiperSlide>
                  <OurTeamItem
                     image={OurTeamImage1}
                     name="Azah Anyeni"
                     job="Designer"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamItem
                     image={OurTeamImage2}
                     name="Roelof Bekkenenks"
                     job="React Developer"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamItem
                     image={OurTeamImage3}
                     name="Leonardo Oliveira"
                     job="Illustrator"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamItem
                     image={OurTeamImage4}
                     name="Izabella Tabakova"
                     job="Product Designer"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamItem
                     image={OurTeamImage1}
                     name="Azah Anyeni"
                     job="Designer"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <OurTeamItem
                     image={OurTeamImage2}
                     name="Roelof Bekkenenks"
                     job="React Developer"
                  />
               </SwiperSlide>
            </Swiper>
         </Container>
      </OurTeamEl>
   );
};

export default OurTeam;
