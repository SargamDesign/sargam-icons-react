import * as React from "react";
const SvgSiFlagAlt1 = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3 11.851C3 12.483 3.54 13 4.2 13h14.4c1.32 0 2.4-1.034 2.4-2.298V5.15C21 4.517 20.46 4 19.8 4H5.4C4.08 4 3 5.034 3 6.298zm0 0V20"
    />
  </svg>
);
export default SvgSiFlagAlt1;
