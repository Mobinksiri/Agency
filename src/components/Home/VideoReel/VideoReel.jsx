import React from "react";
import { Container } from "../../Styles/Container";
import TwoColumn from "../../Styles/TwoColumn";
import VideoReelImage from "../../../assets/Images/video-reel.png";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import { VideoReelEl } from "./Style";

const VideoReel = () => {
   return (
      <VideoReelEl>
         <Container>
            <TwoColumn
               left={
                  <div className="image">
                     <img src={VideoReelImage} alt="video reel!" />
                  </div>
               }
               right={
                  <TitleLayout
                     tag="Video Reel"
                     title="Unlock The Greatest Value Possible"
                     paragraph="Design, business understanding, ability to put themselves in the merchant's shoes meant to partner."
                     titleElement="h3"
                     titleElementType="h3"
                     titleColor="dark"
                     paragraphElement="p"
                     paragraphElementType="text"
                     paragraphColor="dark-gray"
                  />
               }
            />
         </Container>
      </VideoReelEl>
   );
};

export default VideoReel;
