import React from "react";
import Header from "../components/Services/Header/Header";
import { Navbar } from "../components/Static/Navbar/Navbar";
import ServicesComponent from "../components/Services/ServicesComponent/ServicesComponent";
import Categories from "../components/Services/Category/Categories";
import HowWeWork from "../components/Static/HowWeWork/HowWeWork";
import Footer from "../components/Static/Footer/Footer";

const Services = () => {
   return (
      <>
         <Navbar />
         <Header />
         <ServicesComponent />
         <Categories />
         <HowWeWork />
         <Footer />
      </>
   );
};

export default Services;
