import * as React from "react";
const SvgSiAssignment = ({ title, titleId, ...props }) => (
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
      d="M7 14h10M7 11h10M7 17h6m3-14v2.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3m2 0a2 2 0 1 1 4 0M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3"
    />
  </svg>
);
export default SvgSiAssignment;
