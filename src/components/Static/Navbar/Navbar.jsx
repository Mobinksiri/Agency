import React, { useState, useEffect } from "react";
import { Container } from "../../Styles/Container";
import { NavbarEl } from "./Style";
import Logo from "../../../assets/Images/logo.png";
import Button from "../../../components/Styles/Button";
import { Heading } from "../../../components/Styles/Heading";
import { HamburgerItems } from "./HamburgerItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
   const [hamburger, setHamburger] = useState(false);
   const [active, setActive] = useState();

   const hamburgerActiveHandler = () => {
      setActive(!active);
   };

   let content = <div>Loading...</div>;

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
                  <Link to="/about">
                     <Heading
                        element="p"
                        elementType="text"
                        color="light"
                        text="About"
                     />
                  </Link>
               </li>
               <li className="navbar-ul--item">
                  <Link to="/services">
                     <Heading
                        element="p"
                        elementType="text"
                        color="light"
                        text="Services"
                     />
                  </Link>
               </li>
               <li className="navbar-ul--item">
                  <Heading
                     element="p"
                     elementType="text"
                     color="light"
                     text="Pricing"
                  />
               </li>
               <li className="navbar-ul--item">
                  <Link to="/blog">
                     <Heading
                        element="p"
                        elementType="text"
                        color="light"
                        text="Blog"
                     />
                  </Link>
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
      window.addEventListener("resize", getWindowSize);
      getWindowSize();
   }, []);

   return (
      <NavbarEl>
         <Container>
            <div className="navbar-box">
               <Link to="/">
                  <div className="navbar-logo">
                     <img src={Logo} alt="Logo" />
                  </div>
               </Link>
               {content}
            </div>
         </Container>
      </NavbarEl>
   );
};
