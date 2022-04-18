import React from "react";
import { Hamburger } from "./HamburgerStyle";
import { Heading } from "../../Styles/Heading";
import Button from "../../Styles/Button";
import { Link } from "react-router-dom";

export const HamburgerItems = ({ active, hamburgerActiveHandler }) => {
   return (
      <>
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
               <Heading
                  element="p"
                  elementType="text"
                  color="light"
                  text="Pricing"
               />
            </li>
            <li className="hamburger-item">
               <Heading
                  element="p"
                  elementType="text"
                  color="light"
                  text="Blog"
               />
            </li>
            <li className="hamburger-item">
               <Button type="outline" text="Contact" padding="large" />
            </li>
         </div>
      </>
   );
};
