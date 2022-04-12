import React from "react";
import FaqItem from "./FaqItem";
import { useEffect } from "react";
import { FaqColumnEl } from "./style";

const FaqColumn = () => {
   const faqCheckHandler = () => {
      const faqColumn = document.querySelector("#faq-column");
      const faqs = Array.from(faqColumn.children);
      faqs.forEach((item) => {
         const title = item.children[0];
         item.style.maxHeight = `${title.clientHeight + 88}px`;
      });
   };

   useEffect(() => {
      window.addEventListener("resize", () => {
         faqCheckHandler();
         const faqColumn = document.querySelector("#faq-column");
         const activeFaq = faqColumn.querySelector(".active");
         activeFaq.style.maxHeight = "500px";
      });

      faqCheckHandler();
      const faqColumn = document.querySelector("#faq-column");
      const faqs = Array.from(faqColumn.children);
      faqs[0].classList.add("active");
      faqs[0].style.maxHeight = "500px";
   }, []);

   const faqToggleHandler = (e) => {
      const faqColumn = document.querySelector("#faq-column");
      const faqs = Array.from(faqColumn.children);
      faqs.forEach((item) => {
         const title = item.children[0];
         item.style.maxHeight = `${title.clientHeight + 88}px`;
         item.classList.remove("active");
      });
      const parent = e.target.parentElement;
      parent.style.maxHeight = "500px";
      parent.classList.add("active");
   };

   return (
      <FaqColumnEl id="faq-column">
         <FaqItem
            click={faqToggleHandler}
            title="A digital agency is a business."
            paragraph="Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
            id="faq-1"
         />
         <FaqItem
            click={faqToggleHandler}
            title="Hire to outsource your digital"
            paragraph="Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
            id="faq-2"
         />
         <FaqItem
            click={faqToggleHandler}
            title="Marketing efforts"
            paragraph="Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
            id="faq-3"
         />
         <FaqItem
            click={faqToggleHandler}
            title="Can provide your business"
            paragraph="Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
            id="faq-4"
         />
      </FaqColumnEl>
   );
};

export default FaqColumn;
