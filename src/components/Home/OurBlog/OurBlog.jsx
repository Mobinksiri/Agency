import React from "react";
import { Container } from "../../Styles/Container";
import { OurBlogEl } from "./style";
import TwoColumn from "../../Styles/TwoColumn";
import { TitleLayout } from "../../Static/TitleLayout/TitleLayout";
import Button from "../../Styles/Button";
import BlogPosts from "../../Static/BlogPosts/BlogPosts";
import Line from "../../Styles/Line";
import PostImage1 from "../../../assets/Images/post-1.png";
import PostImage2 from "../../../assets/Images/post-2.png";
import PostImage3 from "../../../assets/Images/post-3.png";
import BlogPost from "../../Static/BlogPosts/BlogPost";

const OurBlog = () => {
   return (
      <OurBlogEl>
         <Container>
            <TwoColumn
               left={
                  <TitleLayout
                     tag="Our Blog"
                     title="Latest Blog Articles"
                     titleElement="h2"
                     titleElementType="h2"
                     titleColor="dark"
                     paragraph="text"
                     paragraphElement="text"
                     paragraphElementType="text"
                     paragraphColor="dark"
                     maxWidth="320px"
                  />
               }
               right={
                  <Button
                     type="secondary"
                     padding="large"
                     text="Discover All"
                  />
               }
            />
            <BlogPosts
               posts={
                  <>
                     <BlogPost
                        image={PostImage1}
                        title="Stories"
                        body="Agency is a business you hire to outsource"
                        date="5 Nov, 2021"
                        width="31.5%"
                     />
                     <BlogPost
                        image={PostImage2}
                        title="Design"
                        body="Outsource your digital marketing efforts"
                        date="29 Oct, 2021"
                        width="31.5%"
                     />
                     <BlogPost
                        image={PostImage3}
                        title="Marketing"
                        body="Your business with a variety of digital"
                        date="21 Oct, 2021"
                        width="31.5%"
                     />
                  </>
               }
            />
            <Line />
         </Container>
      </OurBlogEl>
   );
};

export default OurBlog;