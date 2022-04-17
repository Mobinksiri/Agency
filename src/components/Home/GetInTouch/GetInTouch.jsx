import React from "react";
import { GetInTouchEl } from "./style";
import { Container } from "../../Styles/Container";
import { Heading } from "../../Styles/Heading";
import Input from "../../Styles/Input";
import Select from "../../Styles/Select";
import Button from "../../Styles/Button";

const GetInTouch = () => {
   return (
      <GetInTouchEl>
         <Container>
            <div className="form-box">
               <form action="" method="get">
                  <Heading
                     text="Get In Touch"
                     element="h4"
                     elementType="h4"
                     color="dark"
                  />
                  <Input
                     type="text"
                     placeholder="Your email"
                     classType="light"
                  />
                  <Select
                     classType="light"
                     options={
                        <>
                           <option value="Subject" hidden>
                              Subject
                           </option>
                           <option value="test1">test1</option>
                           <option value="test2">test2</option>
                           <option value="test3">test3</option>
                           <option value="test4">test4</option>
                        </>
                     }
                  />
                  <textarea placeholder="Message"></textarea>
                  <div className="button">
                     <Button
                        type="light-primary"
                        text="Submit Now"
                        padding="large"
                     />
                  </div>
               </form>
            </div>
         </Container>
      </GetInTouchEl>
   );
};

export default GetInTouch;
