import React from "react";
import { Heading } from "../../Styles/Heading";

const Categories = ({ categoryItemsHandler }) => {
   return (
      <div className="categories">
         <div
            className="category category-active"
            onClick={categoryItemsHandler}
         >
            <Heading
               text="Show All"
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Heading
               id="number"
               text="14"
               element="a"
               elementType="text_small"
               color="light-gray"
            />
         </div>
         <div className="category" onClick={categoryItemsHandler}>
            <Heading
               text="Design"
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Heading
               id="number"
               text="6"
               element="a"
               elementType="text_small"
               color="light-gray"
            />
         </div>
         <div className="category" onClick={categoryItemsHandler}>
            <Heading
               text="Branding"
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Heading
               id="number"
               text="4"
               element="a"
               elementType="text_small"
               color="light-gray"
            />
         </div>
         <div className="category" onClick={categoryItemsHandler}>
            <Heading
               text="Illustration"
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Heading
               id="number"
               text="3"
               element="a"
               elementType="text_small"
               color="light-gray"
            />
         </div>
         <div className="category" onClick={categoryItemsHandler}>
            <Heading
               text="Motion"
               element="p"
               elementType="text"
               color="light-gray"
            />
            <Heading
               id="number"
               text="1"
               element="a"
               elementType="text_small"
               color="light-gray"
            />
         </div>
      </div>
   );
};

export default Categories;
