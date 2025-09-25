import * as React from "react";
const SvgSiFlagAlt2 = ({ title, titleId, ...props }) => (
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
      d="M21 4H3l4.613 9.802L21 14l-5-5z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m11 21-3.387-7.198m0 0L3 4h18l-5 5 5 5z"
    />
  </svg>
);
export default SvgSiFlagAlt2;
