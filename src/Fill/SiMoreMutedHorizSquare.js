import * as React from "react";
const SvgSiMoreMutedHorizSquare = ({ title, titleId, ...props }) => (
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
      d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiMoreMutedHorizSquare;
