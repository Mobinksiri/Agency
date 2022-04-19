import React from "react";

const Number = ({ number, className, click }) => {
   return (
      <div onClick={click} className={className} id="page-number">
         <p>{number}</p>
      </div>
   );
};

export default Number;
