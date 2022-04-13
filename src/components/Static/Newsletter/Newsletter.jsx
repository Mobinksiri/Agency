import React from "react";
import { NewsletterEl } from "./style";
import { Container } from "../../Styles/Container";
import { Heading } from "../../Styles/Heading";
import Input from "../../Styles/Input";
import Button from "../../Styles/Button";

const Newsletter = () => {
   return (
      <NewsletterEl>
         <Container>
            <div className="newsletter-box">
               <Heading
                  text="Newsletter"
                  element="h3"
                  elementType="h3"
                  color="dark"
               />
               <div className="newsletter-input">
                  <Input
                     type="text"
                     classType="light"
                     placeholder="Your email"
                  />
                  <Button padding="large" text="Subscribe" type="secondary" />
               </div>
            </div>
         </Container>
      </NewsletterEl>
   );
};

export default Newsletter;
