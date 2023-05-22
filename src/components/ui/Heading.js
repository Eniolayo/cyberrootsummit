import ctl from "@netlify/classnames-template-literals";
import React from "react";

export default function Heading({ children, variant, styles, level }) {
  switch (level) {
    case "h1":
      return <h1 className={`${HeadingStyle(variant, styles)}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${HeadingStyle(variant, styles)}`}>{children}</h2>;
    case "h3":
      return <h3 className={`${HeadingStyle(variant, styles)}`}>{children}</h3>;
    case "h4":
      return <h4 className={`${HeadingStyle(variant, styles)}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${HeadingStyle(variant, styles)}`}>{children}</h5>;
    case "h6":
      return <h6 className={`${HeadingStyle(variant, styles)}`}>{children}</h6>;
  }
}

function HeadingStyle(variant, styles) {
  switch (variant) {
    case "sm":
      return ctl(`
            text-lg 
            m:text-xl
            capitalize
            ${styles}
        `);
    case "s":
      return ctl(`
            text-xl 
            m:text-lg
            capitalize
            ${styles}
        `);
    case "m":
      return ctl(`
            text-xl 
            m:text-2xl
            capitalize
            ${styles}
        `);
    case "md":
      return ctl(`
            text-xl 
            m:text-2xl 
            lg:text-3xl
            capitalize
            ${styles}
        `);
    case "lg":
      return ctl(`
            text-3xl 
            m:text-4xl
            capitalize
            ${styles}
        `);
    case "xl":
      return ctl(`
            text-3xl 
            m:text-4xl
            lg:text-5xl
            capitalize
            ${styles}
        `);
    case "2xl":
      return ctl(`
            text-4xl 
            m:text-5xl
            lg:text-6xl
            capitalize
            ${styles}
        `);
    case "3xl":
      return ctl(`
            text-5xl 
            m:text-6xl
            lg:text-7xl
            capitalize
            ${styles}
        `);
    default:
      return ctl(`
            ${styles}
        `);
  }
}
