import * as React from "react";
const SvgSiChecklistAlt = ({ title, titleId, ...props }) => (
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
      d="m16 8 2 2 4-4M2 8h10m4 8 2 2 4-4M2 16h10"
    />
  </svg>
);
export default SvgSiChecklistAlt;
