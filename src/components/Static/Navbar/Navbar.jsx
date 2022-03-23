import React, { useState, useEffect } from "react";
import { Container } from "../../Styles/Container";
import { NavbarEl } from "./Style";
import Logo from "../../../assets/Images/logo.png";
import Button from "../../../components/Styles/Button";
import { Heading } from "../../../components/Styles/Heading";
import { HamburgerItems } from "./HamburgerItems";

export const Navbar = () => {
   const [hamburger, setHamburger] = useState(false);
   const [active, setActive] = useState();

   const hamburgerActiveHandler = () => {
      setActive(!active);
   };

   let content = null;

   if (hamburger) {
      content = (
         <HamburgerItems
            active={active}
            hamburgerActiveHandler={hamburgerActiveHandler}
         />
      );
   } else if (!hamburger) {
      content = (
         <>
            <div className="navbar-ul">
               <li className="navbar-ul--item">
                  <Heading
                     element="a"
                     elementType="text"
                     color="light"
                     text="About"
                  />
               </li>
               <li className="navbar-ul--item">
                  <Heading
                     element="a"
                     elementType="text"
                     color="light"
                     text="Services"
                  />
               </li>
               <li className="navbar-ul--item">
                  <Heading
                     element="a"
                     elementType="text"
                     color="light"
                     text="Pricing"
                  />
               </li>
               <li className="navbar-ul--item">
                  <Heading
                     element="a"
                     elementType="text"
                     color="light"
                     text="Blog"
                  />
               </li>
            </div>
            <div className="navbar-contact">
               <Button type="outline" text="Contact" padding="large" />
            </div>
         </>
      );
   }

   const getWindowSize = () => {
      if (window.innerWidth <= 1024) {
         setHamburger(true);
      } else {
         setHamburger(false);
      }
   };

   useEffect(() => {
      getWindowSize();
      window.addEventListener("resize", getWindowSize);
   }, []);

   return (
      <NavbarEl>
         <Container>
            <div className="navbar-box">
               <div className="navbar-logo">
                  <img src={Logo} alt="Logo" />
               </div>
               {content}
            </div>
         </Container>
      </NavbarEl>
   );
};
