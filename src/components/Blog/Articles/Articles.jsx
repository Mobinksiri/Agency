import React from "react";
import Styled from "styled-components";
import BlogPosts from "../../Static/BlogPosts/BlogPosts";
import Image1 from "../../../assets/Images/post-1.png";
import Image2 from "../../../assets/Images/post-2.png";
import Image3 from "../../../assets/Images/post-3.png";
import Image4 from "../../../assets/Images/post-4.png";
import Image5 from "../../../assets/Images/post-5.png";
import Image6 from "../../../assets/Images/post-6.png";
import Image7 from "../../../assets/Images/post-7.png";
import Image8 from "../../../assets/Images/post-8.png";
import Image9 from "../../../assets/Images/post-9.png";
import Image10 from "../../../assets/Images/post-10.png";
import { Container } from "../../Styles/Container";
import BlogPost from "../../Static/BlogPosts/BlogPost";
import Line from "../../Styles/Line";
import { Device } from "../../Styles/Devices";
import Button from "../../Styles/Button";

const ArticlesEl = Styled.div`
   background-color: #FDF0E9;
   padding: 80px 0;

   #blog-posts--1 {
      padding-bottom: 70px;

      #blog-post {
         margin-bottom: 0;
         
         .image {
            height: 336px;
         }

         p {
            margin-bottom: 19px;
         }

         h4 {
            font-weight: 800;
            font-size: 40px;
            line-height: 48px;
            margin-bottom: 12px;
         }
      }
   }

   #blog-posts--2 {
      padding: 80px 0 70px 0;
   }

   .button {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 80px;
   }
   
   @media screen and ${Device.laptop} {
      #blog-posts--1 {
         #blog-post {
            .image {
               height: 224px;
            }
            h4 {
               font-weight: 700;
               font-size: 24px;
               line-height: 32px;
            }
         }
      }
   }

   @media screen and (max-width: 700px) {

         .line {
            #line:first-child {
               display: none;
            }
         }

         #blog-posts--1 {
            padding: 0;
         }

         #blog-posts--2 {
            padding: 0 0 70px 0;
         }

         #blog-posts--1, #blog-posts--2 {
            
            #blog-post {
               margin-bottom: 50px;

               .image {
                  height: 356px;
               }
            }
         }
      }

   @media screen and (max-width: 500px) {

      #blog-posts--1, #blog-posts--2 {
         #blog-post {
            .image {
               height: 224px;
            }
         }
      }

      #blog-posts--2 {
         padding: 0 0 50px 0;
      }
   }

   @media screen and ${Device.mobileL} {
      padding: 70px 0;
   }
`;

const Articles = () => {
   return (
      <ArticlesEl>
         <Container>
            <BlogPosts
               id="blog-posts--1"
               posts={
                  <>
                     <BlogPost
                        title="Stories"
                        body="Performance marketing agencies specializev"
                        date="7 Dec, 2021"
                        image={Image6}
                        width="49%"
                     />
                     <BlogPost
                        title="Design"
                        body="Digital marketing channels"
                        date="23 Nov, 2021"
                        image={Image5}
                        width="49%"
                     />
                  </>
               }
            />
            <div className="line">
               <Line />
            </div>
            <BlogPosts
               id="blog-posts--2"
               posts={
                  <>
                     <BlogPost
                        title="Stories"
                        body="Agency is a business you hire to outsource"
                        date="5 Nov, 2021"
                        image={Image1}
                        width="31.5%"
                     />
                     <BlogPost
                        title="Design"
                        body="Outsource your digital marketing efforts"
                        date="29 Oct, 2021"
                        image={Image7}
                        width="31.5%"
                     />
                     <BlogPost
                        title="Marketing"
                        body="Your business with a variety of digital"
                        date="21 Oct, 2021"
                        image={Image6}
                        width="31.5%"
                     />
                     <BlogPost
                        title="Design"
                        body="Analytics to track and report on results"
                        date="17 Nov, 2021"
                        image={Image8}
                        width="31.5%"
                     />
                     <BlogPost
                        title="Branding"
                        body="The most well known performance"
                        date="7 Dec, 2021"
                        image={Image9}
                        width="31.5%"
                     />
                     <BlogPost
                        title="Stories"
                        body="Marketing channels native advertising"
                        date="9 Oct, 2021"
                        image={Image10}
                        width="31.5%"
                     />
                  </>
               }
            />
            <div className="button">
               <Button type="secondary" padding="large" text="Load More" />
            </div>
            <Line />
         </Container>
      </ArticlesEl>
   );
};

export default Articles;
