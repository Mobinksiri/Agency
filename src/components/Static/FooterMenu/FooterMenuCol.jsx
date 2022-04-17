import React from "react";
import Styled from "styled-components";
import { Heading } from "../../Styles/Heading";

const FooterMenuColEl = Styled.div`
   h5 {
      margin-bottom: 16px;
   }
`;

const FooterMenuCol = ({ title, menuItems }) => {
   return (
      <FooterMenuColEl id="footer-menu--col">
         <Heading
            text={title}
            element="h5"
            elementType="h5"
            color="dark-accent"
         />
         <div className="footer-menu--items">{menuItems}</div>
      </FooterMenuColEl>
   );
};

export default FooterMenuCol;
