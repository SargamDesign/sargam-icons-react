import * as React from "react";
const SvgSiSwapVert = ({ title, titleId, ...props }) => (
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
      d="m13 18-4 4m0 0-4-4m4 4V10m10-4-4-4m0 0-4 4m4-4v12"
    />
  </svg>
);
export default SvgSiSwapVert;
