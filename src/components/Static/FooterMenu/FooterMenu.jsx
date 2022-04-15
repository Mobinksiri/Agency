import React from "react";
import { Heading } from "../../Styles/Heading";
import FooterMenuCol from "./FooterMenuCol";
import { FooterMenuEl } from "./style";
import { ReactComponent as Twitter } from "../../../assets/Images/Twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/Images/Instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/Images/Facebook.svg";

const FooterMenu = () => {
   return (
      <FooterMenuEl>
         <Heading text="Agency" element="h4" elementType="h4" color="dark" />
         <div className="footer-menu--ul">
            <FooterMenuCol
               title="Menu"
               menuItems={
                  <>
                     <Heading
                        text="About"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                     <Heading
                        text="Service"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                     <Heading
                        text="Blog"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                     <Heading
                        text="Contact"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                  </>
               }
            />
            <FooterMenuCol
               title="Service"
               menuItems={
                  <>
                     <Heading
                        text="Design"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                     <Heading
                        text="Development"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                     <Heading
                        text="Marketing"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                     <Heading
                        text="See More"
                        element="p"
                        elementType="text"
                        color="dark"
                     />
                  </>
               }
            />
         </div>
         <div className="footer-social">
            <Twitter />
            <Instagram />
            <Facebook />
         </div>
      </FooterMenuEl>
   );
};

export default FooterMenu;
