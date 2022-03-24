import React from "react";
import HomeAbout from "../components/Home/About/HomeAbout";
import BitMap from "../components/Home/BitMap/BitMap";
import Features from "../components/Home/Features/Features";
import { Header } from "../components/Home/Header/Header";
import SecondService from "../components/Home/SecondService/SecondService";
import Service from "../components/Home/Service/Service";
import VideoReel from "../components/Home/VideoReel/VideoReel";
import Experience from "../components/Static/Experience/Experience";
import StaticFeature from "../components/Static/Features/StaticFeature";
import HowWeWork from "../components/Static/HowWeWork/HowWeWork";
import { Navbar } from "../components/Static/Navbar/Navbar";
import { Heading } from "../components/Styles/Heading";

function Home() {
   return (
      <>
         <Navbar />
         <Header />
         <BitMap />
         <HomeAbout />
         <Experience />
         <HowWeWork
            link={
               <Heading
                  element="p"
                  elementType="text"
                  color="dark"
                  text="Read More"
               />
            }
         />
         <VideoReel />
         <Features />
         <StaticFeature />
         <Service />
         <SecondService />
      </>
   );
}

export default Home;
