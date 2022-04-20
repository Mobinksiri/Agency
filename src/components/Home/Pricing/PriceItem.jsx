import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Heading } from "../../Styles/Heading";
import Button from "../../Styles/Button";
import { Device } from "../../Styles/Devices";
import { Link } from "react-router-dom";

const PriceEl = Styled.div`
      background-color: ${(props) => props.background};
      padding: ${(props) => props.padding};
      width: 33.333333333333333333333333333%;
      height: fit-content;

      #popular {
         padding: 4px 15px 2px 17px;
         background-color: #EF6D58;
         border-radius: 30px;
         display: inline-block;
      }

      h5 {
         margin-bottom: 17px;
      }

      h3 {
         margin-bottom: 15px;
      }
      
      p {
         margin-bottom: 25px;
      }
      
      .price-tags {
         margin-bottom: 30px;
         
         #price-tag {
            margin-bottom: 16px;

            p {
               margin-bottom: 0;
            }
         }
      }

      @media screen and (max-width: 850px) {
         height: auto;
         width: 50%;
      }
      @media screen and (max-width: 650px) {
         height: auto;
         width: 100%;
      }
      @media screen and ${Device.mobileL} {
         padding-right: 28px;
         padding-left: 28px;
      }
      
`;

const PriceItem = ({ active, popular, title, price, paragraph, tags, id }) => {
   const [padding, setPadding] = useState("");
   const [background, setBackground] = useState("");

   const checkPaddingHandler = () => {
      if (active) {
         setPadding("32px 48px 48px 48px");
         setBackground("#fff");
      } else {
         setPadding("44px 48px 48px 48px");
         setBackground("transparent");
      }
   };

   useEffect(() => {
      checkPaddingHandler();
   }, []);

   return (
      <PriceEl padding={padding} background={background} id={id}>
         {active ? (
            <Heading
               id="popular"
               text={popular}
               element="p"
               elementType="text"
               color="light"
            />
         ) : (
            []
         )}
         <Heading
            text={title}
            element="h5"
            elementType="h5"
            color="dark-accent"
         />
         <Heading text={price} element="h3" elementType="h3" color="dark" />
         <Heading
            text={paragraph}
            element="p"
            elementType="text"
            color="dark-gray"
         />
         <div className="price-tags">{tags}</div>
         <Link to="/contact">
            <Button
               text="Contact Us"
               padding="large"
               type={active ? "light-primary" : "secondary"}
            />
         </Link>
      </PriceEl>
   );
};

export default PriceItem;
