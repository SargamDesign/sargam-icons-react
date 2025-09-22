import * as React from "react";
const SvgSiSwapHoriz = ({ title, titleId, ...props }) => (
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
      d="M7 11 3 7m0 0 4-4M3 7h18m-4 14 4-4m0 0-4-4m4 4H3"
    />
  </svg>
);
export default SvgSiSwapHoriz;
