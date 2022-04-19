import React, { useEffect, useState } from "react";
import { ImageGrid } from "../../Styles/ImageGrid";
import { WorksEl } from "./Style";
import Select from "../../Styles/Select";
import Categories from "./Categories";

export const Works = ({ images }) => {
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
      <WorksEl id="works">
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
         <ImageGrid images={images} />
      </WorksEl>
   );
};
