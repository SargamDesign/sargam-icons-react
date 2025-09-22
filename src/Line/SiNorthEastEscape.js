import * as React from "react";
const SvgSiNorthEastEscape = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M9 7h-.6C7.07 7 6 8.07 6 9.4v6.2C6 16.93 7.07 18 8.4 18h6.2c1.33 0 2.4-1.07 2.4-2.4V15m-7-1 8-8m0 0h-4m4 0v4"
    />
  </svg>
);
export default SvgSiNorthEastEscape;
