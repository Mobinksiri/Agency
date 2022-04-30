import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Heading } from "../../Styles/Heading";
import { ReactComponent as Back } from "../../../assets/Images/back.svg";
import { Device } from "../../Styles/Devices";
import MapImage from "../../../assets/Images/bit-map-2.png";
import TitleImage from "../../../assets/Images/work-4.png";
import { ReactComponent as Twitter } from "../../../assets/Images/Twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/Images/Instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/Images/Facebook.svg";
import { useParams } from "react-router-dom";
import Works from "../../../Projects-2.json";

const WorkEl = Styled.div`
   padding: 38px 0 100px 0;
   background-color: #FDF0E9;

   .back {
      display: flex;

      p {
         padding-left: 15px;
      }

      svg, p {
         cursor: pointer;
      }
   }

   #work-title {
      margin: 50px 0 22px 0;
   }

   #work-about {
      margin-bottom: 32px;
   }

   #work-paragraph {
      margin-bottom: 50px;
   }

   .information {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;

      &-column {
         width: 50%;

         h5 {
            margin-bottom: 15px;
         }

         .client {
            margin-bottom: 40px;
         }
      }
   }

   .title-image {
      position: relative;
      margin-bottom: 75px;
      height: 640px;

      img {
         width: 1000px;
         height: 640px;
         object-fit: cover;
         position: absolute;
         top: 0;
         left: 50%;
         transform: translateX(-50%);
         border-radius: 6px;
      }
   }

   .body {
      margin-bottom: 70px;
      
      h3 {
         margin-bottom: 30px;
      }
   }

   .share {
      display: flex;
      flex-flow: column;
      align-items: center;

      .social-media {
         margin-top: 24px;
         
         svg {
            margin: 0 4px;
         }
      }
   }

   @media screen and ${Device.laptop} {
      .title-image {
         height: 500px;

         img {
            width: 120%;
            height: 500px;
         }
      }
   }

   @media screen and ${Device.tablet} {
      .title-image {
         height: 400px;

         img {
            width: 100%;
            height: 400px;
         }
      }
   }

   @media screen and (max-width: 550px) {
      .title-image {
         height: 300px;

         img {
            height: 300px;
         }
      }
   }

   @media screen and ${Device.mobileL} {

      .information {
         flex-flow: column;

         &-column {
            width: 100%;
         }

         .category {
            margin-bottom: 40px;
         }
      }
      
      .title-image {
         height: 200px;

         img {
            height: 200px;
         }
      }
   }
   
`;

const Container = Styled.div`
   max-width: 570px;
   margin: 0 auto;

   @media screen and ${Device.tablet} {
      max-width: 100%;
      padding: 0 32px;
   }
   @media screen and ${Device.mobileL} {
      padding: 0 24px;
   }
   @media screen and ${Device.mobileM} {
      padding: 0 16px;
   }
`;

const Work = () => {
   const params = useParams();
   const [Post, setPost] = useState(null);

   const GetWorkHandler = () => {
      const work = Works.filter((work) => {
         return work.id == params.id;
      });
      setPost(work[0]);
   };

   useEffect(() => {
      GetWorkHandler();
   }, []);

   const backHandler = (e) => {
      window.history.go(-1);
   };

   return (
      <WorkEl>
         {Post ? (
            <Container>
               <div className="back">
                  <Back onClick={backHandler} />
                  <Heading
                     click={backHandler}
                     text="Back to portfolio"
                     element="p"
                     elementType="label"
                     color="dark"
                  />
               </div>
               <Heading
                  id="work-title"
                  text={Post.title + " Project"}
                  element="h1"
                  elementType="h1"
                  color="dark"
               />
               <Heading
                  id="work-about"
                  text={Post.about}
                  element="p"
                  elementType="text_big"
                  color="dark"
               />
               <Heading
                  id="work-paragraph"
                  text={Post.paragraph}
                  element="p"
                  elementType="text"
                  color="dark-gray"
               />
               <div className="information">
                  <div className="information-column category">
                     <Heading
                        text="Category"
                        element="h5"
                        elementType="h5"
                        color="dark-accent"
                     />
                     <div className="categories">
                        {Post.categories.map((category) => (
                           <Heading
                              key={category}
                              text={category}
                              element="p"
                              elementType="text"
                              color="dark"
                           />
                        ))}
                     </div>
                  </div>
                  <div className="information-column client-date">
                     <div className="client">
                        <Heading
                           text="Client"
                           element="h5"
                           elementType="h5"
                           color="dark-accent"
                        />
                        <img src={MapImage} alt="bit-map" />
                     </div>
                     <div className="date">
                        <Heading
                           text="Date"
                           element="h5"
                           elementType="h5"
                           color="dark-accent"
                        />
                        <Heading
                           text={Post.date}
                           element="p"
                           elementType="text_big"
                           color="dark"
                        />
                     </div>
                  </div>
               </div>
               <div className="title-image">
                  <img src={Post.titleImage} alt="" />
               </div>
               <div className="body">
                  <Heading
                     text={Post.bodyTitle1}
                     element="h3"
                     elementType="h3"
                     color="dark"
                  />
                  <Heading
                     text={Post.body1}
                     element="p"
                     elementType="text"
                     color="dark-gray"
                  />
               </div>
               <div className="body">
                  <Heading
                     text={Post.bodyTitle2}
                     element="h3"
                     elementType="h3"
                     color="dark"
                  />
                  <Heading
                     text={Post.body2}
                     element="p"
                     elementType="text"
                     color="dark-gray"
                  />
               </div>
               <div className="share">
                  <Heading
                     text="SHARE ON"
                     element="p"
                     elementType="text_small"
                     color="dark-gray"
                  />
                  <div className="social-media">
                     <Twitter />
                     <Facebook />
                     <Instagram />
                  </div>
               </div>
            </Container>
         ) : null}
      </WorkEl>
   );
};

export default Work;
