import * as React from "react";
const SvgSiCopy = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M18.6 9h-7.2A2.4 2.4 0 0 0 9 11.4v7.2a2.4 2.4 0 0 0 2.4 2.4h7.2a2.4 2.4 0 0 0 2.4-2.4v-7.2A2.4 2.4 0 0 0 18.6 9Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiCopy;
