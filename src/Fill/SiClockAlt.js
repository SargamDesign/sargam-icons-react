import * as React from "react";
const SvgSiClockAlt = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9-6a1 1 0 1 0-2 0v5.844c0 .55.375 1.03.909 1.164l3.848.962a1 1 0 1 0 .486-1.94L13 11.22V6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiClockAlt;
