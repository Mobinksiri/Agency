import Styled from "styled-components";
import React from "react";
import { Heading } from "../../Styles/Heading";
import { Device } from "../../Styles/Devices";

const BlogPostEl = Styled.div`
      width: ${(props) => props.width};
      margin-bottom: 50px;
   
      .image {
         width: 100%;
         height: 224px;
         margin-bottom: 26px;
         border-radius: 6px;
         overflow: hidden;

         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
      }

      p {
         margin-bottom: 15px;
      }

      h4 {
         margin-bottom: 15px;
         max-width: 90%;
      }

      @media screen and ${Device.laptop} {
         width: 48%;
         margin-bottom: 50px;
      }
      @media screen and (max-width: 700px) {
         width: 100%;
      }
`;

const BlogPost = ({ title, image, body, date, width }) => {
   return (
      <BlogPostEl id="blog-post" width={width}>
         <div className="image">
            <img src={image} alt={title} />
         </div>
         <div className="description">
            <Heading
               text={title}
               element="p"
               elementType="text-big"
               color="dark"
            />
            <Heading text={body} element="h4" elementType="h4" color="dark" />
            <Heading
               text={date}
               element="span"
               elementType="text"
               color="dark-gray"
            />
         </div>
      </BlogPostEl>
   );
};

export default BlogPost;
