import Styled from "styled-components";
import React from "react";
import StaticFeature from "../../Static/Features/StaticFeature";
import { Device } from "../../Styles/Devices";
import Experience from "../../Static/Experience/Experience";

const FeaturesEl = Styled.div`
   #static-feature {
      padding-bottom: 144px;
   }

   @media screen and ${Device.mobileL} {
      #static-feature {
         padding-bottom: 80px;
      }

      #experience {
         padding-bottom: 50px;
      }
   }
`;

const Features = () => {
   return (
      <FeaturesEl>
         <StaticFeature />
         <Experience />
      </FeaturesEl>
   );
};

export default Features;
