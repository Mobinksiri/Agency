import React from "react";
import { Heading } from "../../Styles/Heading";

const Categories = ({ categories, categoryHandler, categoryIndexHandler }) => {
   return (
      <div className="categories">
         {categories ? (
            categories.map((category) => (
               <div
                  key={category}
                  className={`${
                     category === "Show All"
                        ? "category category-active"
                        : "category"
                  }`}
                  onClick={categoryHandler}
               >
                  <Heading
                     text={category}
                     element="p"
                     elementType="text"
                     color="light-gray"
                  />
                  <Heading
                     id="number"
                     text={categoryIndexHandler(category)}
                     element="a"
                     elementType="text_small"
                     color="light-gray"
                  />
               </div>
            ))
         ) : (
            <div>Loading</div>
         )}
      </div>
   );
};

export default Categories;
