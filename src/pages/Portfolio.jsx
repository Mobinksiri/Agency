import React from "react";
import Header from "../components/Portfolio/Header/Header";
import PortfolioWorks from "../components/Portfolio/PortfolioWorks/PortfolioWorks";
import { Navbar } from "../components/Static/Navbar/Navbar";
import Footer from "../components/Static/Footer/Footer";

const Portfolio = () => {
   return (
      <>
         <Navbar />
         <Header />
         <PortfolioWorks />
         <Footer />
      </>
   );
};

export default Portfolio;
