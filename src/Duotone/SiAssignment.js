import * as React from "react";
const SvgSiAssignment = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      fillOpacity={0.16}
      d="M16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8v2.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 14h10M7 11h10M7 17h6M10 3a2 2 0 1 1 4 0M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3ZM16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8v2.2Z"
    />
  </svg>
);
export default SvgSiAssignment;
