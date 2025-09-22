import * as React from "react";
const SvgSiDollarAlt1 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.16}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.14 16.962a4.9 4.9 0 0 0 2.812.655c1.483-.104 3.116-1.112 2.997-2.807-.092-1.313-.815-2.066-2.953-2.81s-2.857-1.497-2.95-2.81c-.118-1.695 1.515-2.703 2.998-2.807.974-.068 1.97.16 2.813.655M12 5v14m10-7c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
    />
  </svg>
);
export default SvgSiDollarAlt1;
