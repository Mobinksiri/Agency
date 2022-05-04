import React, { useState } from "react";
import { Container } from "../../Styles/Container";
import { NavbarEl } from "./Style";
import Logo from "../../../assets/Images/logo.png";
import Button from "../../../components/Styles/Button";
import { Heading } from "../../../components/Styles/Heading";
import { HamburgerItems } from "./HamburgerItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
   const [active, setActive] = useState();

   const hamburgerActiveHandler = () => {
      setActive(!active);
   };

   return (
      <NavbarEl>
         <Container>
            <div className="navbar-box">
               <Link to="/">
                  <div className="navbar-logo">
                     <img src={Logo} alt="Logo" />
                  </div>
               </Link>
               <HamburgerItems
                  active={active}
                  hamburgerActiveHandler={hamburgerActiveHandler}
               />
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
                  <Link to="/contact">
                     <Button type="outline" text="Contact" padding="large" />
                  </Link>
               </div>
            </div>
         </Container>
      </NavbarEl>
   );
};
