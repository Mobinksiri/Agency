import React from "react";
import AboutComponent from "../components/About/AboutCol/AboutComponent";
import AboutImage from "../components/About/AboutImage/AboutImage";
import AboutOurTeam from "../components/About/AboutOurTeam/AboutOurTeam";
import BitMap from "../components/About/BitMap/BitMap";
import Faq from "../components/About/Faq/Faq";
import Features from "../components/About/Features/Features";
import Header from "../components/About/Header/Header";
import Testimonial from "../components/About/Testimonial/Testimonial";
import { Navbar } from "../components/Static/Navbar/Navbar";
import Footer from "../components/Static/Footer/Footer";
import AboutFooter from "../components/About/AboutFooter/AboutFooter";

const About = () => {
   return (
      <>
         <Navbar />
         <Header />
         <AboutComponent />
         <AboutImage />
         <Features />
         <AboutOurTeam />
         <Testimonial />
         <Faq />
         <BitMap />
         <AboutFooter />
      </>
   );
};

export default About;
