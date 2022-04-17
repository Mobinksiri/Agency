import React from "react";
import OurTeam from "../../Static/OurTeam/OurTeam";
import Styled from "styled-components";

const AboutOurTeamEl = Styled.div`
   #our-team {
      padding: 90px 0 100px 0;
   }
`;

const AboutOurTeam = () => {
   return (
      <AboutOurTeamEl>
         <OurTeam />
      </AboutOurTeamEl>
   );
};

export default AboutOurTeam;
