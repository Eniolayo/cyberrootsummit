import React from "react";
import ctl from "@netlify/classnames-template-literals";

function Button({ variant }) {
  const btnStyles = ctl(`
    text-xl 
    bg-brightNavyBlue 
    text-white 
    px-8 
    py-3 
    rounded-md
  `);
  return <button className="">Contact Us</button>;
}

export default Button;
