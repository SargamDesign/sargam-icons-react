import * as React from "react";
const SvgSiUnderline = ({ title, titleId, ...props }) => (
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
      d="M18 3v9c0 3.3-2.7 6-6 6s-6-2.7-6-6V3M4 21h16M4 3h4m8 0h4"
    />
  </svg>
);
export default SvgSiUnderline;
