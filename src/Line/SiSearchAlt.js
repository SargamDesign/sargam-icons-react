import * as React from "react";
const SvgSiSearchAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
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
      d="m21 21-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"
    />
  </svg>
);
export default SvgSiSearchAlt;
