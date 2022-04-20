import React from "react";
import NewsLetters from "../../Static/Newsletter/Newsletter";
import Styled from "styled-components";
import Line from "../../Styles/Line";

const BlogNewsLettersEl = Styled.div`
   #newsLetters {
      #container {
         .newsletter-box {
            margin-bottom: 74px;
         }
      }
   }
`;

const BlogNewsLetters = () => {
   return (
      <BlogNewsLettersEl>
         <NewsLetters children={<Line />} />
      </BlogNewsLettersEl>
   );
};

export default BlogNewsLetters;
