import React from "react";
import { PricingEl } from "./style";
import { Container } from "../../Styles/Container";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import PriceItem from "./PriceItem";
import { Heading } from "../../Styles/Heading";
import PriceTag from "./PriceTag";
import PriceTagOff from "./PriceTagOff";

const Pricing = () => {
   return (
      <PricingEl>
         <Container>
            <TitleLayout
               tag="Pricing"
               title="Check Our Pricing Plans"
               titleElement="h2"
               titleElementType="h2"
               titleColor="dark"
               paragraph="test"
               paragraphElement="text"
               paragraphElementType="text"
               paragraphColor="dark"
               maxWidth="358px"
            />
            <div className="prices">
               <PriceItem
                  id="price-1"
                  active={false}
                  title="Consultation"
                  price="Free"
                  paragraph="Your digital marketing efforts, instead of handling in-house."
                  tags={
                     <>
                        <PriceTag text="Brand Design" />
                        <PriceTagOff text="Market Analysis" />
                        <PriceTagOff text="Production" />
                     </>
                  }
               />
               <PriceItem
                  id="price-2"
                  popular="Popular"
                  active={true}
                  title="Design"
                  price="$1500"
                  paragraph="Provide your business with a variety of digital solutions to promote."
                  tags={
                     <>
                        <PriceTag text="Brand Design" />
                        <PriceTag text="Market Analysis" />
                        <PriceTagOff text="Production" />
                     </>
                  }
               />
               <PriceItem
                  id="price-3"
                  active={false}
                  title="Design+Code"
                  price="$2900"
                  paragraph="Help you hit your marketing goals and grow your business."
                  tags={
                     <>
                        <PriceTag text="Brand Design" />
                        <PriceTag text="Market Analysis" />
                        <PriceTag text="Production" />
                     </>
                  }
               />
            </div>
         </Container>
      </PricingEl>
   );
};

export default Pricing;
