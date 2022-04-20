import React from "react";
import { Navbar } from "../components/Static/Navbar/Navbar";
import Header from "../components/Contact/Header/Header";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import ContactCol from "../components/Static/ContactCol/ContactCol";
import Faq from "../components/Contact/Faq/Faq";
import FooterMenu from "../components/Static/FooterMenu/FooterMenu";
import Footer from "../components/Contact/Footer/Footer";

const Contact = () => {
   return (
      <>
         <Navbar />
         <Header />
         <GetInTouch />
         <ContactCol />
         <Faq />
         <Footer />
      </>
   );
};

export default Contact;
