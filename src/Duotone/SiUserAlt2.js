import * as React from "react";
const SvgSiUserAlt2 = ({ title, titleId, ...props }) => (
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
      d="M21 22c0-4.418-3.627-8-8.1-8h-1.8C6.626 14 3 17.582 3 22"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0V6Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiUserAlt2;
