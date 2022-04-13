import React from "react";
import { Container } from "../../Styles/Container";
import GridBorder from "../../Styles/GridBorder";
import PhoneImage from "../../../assets/Images/phone.png";
import EmailImage from "../../../assets/Images/email.png";
import AddressImage from "../../../assets/Images/address.png";
import { Heading } from "../../Styles/Heading";
import { ContactColEl } from "./style";

const ContactCol = () => {
   return (
      <ContactColEl>
         <Container>
            <GridBorder
               column="3"
               size="33.33333333%"
               padding="32px 48px 38px 48px"
               divisions={
                  <>
                     <div>
                        <span>
                           <img src={PhoneImage} alt="Phone" />
                           <Heading
                              text="Phone"
                              element="h5"
                              elementType="h5"
                              color="dark-accent"
                           />
                        </span>
                        <Heading
                           text="+1 (234) 567-89-00"
                           element="p"
                           elementType="text_big"
                           color="dark"
                        />
                     </div>
                     <div>
                        <span>
                           <img src={EmailImage} alt="Email" />
                           <Heading
                              text="Phone"
                              element="h5"
                              elementType="h5"
                              color="dark-accent"
                           />
                        </span>
                        <Heading
                           text="info@agency.com"
                           element="p"
                           elementType="text_big"
                           color="dark"
                        />
                     </div>
                     <div>
                        <span>
                           <img src={AddressImage} alt="Address" />
                           <Heading
                              text="Phone"
                              element="h5"
                              elementType="h5"
                              color="dark-accent"
                           />
                        </span>
                        <Heading
                           text="2247 Lunetta Street, TX 76301"
                           element="p"
                           elementType="text_big"
                           color="dark"
                        />
                     </div>
                  </>
               }
            />
         </Container>
      </ContactColEl>
   );
};

export default ContactCol;
