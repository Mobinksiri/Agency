import React, { useEffect, useState } from "react";
import { ImageGrid } from "../../Styles/ImageGrid";
import PortfolioWork from "../PortfolioWork/PortfolioWork";
import { WorksEl } from "./Style";
import WorkImage1 from "../../../assets/Images/work-1.png";
import WorkImage2 from "../../../assets/Images/work-2.png";
import WorkImage3 from "../../../assets/Images/work-3.png";
import WorkImage4 from "../../../assets/Images/work-4.png";
import Select from "../../Styles/Select";
import Categories from "./Categories";

export const Works = () => {
   const [mobile, setMobile] = useState(false);

   const getWindowSize = () => {
      if (window.innerWidth <= 425) {
         setMobile(true);
      } else {
         setMobile(false);
      }
   };

   useEffect(() => {
      getWindowSize();
      window.addEventListener("resize", getWindowSize);
   }, []);

   const categoryItemsHandler = (e) => {
      const categories = document.querySelector(".categories");
      const categoriesArray = Array.from(categories.children);
      const activeSpan = e.target;
      categoriesArray.map((category) => {
         category.className = "category";
      });
      activeSpan.classList.add("category-active");
   };

   return (
      <WorksEl>
         {mobile ? (
            <Select
               classType="dark"
               options={
                  <>
                     <option value="Show All">Show All</option>
                     <option value="Design">Design</option>
                     <option value="Branding">Branding</option>
                     <option value="Illustration">Illustration</option>
                     <option value="Motion">Motion</option>
                  </>
               }
            />
         ) : (
            <Categories categoryItemsHandler={categoryItemsHandler} />
         )}
         <ImageGrid
            images={
               <>
                  <PortfolioWork
                     id="work1"
                     image={WorkImage1}
                     tag="Design"
                     name="SOFA"
                  />
                  <PortfolioWork
                     id="work2"
                     image={WorkImage2}
                     tag="Branding"
                     name="KeyBoard"
                  />
                  <PortfolioWork
                     id="work3"
                     image={WorkImage3}
                     tag="Illustration"
                     name="Work Media"
                  />
                  <PortfolioWork
                     id="work4"
                     image={WorkImage4}
                     tag="Motion"
                     name="DDDone"
                  />
               </>
            }
         />
      </WorksEl>
   );
};
