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
   return (
      <WorksEl id="works">
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
         <Categories
            categories={categories}
            categoryHandler={(e) => {
               categoryHandler(e);
            }}
            categoryIndexHandler={categoryIndexHandler}
         />
         <ImageGrid images={images} />
      </WorksEl>
   );
};
