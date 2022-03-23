import React from "react";
import Styled from "styled-components";

const Column = Styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;

   .rightSide {
      width: 49%;
   }

   .leftSide {
      width: 49%;
   }
`;

function TwoColumn({ left, right }) {
   return (
      <Column id="two-column">
         <div className="leftSide">{left}</div>
         <div className="rightSide">{right}</div>
      </Column>
   );
}

export default TwoColumn;
