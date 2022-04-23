import React, { useEffect, useState } from "react";
import { ImageGrid } from "../../Styles/ImageGrid";
import { WorksEl } from "./Style";
import Select from "../../Styles/Select";
import Categories from "./Categories";

export const Works = ({
   images,
   categories,
   categoryHandler,
   categoryIndexHandler,
   selectChangeHandler,
}) => {
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

   return (
      <WorksEl id="works">
         {mobile ? (
            <Select
               selectChangeHandler={selectChangeHandler}
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
            <Categories
               categories={categories}
               categoryHandler={(e) => {
                  categoryHandler(e);
               }}
               categoryIndexHandler={categoryIndexHandler}
            />
         )}
         <ImageGrid images={images} />
      </WorksEl>
   );
};
