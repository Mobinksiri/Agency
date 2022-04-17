import React from "react";
import BitMap1 from "../../../assets/Images/Bitmap-about-1.png";
import BitMap2 from "../../../assets/Images/Bitmap-about-2.png";
import BitMap3 from "../../../assets/Images/Bitmap-about-3.png";
import BitMap4 from "../../../assets/Images/Bitmap-about-4.png";
import BitMap5 from "../../../assets/Images/Bitmap-about-5.png";
import { Container } from "../../Styles/Container";
import { BitMapEl } from "./style";
import Line from "../../Styles/Line";

const BitMap = () => {
   return (
      <BitMapEl>
         <Container>
            <div className="bitmap-box">
               <img src={BitMap1} alt="bitMap" />
               <img src={BitMap2} alt="bitMap" />
               <img src={BitMap3} alt="bitMap" />
               <img src={BitMap4} alt="bitMap" />
               <img src={BitMap5} alt="bitMap" />
            </div>
         </Container>
      </BitMapEl>
   );
};

export default BitMap;
