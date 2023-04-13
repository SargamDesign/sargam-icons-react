import * as React from "react";
const SvgSiDownRight = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M19 15H9.4A4.4 4.4 0 0 1 5 10.6V5m14 10-4 4m4-4-4-4"
    />
  </svg>
);
export default SvgSiDownRight;
