import React from "react";
import { Hamburger } from "./HamburgerStyle";
import { Heading } from "../../Styles/Heading";
import Button from "../../Styles/Button";

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
               <Heading
                  element="a"
                  elementType="text"
                  color="light"
                  text="About"
               />
            </li>
            <li className="hamburger-item">
               <Heading
                  element="a"
                  elementType="text"
                  color="light"
                  text="Services"
               />
            </li>
            <li className="hamburger-item">
               <Heading
                  element="a"
                  elementType="text"
                  color="light"
                  text="Pricing"
               />
            </li>
            <li className="hamburger-item">
               <Heading
                  element="a"
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
