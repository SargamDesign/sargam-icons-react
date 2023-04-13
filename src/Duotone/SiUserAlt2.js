import * as React from "react";
const SvgSiUserAlt2 = ({ title, titleId, ...props }) => (
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
      d="M21 22c0-4.418-3.627-8-8.1-8h-1.8C6.626 14 3 17.582 3 22M8 6a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0V6Z"
    />
  </svg>
);
export default SvgSiUserAlt2;
