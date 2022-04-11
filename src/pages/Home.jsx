import React from "react";
import HomeAbout from "../components/Home/About/HomeAbout";
import BitMap from "../components/Home/BitMap/BitMap";
import Events from "../components/Home/Events/Events";
import Features from "../components/Home/Features/Features";
import FounderWords from "../components/Home/FounderWords/FounderWords";
import { GetStarted } from "../components/Home/GetStarted/GetStarted";
import { Header } from "../components/Home/Header/Header";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import SecondService from "../components/Home/SecondService/SecondService";
import Service from "../components/Home/Service/Service";
import VideoReel from "../components/Home/VideoReel/VideoReel";
import Experience from "../components/Static/Experience/Experience";
import StaticFeature from "../components/Static/Features/StaticFeature";
import HowWeWork from "../components/Static/HowWeWork/HowWeWork";
import { Navbar } from "../components/Static/Navbar/Navbar";
import OurTeam from "../components/Static/OurTeam/OurTeam";

function Home() {
   return (
      <>
         <Navbar />
         <Header />
         <BitMap />
         <HomeAbout />
         <Experience />
         <HowWeWork />
         <VideoReel />
         <Features />
         <StaticFeature />
         <Service />
         <SecondService />
         <Portfolio />
         <GetStarted />
         <Events />
         <OurTeam />
         <FounderWords />
      </>
   );
}

export default Home;
