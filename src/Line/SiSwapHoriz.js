import * as React from "react";
const SvgSiSwapHoriz = ({ title, titleId, ...props }) => (
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
      d="M6 13 2 9m0 0 4-4M2 9h12m4 10 4-4m0 0-4-4m4 4H10"
    />
  </svg>
);
export default SvgSiSwapHoriz;
