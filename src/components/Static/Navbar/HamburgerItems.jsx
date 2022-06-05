import React from "react";
import { Hamburger } from "./HamburgerStyle";
import { Heading } from "../../Styles/Heading";
import Button from "../../Styles/Button";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

const HamburgerMenuEl = Styled.div`
   display: none;

   @media screen and ${Device.laptop} {
      display: block;
   }
`;

export const HamburgerItems = ({ active, hamburgerActiveHandler }) => {
   return (
      <HamburgerMenuEl>
         <Hamburger>
            <div
               className={
                  !active ? "hamburger-box" : "hamburger-box hamburger-active"
               }
               onClick={hamburgerActiveHandler}
            >
               <div></div>
               <div></div>
               <div></div>
            </div>
         </Hamburger>
         <div
            className={
               !active
                  ? "hamburger-items"
                  : "hamburger-items hamburger-items--active"
            }
         >
            <li className="hamburger-item">
               <Link to="/about">
                  <Heading
                     element="p"
                     elementType="text"
                     color="light"
                     text="About"
                  />
               </Link>
            </li>
            <li className="hamburger-item">
               <Link to="/services">
                  <Heading
                     element="p"
                     elementType="text"
                     color="light"
                     text="Services"
                  />
               </Link>
            </li>
            <li className="hamburger-item">
               <Link to="/portfolio">
                  <Heading
                     element="p"
                     elementType="text"
                     color="light"
                     text="Portfolio"
                  />
               </Link>
            </li>
            <li className="hamburger-item">
               <Link to="/blog">
                  <Heading
                     element="p"
                     elementType="text"
                     color="light"
                     text="Blog"
                  />
               </Link>
            </li>
            <li className="hamburger-item">
               <Link to="/contact">
                  <Button type="outline" text="Contact" padding="large" />
               </Link>
            </li>
         </div>
      </HamburgerMenuEl>
   );
};
